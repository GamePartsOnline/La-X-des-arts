import { DatabaseSync } from 'node:sqlite';
import { mkdirSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { randomBytes, scryptSync, timingSafeEqual } from 'node:crypto';
import vm from 'node:vm';
export const root = resolve(import.meta.dirname, '..');
export const data = resolve(process.env.DATA_DIR || resolve(root, 'data'));
mkdirSync(data, {recursive:true});
export const db = new DatabaseSync(resolve(data, 'school.sqlite'));
db.exec(`PRAGMA journal_mode=WAL; PRAGMA foreign_keys=ON;
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,role TEXT NOT NULL,password TEXT NOT NULL,unlocked INTEGER DEFAULT 0);
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY,user_id INTEGER REFERENCES users(id),expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS lessons(user_id INTEGER REFERENCES users(id),lesson_id TEXT,state TEXT NOT NULL,PRIMARY KEY(user_id,lesson_id));
CREATE TABLE IF NOT EXISTS submissions(id INTEGER PRIMARY KEY,user_id INTEGER REFERENCES users(id),course_id TEXT,file_name TEXT,content BLOB,notes TEXT,status TEXT DEFAULT 'en_attente',grade REAL,feedback TEXT DEFAULT '',created TEXT DEFAULT CURRENT_TIMESTAMP);
`);
export function hash(password) { const salt=randomBytes(16).toString('hex'); return salt+':'+scryptSync(password,salt,64).toString('hex'); }
export function verify(password, stored) { const [salt,key]=stored.split(':'); return timingSafeEqual(Buffer.from(key,'hex'),scryptSync(password,salt,64)); }
const context=vm.createContext({window:{},localStorage:{getItem:()=>null}});
for(const file of ['courses-dessin-01.js','courses-dessin-02.js','courses-graphisme-01.js','courses-graphisme-02.js','courses-graphisme-03.js','courses-data.js','stage-lessons-data.js']) vm.runInContext(readFileSync(resolve(root,'js',file),'utf8'),context);
export const courses=context.window.COURSES_DATA;
export const lessons=context.window.DEFAULT_STAGE_LESSONS.map(l=>({...l,status:'a_faire',note:'-',commentAdmin:'',dateValidation:null}));
export const publicUser=u=>({id:u.id,email:u.email,name:u.name,role:u.role,unlocked:!!u.unlocked});

// Initial accounts are created once from runtime secrets; existing accounts are preserved.
for (const [prefix,role,fallback] of [['ADMIN','admin','Tuteur'],['STUDENT','stagiaire','Stagiaire']]) {
 const email=process.env[prefix+'_EMAIL'], password=process.env[prefix+'_PASSWORD'];
 if(!email && !password) continue;
 if(!email || !password || password.length<12) throw new Error(prefix+': email et mot de passe (12 caracteres minimum) requis');
 if(!db.prepare('SELECT id FROM users WHERE email=?').get(email.toLowerCase())) db.prepare('INSERT INTO users(email,name,role,password) VALUES(?,?,?,?)').run(email.toLowerCase(),process.env[prefix+'_NAME']||fallback,role,hash(password));
}
