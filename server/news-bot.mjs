import { db } from './store.mjs';

const SEED_ARTICLES = [
  { id: 'news-101', cat: 'logiciels', badge: 'Suite PAO & Édition', titre: 'Adobe InDesign, Illustrator & Photoshop (Éditions 2025 / 2026)', source_nom: 'Adobe Creative Cloud', source_url: 'https://www.adobe.com/fr/creativecloud.html', norme: 'PDF/X-4 (ISO 15930-7) · Profils ICC natifs · Accélération GPU', resume: 'InDesign introduit la Disposition Flex (adaptation automatique des grilles aux changements de format) et la conversion directe de PDF en documents InDesign éditables. Photoshop intègre l\'outil Relight non destructif.', published_at: '2026-11-10 09:00', arrival_order: 108 },
  { id: 'news-102', cat: 'normes', badge: 'Norme Prépresse ISO 12647-2', titre: 'Passage de FOGRA39 (ISO Coated v2) à FOGRA51 (PSO Coated v3) & PDF/X-4', source_nom: 'FOGRA & ECI', source_url: 'https://www.fogra.org/', norme: 'ISO 12647-2 · Mesure M1 (azurants optiques) · TAC <= 300% · 300 DPI', resume: 'Le profil PSO Coated v3 (FOGRA51) complète désormais ISO Coated v2 (FOGRA39) en mesurant les papiers couchés modernes sous illuminant D50 (mode M1). L\'échange de fichiers d\'imprimerie repose sur PDF/X-4.', published_at: '2026-11-09 14:30', arrival_order: 107 },
  { id: 'news-103', cat: 'atelier', badge: 'Impression-Découpe 1:1', titre: 'Flux Roland VersaWorks & Tracés Vectoriels CutContour / Tons Métalliques', source_nom: 'Roland DG Academy', source_url: 'https://www.rolanddg.eu/fr', norme: 'Ton direct CutContour (100% M, 0.25 pt) · Overbleed 2 à 10 mm', resume: 'En atelier de signalétique et d\'habillage de bornes d\'arcade 1:1, la fiabilité de la découpe vinyle repose sur un tracé vectoriel nommé exactement CutContour en ton direct, avec ponts de 1.5 à 2 mm pour les pochoirs.', published_at: '2026-11-08 11:15', arrival_order: 106 },
  { id: 'news-104', cat: 'logiciels', badge: 'Animation 2D/3D Libre', titre: 'Blender 4.3+ et Grease Pencil 3.0 pour le Dessin 2D dans l\'Espace 3D', source_nom: 'Fondation Blender', source_url: 'https://www.blender.org/', norme: 'Pipeline Open-Source · Groupes de calques · Geometry Nodes 2D', resume: 'Entièrement réécrit pour le multi-threading, Grease Pencil 3.0 apporte les groupes de calques hiérarchiques et la compatibilité directe avec les Geometry Nodes pour combiner trait dessiné à la main et décors 3D.', published_at: '2026-11-07 16:00', arrival_order: 105 },
  { id: 'news-105', cat: 'art', badge: 'Formation Continue & CPF', titre: 'Réforme CPF 2026 : Titre RNCP37943 Infographiste Metteur en Page & Plafond TOSA RS', source_nom: 'Mon Compte Formation & France Compétences', source_url: 'https://www.moncompteformation.gouv.fr/', norme: 'RNCP37943 (sans plafond) · Répertoire Spécifique TOSA (plafond 1 500 €) · Ticket 150 €', resume: 'Les formations menant au titre RNCP37943 (Infographiste metteur en page) restent finançables sans plafond CPF, tandis que les certifications TOSA Adobe (Répertoire Spécifique) sont plafonnées à 1 500 € avec participation forfaitaire de 150 € (exonérée si abondement employeur ou France Travail).', published_at: '2026-11-06 10:20', arrival_order: 104 },
  { id: 'news-106', cat: 'logiciels', badge: 'Peinture & Animation iPad', titre: 'Procreate Dreams 2 & Procreate 5.4 : Mini Flipbook amovible et Export Studio', source_nom: 'Savage Interactive', source_url: 'https://procreate.com/', norme: 'Animation 24 ips · Espace Display P3 / sRGB · Pression stylet', resume: 'Procreate Dreams évolue avec un Flipbook détachable pour dessiner image par image comme sur papier, le verrouillage de trame Scrub Lock et un nouvel Export Studio professionnel.', published_at: '2026-11-05 09:45', arrival_order: 103 },
  { id: 'news-107', cat: 'art', badge: 'Pédagogie & Admissions', titre: 'L\'hybridation Papier Traditionnel & Numérique dans les Écoles Supérieures', source_nom: 'GOBELINS & Estienne', source_url: 'https://www.gobelins.fr/', norme: 'Carnet de croquis physique obligatoire avant toute modélisation ou PAO', resume: 'Les jurys d\'admission et les studios (Fortiche, Ubisoft, maisons d\'édition) rappellent que la maîtrise du dessin d\'observation sur papier reste le socle irremplaçable face aux outils numériques.', published_at: '2026-11-04 15:10', arrival_order: 102 },
  { id: 'news-108', cat: 'logiciels', badge: 'Digital Painting Open-Source', titre: 'Krita 5.3 / 6.0 (Qt6) & Clip Studio Paint 3.x : Texte sur canevas et HDR', source_nom: 'Krita Foundation & Celsys', source_url: 'https://krita.org/', norme: 'Profils ICC CMJN / sRGB · Trait noir 600-1200 DPI pour la BD', resume: 'Krita modernise son moteur de texte directement sur le canevas et migre vers Qt6. Clip Studio Paint renforce ses outils de pose 3D anatomique et d\'export prépresse pour la bande dessinée.', published_at: '2026-11-02 18:00', arrival_order: 101 },
  { id: 'news-109', cat: 'normes', badge: 'Norme Web & UI Design', titre: 'Norme d\'Accessibilité W3C WCAG 2.2 & Directive Européenne Accessibilité', source_nom: 'W3C WAI', source_url: 'https://www.w3.org/WAI/standards-guidelines/wcag/', norme: 'Contraste AA >= 4.5:1 (AAA >= 7:1) · Cibles tactiles >= 24px/44px', resume: 'Tout designer UI/UX et graphiste web doit vérifier mathématiquement le contraste typographique (minimum 4.5:1 pour le texte courant) et la taille minimale des zones cliquables.', published_at: '2026-10-28 12:00', arrival_order: 100 }
];

