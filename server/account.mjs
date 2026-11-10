import {db,hash,ROLES,ROLE_META} from './store.mjs';
const [email,name,role]=process.argv.slice(2);
const password=process.env.ACCOUNT_PASSWORD;
if(!email || !name || !ROLES.includes(role) || !password || password.length<12) {
 console.error(`ACCOUNT_PASSWORD (12 caracteres minimum) requis. npm run account -- email nom ${ROLES.join('|')}`); process.exit(1);
}
const unlocked=ROLE_META[role]?.unlockedByDefault ?? 0;
db.prepare('INSERT INTO users(email,name,role,password,unlocked) VALUES(?,?,?,?,?)').run(email.toLowerCase(),name,role,hash(password),unlocked);
console.log('Compte cree :',email,'('+role+')');
