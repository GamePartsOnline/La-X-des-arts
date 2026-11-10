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
CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY,email TEXT UNIQUE NOT NULL,name TEXT NOT NULL,role TEXT NOT NULL,password TEXT NOT NULL,unlocked INTEGER DEFAULT 0,prof_id INTEGER DEFAULT NULL,course_access TEXT DEFAULT 'dessin');
CREATE TABLE IF NOT EXISTS sessions(token TEXT PRIMARY KEY,user_id INTEGER REFERENCES users(id),expires INTEGER NOT NULL);
CREATE TABLE IF NOT EXISTS lessons(user_id INTEGER REFERENCES users(id),lesson_id TEXT,state TEXT NOT NULL,PRIMARY KEY(user_id,lesson_id));
CREATE TABLE IF NOT EXISTS submissions(id INTEGER PRIMARY KEY,user_id INTEGER REFERENCES users(id),course_id TEXT,file_name TEXT,content BLOB,notes TEXT,status TEXT DEFAULT 'en_attente',grade REAL,feedback TEXT DEFAULT '',created TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS custom_courses(id TEXT PRIMARY KEY,theme TEXT,pole TEXT,code TEXT,title TEXT,norme TEXT,summary TEXT,author TEXT,created TEXT DEFAULT CURRENT_TIMESTAMP);
CREATE TABLE IF NOT EXISTS jobs(id INTEGER PRIMARY KEY,type TEXT NOT NULL,title TEXT NOT NULL,company TEXT NOT NULL,location TEXT NOT NULL,region TEXT NOT NULL,remuneration TEXT,norme TEXT,description TEXT NOT NULL,contact_url TEXT NOT NULL,created TEXT DEFAULT CURRENT_TIMESTAMP);
`);
try { db.exec(`ALTER TABLE users ADD COLUMN prof_id INTEGER DEFAULT NULL`); } catch {}
try { db.exec(`ALTER TABLE users ADD COLUMN course_access TEXT DEFAULT 'dessin'`); } catch {}
const legacyEmails = `'eleve@croisee-arts.local','modo@croisee-arts.local','julien.rocher@croisee-arts.local','prof@croisee-arts.local','professeur@croisee-arts.local','elise.valmont@croisee-arts.local'`;
db.exec(`UPDATE users SET prof_id=NULL; UPDATE users SET role='stagiaire' WHERE role='eleve'; UPDATE users SET role='visiteur' WHERE role IN ('prof','professeur','modo'); DELETE FROM sessions WHERE user_id IN (SELECT id FROM users WHERE email IN (${legacyEmails})); DELETE FROM lessons WHERE user_id IN (SELECT id FROM users WHERE email IN (${legacyEmails})); DELETE FROM submissions WHERE user_id IN (SELECT id FROM users WHERE email IN (${legacyEmails})); DELETE FROM users WHERE email IN (${legacyEmails});`);

// 3 RÔLES STRICTEMENT : stagiaire, visiteur, admin (aucun accès prof, cours réservés aux stagiaires)
export const ROLES = ['stagiaire', 'visiteur', 'admin'];
export const STAFF_ROLES = ['admin'];
export const LEARNER_ROLES = ['stagiaire'];
export const COURSE_ACCESS_MODES = ['dessin', 'graphisme', 'complet', 'aucun'];
export const ROLE_META = {
  stagiaire: { label: 'Stagiaire', subtitle: 'Cours privés d\'atelier, exercices Acquis / Non acquis, Métiers, Écoles, Actu & Jobs', defaultTab: 'stagiaire', unlockedByDefault: 0, courseAccess: 'dessin' },
  visiteur: { label: 'Visiteur', subtitle: '24 Métiers, Annuaire des Écoles & Partenaires (Tuto.com, DPS), Actu & News, Jobs & Exposition', defaultTab: 'visiteur', unlockedByDefault: 0, courseAccess: 'aucun' },
  admin: { label: 'Admin', subtitle: 'Direction d\'Atelier : Gestion des Stagiaires, Accès Cours, Actu, Jobs & Exposition', defaultTab: 'admin', unlockedByDefault: 1, courseAccess: 'complet' }
};
export function hash(password) { const salt=randomBytes(16).toString('hex'); return salt+':'+scryptSync(password,salt,64).toString('hex'); }
export function verify(password, stored) { const [salt,key]=stored.split(':'); return timingSafeEqual(Buffer.from(key,'hex'),scryptSync(password,salt,64)); }
const context=vm.createContext({window:{},localStorage:{getItem:()=>null}});
for(const file of ['courses-dessin-01.js','courses-dessin-02.js','courses-graphisme-01.js','courses-graphisme-02.js','courses-graphisme-03.js','courses-data.js','stage-lessons-data.js']) vm.runInContext(readFileSync(resolve(root,'js',file),'utf8'),context);
export const courses=context.window.COURSES_DATA;
export const lessons=context.window.DEFAULT_STAGE_LESSONS.map((l,idx)=>({...l,status:idx===0?'validee':'a_faire',note:idx===0?'Acquis':'Non évalué',commentAdmin:idx===0?'Exemple validé (Acquis) : bon geste d\'observation sur papier.':'',dateValidation:idx===0?'2026-11-10':null}));
export const isLockedAdmin=u=>u?.email==='admin@croisee-arts.local'||u?.role==='admin';
export const publicUser=u=>{
  const access=u.role==='admin'?'complet':u.role==='visiteur'?'aucun':(u.course_access||(u.unlocked?'complet':'dessin'));
  return {id:u.id,email:u.email,name:u.name,role:u.role,unlocked:access==='complet'||access==='graphisme'||!!u.unlocked,courseAccess:access,lockedAdmin:isLockedAdmin(u)};
};

export const DEMO_PROFILES = [
  { role: 'stagiaire', email: 'stagiaire@croisee-arts.local', name: 'Sarah Martin (Stagiaire)', unlocked: 0, courseAccess: 'dessin' },
  { role: 'visiteur', email: 'visiteur@croisee-arts.local', name: 'Camille Visiteur', unlocked: 0, courseAccess: 'aucun' },
  { role: 'admin', email: 'admin@croisee-arts.local', name: 'Direction Atelier (Admin)', unlocked: 1, courseAccess: 'complet' },
  { role: 'stagiaire', email: 'enzo.garnier@croisee-arts.local', name: 'Enzo Garnier (Stagiaire S1)', unlocked: 0, courseAccess: 'dessin' },
  { role: 'stagiaire', email: 'camille.faure@croisee-arts.local', name: 'Camille Faure (Stagiaire RPIP)', unlocked: 1, courseAccess: 'complet' },
  { role: 'en_attente', email: 'maxime.girard@croisee-arts.local', name: 'Maxime Girard', unlocked: 0, courseAccess: 'aucun' }
];
if (process.env.NODE_ENV !== 'test' && process.env.DISABLE_DEMO_PROFILES !== '1') {
  const defaultPass = hash(process.env.DEMO_PROFILE_PASSWORD || 'Atelier-Croisee-2026!');
  for (const p of DEMO_PROFILES) {
    if (!db.prepare('SELECT id FROM users WHERE email=?').get(p.email)) {
      db.prepare('INSERT INTO users(email,name,role,password,unlocked,course_access) VALUES(?,?,?,?,?,?)').run(p.email, p.name, p.role, defaultPass, p.unlocked, p.courseAccess);
    }
  }
}