const BOT_DAILY_POOL = [
  { id: 'bot-affinity-v26', cat: 'logiciels', badge: 'Bot Veille · Vectoriel & PAO', titre: 'Affinity Designer, Photo & Publisher 2.6 : Fusion de pages multiples et export PDF/X-4', source_nom: 'Serif / Canva Affinity', source_url: 'https://affinity.serif.com/fr/', norme: 'Export PDF/X-4 · Tracé Bézier · Tables de montage multi-pages', resume: 'Dépêche collectée par le Bot quotidien : Affinity Publisher 2.6 enrichit la gestion des planches multi-pages pour le pliage accordéon et fiabilise la séparation des tons directs CutContour.' },
  { id: 'bot-inkscape-14', cat: 'logiciels', badge: 'Bot Veille · Open-Source SVG', titre: 'Inkscape 1.4 : Galerie de filtres repensée, Grille modulaire & Aperçu CMJN', source_nom: 'Inkscape Project', source_url: 'https://inkscape.org/fr/', norme: 'SVG 1.1 / 2.0 · Chemins booléens Shape Builder · Découpe Plotter', resume: 'Dépêche collectée par le Bot quotidien : Inkscape 1.4 accélère la préparation de pochoirs vectoriels et de tracés de découpe vinyle grâce à l\'outil Shape Builder amélioré.' },
  { id: 'bot-gwg-packaging', cat: 'normes', badge: 'Bot Veille · Norme Packaging', titre: 'Spécifications Ghent Workgroup (GWG 2025) pour le Packaging & les Stickers Grand Format', source_nom: 'Ghent Workgroup', source_url: 'https://www.gwg.org/', norme: 'GWG Packaging · Calques normalisés (Cut, Crease, Bleed) · ISO 19593-1', resume: 'Dépêche collectée par le Bot quotidien : la norme ISO 19593-1 structure les calques PDF pour séparer sans ambiguïté l\'impression CMJN, le vernis sélectif, le blanc de soutien et la découpe.' }
];

