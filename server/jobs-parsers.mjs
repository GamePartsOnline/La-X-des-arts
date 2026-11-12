export function plain(value='') {
  return value.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g,'$1').replace(/<[^>]+>/g,' ').replace(/&(?:#(x[\da-f]+|\d+)|amp|lt|gt|quot|apos|nbsp);/gi,(m,n)=>n?String.fromCodePoint(n[0].toLowerCase()==='x'?parseInt(n.slice(1),16):Number(n)):({'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&nbsp;':' '}[m]||m)).replace(/\s+/g,' ').trim();
}
const tag=(s,t)=>plain(new RegExp('<'+t+'\\b[^>]*>([\\s\\S]*?)<\\/'+t+'>','i').exec(s)?.[1]||'');
export const normalizeJob=value=>plain(value).normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]/g,'');
const relevant=s=>/graph|design|illustr|motion|vfx|\b[23]d\b|animat|artist|arts? plast|exposition|mediation|photograph|serigraph|signalet|pao|maquett|typograph/i.test(s);
const contract=s=>/alternan|apprent/i.test(s)?'Alternance':/stage|stagiaire|internship/i.test(s)?'Stage':'Emploi';
const monthNames=['janvier','février','mars','avril','mai','juin','juillet','août','septembre','octobre','novembre','décembre'];
export function frenchDate(s){const m=/(\d{1,2})\s+(\S+)\s+(20\d{2})/.exec(s);if(!m)return null;const month=monthNames.findIndex(n=>normalizeJob(n)===normalizeJob(m[2]));return month<0?null:`${m[3]}-${String(month+1).padStart(2,'0')}-${m[1].padStart(2,'0')}`;}
export function parseJobs(text,source) {
 const result=[];
 if(source.kind==='rss'){
  for(const block of text.match(/<item\b[\s\S]*?<\/item>/gi)||[]){
   const title=tag(block,'title'),description=tag(block,'description'),url=tag(block,'link');
   if(!relevant(title+' '+tag(block,'category'))&&!/Infographie/.test(block))continue;
   const date=new Date(tag(block,'pubDate'));
   result.push({title,type:contract(block),company:/^(.*?) recrute/i.exec(description)?.[1]||'Non précisé',location:/Poste bas[ée] [àa] (.+)/i.exec(description)?.[1]||'Voir l’annonce',description,url,publishedAt:Number.isNaN(+date)?null:date.toISOString().slice(0,10),deadline:null});
  }
 }else{
  for(const match of text.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)){
   const [_,href,block]=match;
   if(source.kind==='profil'&&!/\/annonce\/[^/]+-\d+\.html/.test(href))continue;
   if(source.kind==='cipac'&&!/\/annonces\/offres\//.test(href))continue;
   const title=tag(block,source.kind==='profil'?'h6':'h3');if(!title||!relevant(title))continue;
   const smalls=[...block.matchAll(/<small\b[^>]*>([\s\S]*?)<\/small>/gi)].map(m=>plain(m[1]));
   const intros=[...block.matchAll(/<span[^>]*class=["']article-intro["'][^>]*>([\s\S]*?)<\/span>/gi)].map(m=>plain(m[1]));
   const content=plain(block),date=/\b(\d{2})\/(\d{2})\/(\d{2})\b/.exec(content);
   result.push({title,type:contract(content),company:smalls[0]||intros[1]||'Voir l’annonce',location:smalls[1]||(intros[1]?.match(/,\s*([^,]+)$/)?.[1])||'Voir l’annonce',description:content.slice(0,500),url:new URL(href,source.url).href,publishedAt:date?`20${date[3]}-${date[2]}-${date[1]}`:null,deadline:source.kind==='cipac'?frenchDate(content):null});
  }
 }
 return result.filter(j=>{try{return new URL(j.url).hostname===new URL(source.url).hostname;}catch{return false;}});
}
