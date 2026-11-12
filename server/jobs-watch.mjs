import {db} from './store.mjs';
import {createHash} from 'node:crypto';
import {parseJobs,normalizeJob} from './jobs-parsers.mjs';
export const JOB_SOURCES=[
 {name:'AFJV',url:'https://emploi.afjv.com/rss.xml',kind:'rss'},
 ...Array.from({length:10},(_,i)=>({name:'ProfilCulture',url:`https://www.profilculture.com/annonce/index/liste/page/${i+1}`,kind:'profil'})),
 {name:'CIPAC',url:'https://cipac.net/annonces',kind:'cipac'}
];
db.exec(`CREATE TABLE IF NOT EXISTS external_jobs(id TEXT PRIMARY KEY,url TEXT UNIQUE NOT NULL,payload TEXT NOT NULL,first_seen TEXT NOT NULL,last_seen TEXT NOT NULL);
CREATE TABLE IF NOT EXISTS jobs_watch_runs(id INTEGER PRIMARY KEY,ran_at TEXT NOT NULL,payload TEXT NOT NULL);`);
let running=null;
async function collect(){
 const now=new Date().toISOString(),today=now.slice(0,10),reports=[];let added=0,found=0;
 const save=db.prepare('INSERT INTO external_jobs(id,url,payload,first_seen,last_seen) VALUES(?,?,?,?,?) ON CONFLICT(url) DO UPDATE SET payload=excluded.payload,last_seen=excluded.last_seen');
 for(let index=0;index<JOB_SOURCES.length;index+=3){
  await Promise.all(JOB_SOURCES.slice(index,index+3).map(async source=>{
   try{
    const response=await fetch(source.url,{signal:AbortSignal.timeout(15000),headers:{'User-Agent':'LaCroiseeDesArts-JobsWatch/1.0'}});
    if(!response.ok)throw new Error('HTTP '+response.status);
    const bytes=await response.arrayBuffer();if(bytes.byteLength>4000000)throw new Error('Réponse trop volumineuse');
    const utf8=new TextDecoder('utf-8').decode(bytes),text=utf8.includes('\uFFFD')?new TextDecoder('windows-1252').decode(bytes):utf8;
    const jobs=parseJobs(text,source);if(!jobs.length)throw new Error('Aucune annonce extraite, format à vérifier');
    let accepted=0;
    for(const job of jobs){
     if(job.deadline&&job.deadline<today)continue;
     if(job.publishedAt&&(job.publishedAt>today||Date.parse(today)-Date.parse(job.publishedAt)>90*86400000))continue;
     const id='watch-'+createHash('sha256').update(job.url).digest('hex').slice(0,24);
     if(!db.prepare('SELECT id FROM external_jobs WHERE url=?').get(job.url))added++;
     const payload={...job,id,contactUrl:job.url,sourceName:source.name,verifiedAt:today,remuneration:'Non précisée dans la liste source',norme:'Consulter les critères dans l’annonce d’origine'};
     save.run(id,job.url,JSON.stringify(payload),now,now);found++;accepted++;
    }
    reports.push({source:source.name,url:source.url,status:'ok',found:accepted});
   }catch(error){reports.push({source:source.name,url:source.url,status:'erreur',message:error.message});}
  }));
 }
 const result={ranAt:now,added,found,sources:reports};
 db.prepare('INSERT INTO jobs_watch_runs(ran_at,payload) VALUES(?,?)').run(now,JSON.stringify(result));return result;
}
export function runJobsWatch(){if(!running)running=collect().finally(()=>{running=null;});return running;}
export function jobsWatchStatus(){const row=db.prepare('SELECT payload FROM jobs_watch_runs ORDER BY id DESC LIMIT 1').get();return {intervalHours:6,running:!!running,lastRun:row?JSON.parse(row.payload):null};}
export function externalJobs(){
 const today=new Date().toISOString().slice(0,10),seen=new Set();
 return db.prepare("SELECT payload FROM external_jobs WHERE last_seen>datetime('now','-30 days') ORDER BY last_seen DESC LIMIT 1000").all().map(r=>JSON.parse(r.payload)).filter(j=>{if(j.deadline&&j.deadline<today)return false;const key=normalizeJob(j.title+' '+j.company+' '+j.location);if(seen.has(key))return false;seen.add(key);return true;});
}
export function startJobsWatch(){if(process.env.NODE_ENV==='test')return;const last=jobsWatchStatus().lastRun;if(!last||Date.now()-Date.parse(last.ranAt)>6*3600000)runJobsWatch().catch(()=>{});setInterval(()=>runJobsWatch().catch(()=>{}),6*3600000).unref();}