const SEED_GALLERY = [
  { title: 'Planche Cahier 07 : Lignes tendues, Ellipses sur axe & 5 Cylindres', category: 'Cahier 07 · Dessin S1', week: 1, course_id: 'cours-d01-visuelle-trait', technique: 'Crayon HB/2B sur papier A4 à main levée sans règle', image_data: 'assets/etudiant_fusain_tim.jpg', notes: 'Tracé depuis l\'épaule, contrôle de la symétrie sur l\'axe central.', tutor_comment: 'Acquis : bon geste fluide, ellipses bien axées.', status: 'valide' },
  { title: 'Étude des Proportions & Construction de Portrait sur Grille Loomis', category: 'Cahier 07 · Observation S1', week: 1, course_id: 'cours-d05-anatomie-portrait', technique: 'Pierre noire et fusain · Séparation lumière/ombre', image_data: 'assets/etudiant_portrait_lea.jpg', notes: 'Respect des 3 tiers du visage et alignement des commissures.', tutor_comment: 'Sélectionné pour le Mini-Portfolio de fin de stage (Cahier 10).', status: 'portfolio' },
  { title: 'Contrôle des 4 Bords & Tracés Vectoriels Orthogonaux', category: 'Cahier 08 · Graphisme S2', week: 2, course_id: 'cours-g04-bezier', technique: 'Illustrator · Courbes de Bézier aux extremums 0°/90°', image_data: 'assets/planche_pedagogique_edge_control.jpg', notes: 'Préparation des formes mères pour la planche de stickers Foire de Châlons 2027.', tutor_comment: 'En cours de vérification prépresse.', status: 'expose' }
];

export function initExtendedTables() {
  const insArt = db.prepare('INSERT OR IGNORE INTO news_articles(id,cat,badge,titre,source_nom,source_url,norme,resume,published_at,arrival_order) VALUES(?,?,?,?,?,?,?,?,?,?)');
  for (const a of SEED_ARTICLES) insArt.run(a.id, a.cat, a.badge, a.titre, a.source_nom, a.source_url, a.norme, a.resume, a.published_at, a.arrival_order);

  const countWorks = db.prepare('SELECT COUNT(*) AS c FROM stagiaire_works').get().c;
  if (countWorks === 0) {
    const stag = db.prepare("SELECT id, name FROM users WHERE role='stagiaire' ORDER BY id ASC LIMIT 1").get();
    const uid = stag?.id || 1;
    const sname = stag?.name || 'Sarah Martin (Stagiaire)';
    const insWork = db.prepare('INSERT INTO stagiaire_works(user_id,student_name,title,category,week,course_id,technique,image_data,notes,tutor_comment,status) VALUES(?,?,?,?,?,?,?,?,?,?,?)');
    for (const w of SEED_GALLERY) insWork.run(uid, sname, w.title, w.category, w.week, w.course_id, w.technique, w.image_data, w.notes, w.tutor_comment, w.status);
  }
}

const RSS_FEEDS = [
  { name: 'Blender.org', url: 'https://www.blender.org/feed/', cat: 'logiciels', badge: 'Bot RSS · Blender 3D/2D', norme: 'Pipeline Open-Source 2D/3D' },
  { name: 'Krita Official', url: 'https://krita.org/en/feed/', cat: 'logiciels', badge: 'Bot RSS · Krita Painting', norme: 'Digital Painting & CMJN' },
  { name: 'Inkscape News', url: 'https://inkscape.org/news/feed/', cat: 'logiciels', badge: 'Bot RSS · Inkscape Vector', norme: 'SVG & Découpe Vectorielle' }
];

