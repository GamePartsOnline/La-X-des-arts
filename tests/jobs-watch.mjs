import {test} from 'node:test';
import assert from 'node:assert/strict';
import {parseJobs,plain,frenchDate} from '../server/jobs-parsers.mjs';
test('RSS keeps real creative jobs with contract, employer, location and publication date',()=>{
 const source={url:'https://emploi.afjv.com/rss.xml',kind:'rss'};
 const jobs=parseJobs(`<rss><item><title>Stage 3D Artist</title><link>https://emploi.afjv.com/emploi-jeux-video/SINF1-1</link><description>Studio &amp; Co recrute un(e) 3D Artist. Poste basé à Lille (59)</description><category>Stage</category><pubDate>Tue, 10 Nov 2026 20:06:32 GMT</pubDate></item><item><title>Office Manager</title><link>https://emploi.afjv.com/emploi-jeux-video/A1</link></item></rss>`,source);
 assert.equal(jobs.length,1);assert.equal(jobs[0].company,'Studio & Co');assert.equal(jobs[0].location,'Lille (59)');assert.equal(jobs[0].publishedAt,'2026-11-10');assert.equal(jobs[0].type,'Stage');
});
test('CIPAC extracts the deadline, without confusing it with publication',()=>{
 const jobs=parseJobs('<a href="https://cipac.net/annonces/offres/test"><h3>Stagiaire département artistique</h3><span class="article-intro">Stage conventionné</span><span class="article-intro">Fondation, Arles (13)</span><span class="article-date">22 novembre 2026</span></a>',{url:'https://cipac.net/annonces',kind:'cipac'});
 assert.equal(jobs.length,1);assert.equal(jobs[0].deadline,'2026-11-22');assert.equal(jobs[0].publishedAt,null);assert.equal(jobs[0].location,'Arles (13)');
});
test('ProfilCulture extracts the listing fields and excludes unrelated jobs',()=>{
 const jobs=parseJobs('<a href="https://www.profilculture.com/annonce/test-123.html"><h6>Graphiste</h6><small>Studio</small><small>Toulouse</small><span>Stage</span><span>10/11/26</span></a>',{url:'https://www.profilculture.com',kind:'profil'});
 assert.equal(jobs[0].company,'Studio');assert.equal(jobs[0].publishedAt,'2026-11-10');assert.equal(jobs[0].type,'Stage');
});
test('external links cannot escape the configured source and XML entities are decoded',()=>{
 assert.equal(parseJobs('<item><title>Graphiste</title><link>https://evil.invalid/job</link></item>',{url:'https://emploi.afjv.com/rss.xml',kind:'rss'}).length,0);
 assert.equal(plain('&#233; &amp; &#x41;'),'é & A');assert.equal(frenchDate('1 décembre 2026'),'2026-12-01');
});
