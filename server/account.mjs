import {db,hash} from './store.mjs';
const [email,name,role]=process.argv.slice(2);
const password=process.env.ACCOUNT_PASSWORD;
if(!email || !name || !['admin','stagiaire'].includes(role) || !password || password.length<12) {
 console.error('ACCOUNT_PASSWORD (12 caracteres minimum) requis. npm run account -- email nom admin|stagiaire'); process.exit(1);
}
db.prepare('INSERT INTO users(email,name,role,password) VALUES(?,?,?,?)').run(email.toLowerCase(),name,role,hash(password));
console.log('Compte cree :',email);