function parseRssItems(xml, feedMeta) {
  const items = [];
  const blocks = xml.match(/<(item|entry)[\s>][\s\S]*?<\/\1>/gi) || [];
  for (const block of blocks.slice(0, 2)) {
    const title = (/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i.exec(block)?.[1] || '').replace(/<[^>]+>/g, '').trim();
    const link = (/<link[^>]*href=["']([^"']+)["']/i.exec(block)?.[1] || /<link[^>]*>([^<]+)<\/link>/i.exec(block)?.[1] || feedMeta.url).trim();
    const desc = (/<(description|summary|content)[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/\1>/i.exec(block)?.[2] || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 280);
    if (title && title.length > 5) {
      const id = 'rss-' + Buffer.from(link || title).toString('base64url').slice(0, 22);
      items.push({ id, cat: feedMeta.cat, badge: feedMeta.badge, titre: title.slice(0, 160), source_nom: feedMeta.name, source_url: link, norme: feedMeta.norme, resume: desc || `Actualité officielle collectée automatiquement par le Bot sur ${feedMeta.name}.` });
    }
  }
  return items;
}

export async function runNewsBotNow(allowNetwork = process.env.NODE_ENV !== 'test') {
  let fetched = 0, added = 0;
  const maxOrder = db.prepare('SELECT COALESCE(MAX(arrival_order), 100) AS m FROM news_articles').get().m;
  let nextOrder = maxOrder + 1;
  const nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
  const ins = db.prepare('INSERT OR IGNORE INTO news_articles(id,cat,badge,titre,source_nom,source_url,norme,resume,published_at,arrival_order) VALUES(?,?,?,?,?,?,?,?,?,?)');

  if (allowNetwork) {
    for (const feed of RSS_FEEDS) {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 2500);
        const res = await fetch(feed.url, { signal: ctrl.signal, headers: { 'User-Agent': 'LaCroiseeDesArts-NewsBot/1.0' } });
        clearTimeout(timer);
        if (res.ok) {
          const parsed = parseRssItems(await res.text(), feed);
          fetched += parsed.length;
          for (const item of parsed) {
            const info = ins.run(item.id, item.cat, item.badge, item.titre, item.source_nom, item.source_url, item.norme, item.resume, nowStr, nextOrder);
            if (info.changes > 0) { added++; nextOrder++; }
          }
        }
      } catch {}
    }
  }

  for (const poolItem of BOT_DAILY_POOL) {
    fetched++;
    const info = ins.run(poolItem.id, poolItem.cat, poolItem.badge, poolItem.titre, poolItem.source_nom, poolItem.source_url, poolItem.norme, poolItem.resume, nowStr, nextOrder);
    if (info.changes > 0) { added++; nextOrder++; break; }
  }

  db.prepare('INSERT INTO bot_runs(ran_at,fetched_count,added_count,sources) VALUES(?,?,?,?)').run(nowStr, fetched, added, 'Adobe CC, FOGRA/ISO, Blender, Krita, Inkscape, GWG');
  return { ranAt: nowStr, fetchedCount: fetched, addedCount: added };
}

export function startDailyNewsBotScheduler() {
  initExtendedTables();
  const lastRun = db.prepare('SELECT ran_at FROM bot_runs ORDER BY id DESC LIMIT 1').get();
  if (!lastRun && process.env.NODE_ENV !== 'test') {
    runNewsBotNow(true).catch(() => {});
  }
  if (process.env.NODE_ENV !== 'test') {
    const timer = setInterval(() => { runNewsBotNow(true).catch(() => {}); }, 24 * 60 * 60 * 1000);
    if (typeof timer.unref === 'function') timer.unref();
  }
}

export async function handleExtendedApiRoutes(req, res, url, path, u, isStaff, body, json, fail) {
  initExtendedTables();

  // 1. SURCHARGES & ÉDITION DES COURS PAR L'ADMIN (/api/course-overrides)
  if (path === '/api/course-overrides' && req.method === 'GET') {
    const rows = db.prepare('SELECT course_id, payload, updated_by, updated_at FROM course_overrides').all();
    return json(res, 200, rows.map(r => ({ courseId: r.course_id, ...JSON.parse(r.payload), updatedBy: r.updated_by, updatedAt: r.updated_at })));
  }
  const ovMatch = /^\/api\/course-overrides\/([a-zA-Z0-9_-]+)$/.exec(path);
  if (ovMatch && req.method === 'PUT') {
    if (!isStaff(u)) fail(403, 'Administrateur requis pour modifier un cours');
    const cid = ovMatch[1];
    const b = await body(req);
    if (typeof b.title !== 'string' || !b.title.trim()) fail(400, 'Titre du cours requis');
    const clean = {
      id: cid,
      num: String(b.num || 'C-01').trim().slice(0, 20),
      title: b.title.trim().slice(0, 160),
      discipline: b.discipline === 'graphisme' ? 'graphisme' : 'dessin',
      blocLabel: String(b.blocLabel || 'Module Atelier').trim().slice(0, 120),
      duration: String(b.duration || '25 min').trim().slice(0, 40),
      level: String(b.level || 'Stagiaire & Atelier').trim().slice(0, 60),
      summary: String(b.summary || '').trim().slice(0, 2500),
      image: String(b.image || 'assets/planche_pedagogique_edge_control.jpg').trim().slice(0, 260),
      imageCaption: String(b.imageCaption || '').trim().slice(0, 400),
      materiel: String(b.materiel || '').trim().slice(0, 600),
      methode: String(b.methode || '').trim().slice(0, 600),
      artistQuote: String(b.artistQuote || '').trim().slice(0, 800),
      theory: Array.isArray(b.theory) ? b.theory.slice(0, 6).map(t => ({ title: String(t.title || '').slice(0, 140), desc: String(t.desc || '').slice(0, 1200) })) : null,
      exerciseTitle: String(b.exerciseTitle || '').trim().slice(0, 180),
      exerciseTask: String(b.exerciseTask || '').trim().slice(0, 2000)
    };
    db.prepare('INSERT INTO course_overrides(course_id,payload,updated_by,updated_at) VALUES(?,?,?,CURRENT_TIMESTAMP) ON CONFLICT(course_id) DO UPDATE SET payload=excluded.payload,updated_by=excluded.updated_by,updated_at=CURRENT_TIMESTAMP').run(cid, JSON.stringify(clean), u.name);
    return json(res, 200, { ok: true, course: clean });
  }
  if (ovMatch && req.method === 'DELETE') {
    if (!isStaff(u)) fail(403, 'Administrateur requis');
    db.prepare('DELETE FROM course_overrides WHERE course_id=?').run(ovMatch[1]);
    return json(res, 200, { ok: true });
  }

  // 2. BLOG D'ACTUALITÉS PAR ORDRE D'ARRIVÉE, CASE "J'AI LU" & BOT QUOTIDIEN (/api/news)
  if (path === '/api/news' && req.method === 'GET') {
    const articles = db.prepare('SELECT * FROM news_articles ORDER BY arrival_order DESC, published_at DESC').all();
    const readIds = new Set(db.prepare('SELECT article_id FROM news_reads WHERE user_id=?').all(u.id).map(r => r.article_id));
    const lastBot = db.prepare('SELECT * FROM bot_runs ORDER BY id DESC LIMIT 1').get();
    const enriched = articles.map((a, idx) => ({
      id: a.id, cat: a.cat, badge: a.badge, titre: a.titre, sourceNom: a.source_nom, sourceUrl: a.source_url,
      norme: a.norme, resume: a.resume, date: a.published_at, arrivalOrder: a.arrival_order, rank: idx + 1, read: readIds.has(a.id)
    }));
    const readCount = enriched.filter(a => a.read).length;
    return json(res, 200, {
      articles: enriched,
      botStatus: {
        active: true,
        schedule: 'Automatique · Toutes les 24h (Quotidien)',
        lastRun: lastBot?.ran_at || '2026-11-10 08:00',
        lastAdded: lastBot?.added_count ?? 0,
        sources: lastBot?.sources || 'Adobe CC, FOGRA/ISO, Blender, Krita, Inkscape, GWG',
        totalCount: enriched.length,
        readCount,
        unreadCount: enriched.length - readCount
      }
    });
  }
  if (path === '/api/news/read' && req.method === 'PUT') {
    const b = await body(req);
    if (b.markAllRead) {
      const allIds = db.prepare('SELECT id FROM news_articles').all();
      const ins = db.prepare('INSERT OR IGNORE INTO news_reads(user_id,article_id) VALUES(?,?)');
      for (const row of allIds) ins.run(u.id, row.id);
      return json(res, 200, { ok: true });
    }
    if (typeof b.articleId !== 'string' || !b.articleId) fail(400, 'Identifiant article requis');
    if (b.read) db.prepare('INSERT OR IGNORE INTO news_reads(user_id,article_id) VALUES(?,?)').run(u.id, b.articleId);
    else db.prepare('DELETE FROM news_reads WHERE user_id=? AND article_id=?').run(u.id, b.articleId);
    return json(res, 200, { ok: true, articleId: b.articleId, read: !!b.read });
  }
  if (path === '/api/news/bot-run' && req.method === 'POST') {
    const result = await runNewsBotNow(process.env.NODE_ENV !== 'test');
    return json(res, 200, { ok: true, ...result });
  }
  if (path === '/api/news' && req.method === 'POST') {
    if (!isStaff(u)) fail(403, 'Administrateur requis');
    const b = await body(req);
    if (typeof b.titre !== 'string' || !b.titre.trim()) fail(400, 'Titre requis');
    const maxOrder = db.prepare('SELECT COALESCE(MAX(arrival_order), 100) AS m FROM news_articles').get().m;
    const id = 'news-' + Date.now();
    const nowStr = new Date().toISOString().slice(0, 16).replace('T', ' ');
    db.prepare('INSERT INTO news_articles(id,cat,badge,titre,source_nom,source_url,norme,resume,published_at,arrival_order) VALUES(?,?,?,?,?,?,?,?,?,?)').run(
      id, String(b.cat || 'logiciels').slice(0, 30), String(b.badge || 'Actu Atelier').slice(0, 60), b.titre.trim().slice(0, 160),
      String(b.sourceNom || 'Atelier GPO').slice(0, 80), String(b.sourceUrl || 'https://laxdesarts.gposarl.com').slice(0, 240),
      String(b.norme || 'Standard Atelier').slice(0, 140), String(b.resume || '').slice(0, 1500), nowStr, maxOrder + 1
    );
    return json(res, 201, { id });
  }
  const newsDel = /^\/api\/news\/([a-zA-Z0-9_-]+)$/.exec(path);
  if (newsDel && req.method === 'DELETE') {
    if (!isStaff(u)) fail(403, 'Administrateur requis');
    db.prepare('DELETE FROM news_reads WHERE article_id=?').run(newsDel[1]);
    db.prepare('DELETE FROM news_articles WHERE id=?').run(newsDel[1]);
    return json(res, 200, { ok: true });
  }

  // 3. GALERIE DES TRAVAUX DU STAGIAIRE (/api/gallery)
  if (path === '/api/gallery' && req.method === 'GET') {
    const uid = url.searchParams.get('user');
    const rows = uid ? db.prepare('SELECT * FROM stagiaire_works WHERE user_id=? ORDER BY id DESC').all(Number(uid)) : db.prepare('SELECT * FROM stagiaire_works ORDER BY id DESC').all();
    return json(res, 200, rows);
  }
  if (path === '/api/gallery' && req.method === 'POST') {
    if (u.role === 'visiteur') fail(403, 'Dépôt réservé aux stagiaires et à l\'administrateur');
    const b = await body(req);
    if (typeof b.title !== 'string' || !b.title.trim() || typeof b.imageData !== 'string' || !b.imageData.trim()) fail(400, 'Titre et visuel requis');
    if (b.imageData.length > 8 * 1024 * 1024) fail(413, 'Image trop volumineuse (max 6 Mo)');
    const row = db.prepare('INSERT INTO stagiaire_works(user_id,student_name,title,category,week,course_id,technique,image_data,notes,status) VALUES(?,?,?,?,?,?,?,?,?,?)').run(
      u.id, u.name, b.title.trim().slice(0, 140), String(b.category || 'Cahier 07 · Dessin S1').slice(0, 80),
      Math.min(4, Math.max(1, Number(b.week) || 1)), String(b.courseId || '').slice(0, 60),
      String(b.technique || 'Crayon / PAO').slice(0, 140), b.imageData.trim(), String(b.notes || '').slice(0, 1000), 'expose'
    );
    return json(res, 201, { id: Number(row.lastInsertRowid) });
  }
  const galMatch = /^\/api\/gallery\/(\d+)$/.exec(path);
  if (galMatch && req.method === 'PUT') {
    if (!isStaff(u)) fail(403, 'Administrateur requis pour annoter la galerie');
    const b = await body(req);
    db.prepare('UPDATE stagiaire_works SET tutor_comment=?, status=? WHERE id=?').run(String(b.tutorComment || '').slice(0, 1000), String(b.status || 'valide').slice(0, 40), Number(galMatch[1]));
    return json(res, 200, { ok: true });
  }
  if (galMatch && req.method === 'DELETE') {
    const work = db.prepare('SELECT * FROM stagiaire_works WHERE id=?').get(Number(galMatch[1]));
    if (!work) fail(404, 'Travail introuvable');
    if (!isStaff(u) && work.user_id !== u.id) fail(403, 'Suppression non autorisée');
    db.prepare('DELETE FROM stagiaire_works WHERE id=?').run(work.id);
    return json(res, 200, { ok: true });
  }

  return false;
}
