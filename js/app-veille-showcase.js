// =====================================================================
// ACTU & NEWS EN FLUX CONTINU (#content-veille), JOBS & STAGES EN MODE
// CONNECTÉ (#content-jobs) & EXPOSITION D'ATELIER (#content-exposition)
// =====================================================================

let currentJobsSearch = '', currentJobsPage = 1, currentNewsPage = 1;
let currentVeilleCategory = 'all', currentJobsTypeFilter = 'all', cachedBackendJobs = [];

const DEFAULT_VEILLE_ITEMS = [
  { id: 'veille-1', cat: 'logiciels', date: '2026-11-10 · En direct', badge: 'Suite PAO & Édition', titre: 'Adobe InDesign, Illustrator & Photoshop (Éditions 2025 / 2026)', sourceNom: 'Adobe Creative Cloud', sourceUrl: 'https://www.adobe.com/fr/creativecloud.html', norme: 'PDF/X-4 (ISO 15930-7) · Profils ICC natifs · Accélération GPU', resume: 'InDesign introduit la Disposition Flex (adaptation automatique des grilles aux changements de format) et la conversion directe de PDF en documents InDesign éditables. Photoshop intègre l\'outil Relight non destructif.' },
  { id: 'veille-2', cat: 'normes', date: '2026-11-09 · Flux ISO', badge: 'Norme Prépresse ISO 12647-2', titre: 'Passage de FOGRA39 (ISO Coated v2) à FOGRA51 (PSO Coated v3) & PDF/X-4', sourceNom: 'FOGRA & ECI', sourceUrl: 'https://www.fogra.org/', norme: 'ISO 12647-2 · Mesure M1 (azurants optiques) · TAC <= 300% · 300 DPI', resume: 'Le profil PSO Coated v3 (FOGRA51) complète désormais ISO Coated v2 (FOGRA39) en mesurant les papiers couchés modernes sous illuminant D50 (mode M1). L\'échange de fichiers d\'imprimerie repose sur PDF/X-4.' },
  { id: 'veille-3', cat: 'logiciels', date: '2026-11-07 · Open-Source', badge: 'Animation 2D/3D Libre', titre: 'Blender 4.3+ et Grease Pencil 3.0 pour le Dessin 2D dans l\'Espace 3D', sourceNom: 'Fondation Blender', sourceUrl: 'https://www.blender.org/', norme: 'Pipeline Open-Source · Groupes de calques · Geometry Nodes 2D', resume: 'Entièrement réécrit pour le multi-threading, Grease Pencil 3.0 apporte les groupes de calques hiérarchiques et la compatibilité directe avec les Geometry Nodes pour combiner trait dessiné à la main et décors 3D.' },
  { id: 'veille-4', cat: 'logiciels', date: '2026-11-05 · Tablette', badge: 'Peinture & Animation iPad', titre: 'Procreate Dreams 2 & Procreate 5.4 : Mini Flipbook amovible et Export Studio', sourceNom: 'Savage Interactive', sourceUrl: 'https://procreate.com/', norme: 'Animation 24 ips · Espace Display P3 / sRGB · Pression stylet', resume: 'Procreate Dreams évolue avec un Flipbook détachable pour dessiner image par image comme sur papier, le verrouillage de trame Scrub Lock et un nouvel Export Studio professionnel.' },
  { id: 'veille-5', cat: 'logiciels', date: '2026-11-02 · BD & Peinture', badge: 'Digital Painting Open-Source', titre: 'Krita 5.3 / 6.0 (Qt6) & Clip Studio Paint 3.x : Texte sur canevas et HDR', sourceNom: 'Krita Foundation & Celsys', sourceUrl: 'https://krita.org/', norme: 'Profils ICC CMJN / sRGB · Trait noir 600-1200 DPI pour la BD', resume: 'Krita modernise son moteur de texte directement sur le canevas et migre vers Qt6. Clip Studio Paint renforce ses outils de pose 3D anatomique et d\'export prépresse pour la bande dessinée.' },
  { id: 'veille-6', cat: 'normes', date: '2026-10-28 · Standard Web', badge: 'Norme Web & UI Design', titre: 'Norme d\'Accessibilité W3C WCAG 2.2 & Directive Européenne Accessibilité', sourceNom: 'W3C WAI', sourceUrl: 'https://www.w3.org/WAI/standards-guidelines/wcag/', norme: 'Contraste AA >= 4.5:1 (AAA >= 7:1) · Cibles tactiles >= 24px/44px', resume: 'Tout designer UI/UX et graphiste web doit vérifier mathématiquement le contraste typographique (minimum 4.5:1 pour le texte courant) et la taille minimale des zones cliquables.' },
  { id: 'veille-7', cat: 'atelier', date: '2026-11-08 · Atelier GPO', badge: 'Impression-Découpe 1:1', titre: 'Flux Roland VersaWorks & Tracés Vectoriels CutContour / Tons Métalliques', sourceNom: 'Roland DG Academy', sourceUrl: 'https://www.rolanddg.eu/fr', norme: 'Ton direct CutContour (100% M, 0.25 pt) · Overbleed 2 à 10 mm', resume: 'En atelier de signalétique et d\'habillage de bornes d\'arcade 1:1, la fiabilité de la découpe vinyle repose sur un tracé vectoriel nommé exactement CutContour en ton direct, avec ponts de 1.5 à 2 mm pour les pochoirs.' },
  { id: 'veille-8', cat: 'art', date: '2026-11-04 · Écoles d\'Art', badge: 'Pédagogie & Admissions', titre: 'L\'hybridation Papier Traditionnel & Numérique dans les Écoles Supérieures', sourceNom: 'GOBELINS & Estienne', sourceUrl: 'https://www.gobelins.fr/', norme: 'Carnet de croquis physique obligatoire avant toute modélisation ou PAO', resume: 'Les jurys d\'admission et les studios (Fortiche, Ubisoft, maisons d\'édition) rappellent que la maîtrise du dessin d\'observation sur papier reste le socle irremplaçable face aux outils numériques.' }
];

const DEFAULT_JOBS_OFFERS = VERIFIED_JOB_OFFERS;

const DEFAULT_CREATOR_SHOWCASE = [
  { id: 'expo-1', categorie: 'Illustration & Valeurs', titre: 'Étude Académique & Méthode de Correction Sargent', technique: 'Fusain, pierre noire et rehauts sur papier 300g · Contrôle des 4 bords', norme: 'Notan 5 valeurs · Visée Sight-Size 1:1', image: 'assets/masterclass_sargent_methode_correction.jpg' },
  { id: 'expo-2', categorie: 'Digital Painting & Concept', titre: 'Éclairage Dramatique, Volume & Diffusion Sous-Cutanée', technique: 'Peinture numérique calibrée · Harmonie thermique chaud/froid', norme: 'Espace sRGB / CMJN 300 DPI · Gamut Masking', image: 'assets/session_arcane_fortiche.jpg' },
  { id: 'expo-3', categorie: 'Dessin d\'Ornement & Édition', titre: 'Composition Décorative, Ligne Claire & Harmonie Éditoriale', technique: 'Encrage de précision, pleins et déliés et aquarelle', norme: 'Séparation trait 100% K + Quadrichromie FOGRA39', image: 'assets/session_mucha_art.jpg' },
  { id: 'expo-4', categorie: 'Cadrage & Scénographie', titre: 'Architecture Spatiale, Perspective & Profondeur en 3 Plans', technique: 'Concept d\'environnement au ratio cinématographique 2.39:1', norme: '3 plans de profondeur · Point focal par contraste', image: 'assets/session_dune_cinema.jpg' },
  { id: 'expo-5', categorie: 'Atelier PAO & Prépresse RPIP', titre: 'Planches Pédagogiques, Tracés Vectoriels & Contrôle des Bords', technique: 'Courbes de Bézier orthogonales, grilles 12 colonnes et préparation print', norme: 'PDF/X-4 · 300 DPI · Fonds perdus 3 mm · CutContour', image: 'assets/planche_pedagogique_edge_control.jpg' },
  { id: 'expo-6', categorie: 'Identité & Design System', titre: 'Conception de la Plateforme & Blason Noir et Blanc 1-Bit', technique: 'Architecture UI WCAG 2.2 et emblème vectoriel pur', norme: 'Test silhouette 1-Bit 15 mm · Contraste AA/AAA', image: 'assets/logo_croisee_nb.svg' }
];

function getVeilleItems() { try { return [...JSON.parse(localStorage.getItem('croisee_veille_items_v1') || '[]'), ...DEFAULT_VEILLE_ITEMS]; } catch { return DEFAULT_VEILLE_ITEMS; } }
function getCreatorShowcaseItems() { try { return [...JSON.parse(localStorage.getItem('croisee_creator_showcase_v1') || '[]'), ...DEFAULT_CREATOR_SHOWCASE]; } catch { return DEFAULT_CREATOR_SHOWCASE; } }
function setVeilleCategoryFilter(cat) { currentVeilleCategory = cat; currentNewsPage = 1; renderVeilleView(); }
async function editVeilleArticle(id) {
  const item = window.__veilleArticles?.find(article => article.id === id);
  if (!item || !String(id).startsWith('news-')) return;
  const titre = window.prompt('Titre de l’article', item.titre);
  if (titre === null || !titre.trim()) return;
  const resume = window.prompt('Résumé de l’article', item.resume);
  if (resume === null) return;
  try {
    const response = await fetch('/api/news/' + encodeURIComponent(id), {method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({titre,resume})});
    if (!response.ok) throw new Error('Modification refusée');
    renderVeilleView();
  } catch (error) { if (typeof showCustomToast === 'function') showCustomToast('Erreur', error.message, 'warning'); }
}

function setJobsTypeFilter(type) { currentJobsTypeFilter = type; currentJobsPage = 1; renderJobsView(); }

function addVeilleArticle(e) {
  e.preventDefault();
  const f = e.currentTarget;
  const item = { id: 'veille-' + Date.now(), cat: f.cat.value, date: new Date().toISOString().slice(0, 10) + ' · Flux direct', badge: f.badge.value.trim(), titre: f.titre.value.trim(), sourceNom: f.sourceNom.value.trim(), sourceUrl: f.sourceUrl.value.trim(), norme: f.norme.value.trim(), resume: f.resume.value.trim() };
  const saved = JSON.parse(localStorage.getItem('croisee_veille_items_v1') || '[]');
  saved.unshift(item);
  localStorage.setItem('croisee_veille_items_v1', JSON.stringify(saved));
  f.reset(); renderVeilleView();
  if (typeof showCustomToast === 'function') showCustomToast('Actu publiée', 'Nouvelle dépêche ajoutée au flux ACTU & NEWS.', 'success');
}

function addCreatorShowcaseItem(e) {
  e.preventDefault();
  const f = e.currentTarget;
  const item = { id: 'expo-' + Date.now(), categorie: f.categorie.value.trim(), titre: f.titre.value.trim(), technique: f.technique.value.trim(), norme: f.norme.value.trim(), image: f.image.value.trim() || 'assets/atelier_demo_digital_painting.jpg' };
  const saved = JSON.parse(localStorage.getItem('croisee_creator_showcase_v1') || '[]');
  saved.unshift(item);
  localStorage.setItem('croisee_creator_showcase_v1', JSON.stringify(saved));
  f.reset(); renderCreatorShowcaseView();
  if (typeof showCustomToast === 'function') showCustomToast('Œuvre exposée', 'Réalisation ajoutée à l\'exposition.', 'success');
}

// 1. ONGLET ACTU & NEWS EN FLUX CONTINU (#content-veille)
async function renderVeilleView() {
  const container = document.getElementById('veille-workspace-container');
  if (!container) return;
  let all = getVeilleItems();
  try { const response = await fetch('/api/news'); if (response.ok) { const data = await response.json(); const remote = data.articles.map(a => ({id:a.id,cat:a.cat,badge:a.badge,titre:a.titre,sourceNom:a.sourceNom,sourceUrl:a.sourceUrl,norme:a.norme,resume:a.resume,date:a.date})); const ids=new Set(remote.map(a=>a.id)); all=[...remote,...all.filter(a=>!ids.has(a.id))]; } } catch {}
  const seenTitles = new Set(), seenLinks = new Set();
  all = all.filter(item => { const title = item.titre.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, ''); let link = item.sourceUrl || ''; try { const u = new URL(link); u.hash = ''; for (const k of [...u.searchParams.keys()]) if (k.startsWith('utm_')) u.searchParams.delete(k); link = u.href.replace(/\/$/, ''); } catch {} if (seenTitles.has(title) || (link && seenLinks.has(link))) return false; seenTitles.add(title); if (link) seenLinks.add(link); return true; });
  window.__veilleArticles = all;
  const filtered = currentVeilleCategory === 'all' ? all : all.filter(i => i.cat === currentVeilleCategory);
  const newsPages = Math.max(1, Math.ceil(filtered.length / 10)); currentNewsPage = Math.min(currentNewsPage, newsPages);
  const newsItems = filtered.slice((currentNewsPage - 1) * 10, currentNewsPage * 10).map(item => Object.fromEntries(Object.entries(item).map(([key,value]) => [key,typeof value === 'string' ? escapeBackend(value) : value])));
  const isAdmin = (typeof getActiveRole === 'function' ? getActiveRole() : 'visiteur') === 'admin';

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div class="space-y-1.5 max-w-3xl">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
            <span class="px-2.5 py-1 rounded-md bg-[#f8485e]/15 text-[#f8485e] font-mono text-xs font-semibold">FLUX CONTINU · ${all.length} Dépêches Créatives & Normes ISO</span>
          </div>
          <h1 class="text-2xl lg:text-3xl font-bold text-white">ACTU & NEWS : Logiciels, Prépresse ISO & Écoles</h1>
          <p class="text-sm text-slate-300 leading-relaxed">Fil continu d'actualités techniques : nouveautés Adobe CC 2026, Blender Grease Pencil 3.0, Procreate Dreams 2, Krita 6, normes FOGRA51 / PDF/X-4 et vie d'atelier.</p>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 bg-[#111317] p-1.5 rounded-2xl border border-[#262b35] shrink-0">
          ${[{ id: 'all', label: `Flux complet (${all.length})` }, { id: 'logiciels', label: 'Logiciels' }, { id: 'normes', label: 'Normes ISO' }, { id: 'atelier', label: 'Atelier 1:1' }, { id: 'art', label: 'Art & Écoles' }].map(c => `<button onclick="setVeilleCategoryFilter('${c.id}')" class="px-3 py-2 rounded-xl text-xs font-bold ${currentVeilleCategory === c.id ? 'bg-[#f8485e] text-white' : 'text-slate-300 hover:text-white'}">${c.label}</button>`).join('')}
        </div>
      </div>

      ${isAdmin ? `
        <form onsubmit="addVeilleArticle(event)" class="p-5 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-3">
          <h3 class="text-xs font-mono font-bold uppercase text-[#f8485e]">Publier dans le flux ACTU & NEWS (Admin)</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <select name="cat" class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><option value="logiciels">Logiciels & Outils</option><option value="normes">Normes & Prépresse</option><option value="atelier">Matériel & Atelier</option><option value="art">Art & Écoles</option></select>
            <input name="badge" placeholder="Badge (ex. Mise à jour 2026)" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="sourceNom" placeholder="Nom de la source (ex. Adobe / W3C)" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="sourceUrl" type="url" placeholder="https://..." required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input name="titre" placeholder="Titre de l'actualité" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="norme" placeholder="Norme ou spécification technique associée" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
          </div>
          <div class="flex gap-3">
            <input name="resume" placeholder="Synthèse technique et impact pour l'atelier..." required class="flex-1 px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <button class="px-5 py-2 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold shrink-0">Publier au flux</button>
          </div>
        </form>
      ` : ''}

      <div class="flex justify-end items-center gap-3 text-sm text-slate-300"><button onclick="changeNewsPage(-1)" ${currentNewsPage <= 1 ? 'disabled' : ''}>Précédent</button><span>Page ${currentNewsPage} / ${newsPages}</span><button onclick="changeNewsPage(1)" ${currentNewsPage >= newsPages ? 'disabled' : ''}>Suivant</button></div>
      <div class="relative border-l-2 border-[#262b35] ml-3 pl-6 space-y-4">
        ${newsItems.map(item => `
          <article class="relative p-5 rounded-2xl bg-[#181b21] border border-[#262b35] hover:border-[#f8485e] transition-all space-y-3">
            <span class="absolute -left-[31px] top-6 w-3.5 h-3.5 rounded-full bg-[#f8485e] border-2 border-[#111317]"></span>
            <div class="flex flex-wrap items-center justify-between gap-2">
              <span class="px-2.5 py-0.5 rounded bg-[#f8485e]/15 text-[#f8485e] font-mono text-xs font-bold">${item.badge}</span>
              <span class="text-xs font-mono text-emerald-400">${item.date}</span>
            </div>
            <div class="flex items-start justify-between gap-3"><h2 class="text-lg font-bold text-white leading-snug">${item.titre}</h2>${isAdmin && String(item.id).startsWith('news-') ? `<button onclick="editVeilleArticle('${item.id}')" class="px-3 py-1 rounded-lg border border-emerald-500/40 text-emerald-300 text-xs">Modifier</button>` : ''}</div>
            <p class="text-sm text-slate-300 leading-relaxed">${item.resume}</p>
            <div class="pt-3 border-t border-[#262b35] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span class="font-mono text-amber-300">Norme : ${item.norme}</span>
              <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer" class="font-bold text-emerald-400 hover:underline">Source officielle : ${item.sourceNom} ↗</a>
            </div>
          </article>
        `).join('') || '<p class="md:col-span-2 p-6 text-center text-slate-300">Aucune offre publiée pour le moment.</p>'}
      </div>
    </div>
  `;
}

// 2. ONGLET JOBS & STAGES EN MODE CONNECTÉ (#content-jobs)
async function submitJobOffer(e) {
  e.preventDefault();
  const f = e.currentTarget;
  try {
    await fetch('/api/jobs', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ type: f.type.value, title: f.title.value, company: f.company.value, location: f.location.value, region: f.region.value, remuneration: f.remuneration.value, norme: f.norme.value, description: f.description.value, contactUrl: f.contactUrl.value }) });
    f.reset();
    if (typeof showCustomToast === 'function') showCustomToast('Offre publiée', 'Annonce ajoutée à JOBS & STAGES.', 'success');
    await renderJobsView();
  } catch {}
}

async function deleteJobOffer(jobId) {
  try { await fetch('/api/jobs/' + jobId, { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: '{}' }); await renderJobsView(); } catch {}
}

async function renderJobsView() {
  const container = document.getElementById('jobs-workspace-container');
  if (!container) return;
  try { const res = await fetch('/api/jobs'); if (res.ok) cachedBackendJobs = await res.json(); } catch {}

  const seenJobs = new Set();
  const today = new Date().toISOString().slice(0, 10);
  const allJobs = [...DEFAULT_JOBS_OFFERS, ...cachedBackendJobs].filter(j => { if (j.deadline && j.deadline < today) return false; const key = (j.contact_url || j.contactUrl || (j.company + j.title)).replace(/\/$/, ''); if (seenJobs.has(key)) return false; seenJobs.add(key); return true; });
  const filtered = allJobs.filter(j => (currentJobsTypeFilter === 'all' || j.type === currentJobsTypeFilter) && (!currentJobsSearch || [j.title,j.company,j.location,j.description,j.sourceName].join(' ').toLocaleLowerCase('fr').includes(currentJobsSearch.toLocaleLowerCase('fr'))));
  const pageCount = Math.max(1, Math.ceil(filtered.length / 10)); currentJobsPage = Math.min(currentJobsPage, pageCount);
  const pageJobs = filtered.slice((currentJobsPage - 1) * 10, currentJobsPage * 10);
  let watchStatus = null; try { watchStatus = await api('/jobs/watch'); } catch {}
  const isAdmin = (typeof getActiveRole === 'function' ? getActiveRole() : 'visiteur') === 'admin';
  const esc = typeof escapeBackend === 'function' ? escapeBackend : (v => String(v ?? ''));

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div class="space-y-1.5 max-w-3xl">
          <span class="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-semibold">ESPACE CONNECTÉ · ${allJobs.length} Offres publiées</span>
          <h1 class="text-2xl lg:text-3xl font-bold text-white">JOBS & STAGES : Immersion Atelier, Alternance RPIP & Studios</h1>
          <p class="text-sm text-slate-300">Offres sourcées en France, à l’international et en télétravail. Vérifiez leur disponibilité sur la page d’origine.</p>
        </div>
        <div class="flex flex-wrap items-center gap-1.5 bg-[#111317] p-1.5 rounded-2xl border border-[#262b35] shrink-0">
          ${['all', 'Stage', 'Alternance', 'Emploi'].map(t => `<button onclick="setJobsTypeFilter('${t}')" class="px-3.5 py-2 rounded-xl text-xs font-bold ${currentJobsTypeFilter === t ? 'bg-[#f8485e] text-white' : 'text-slate-300 hover:text-white'}">${t === 'all' ? `Toutes (${allJobs.length})` : t}</button>`).join('')}
        </div>
      </div>

      <div class="p-4 rounded-xl bg-[#181b21] border border-[#262b35] space-y-3">
        <div class="flex flex-wrap justify-between gap-3"><p class="text-sm text-slate-300">Veille toutes les 6 h · AFJV, ProfilCulture, CIPAC · Dernière collecte : ${watchStatus?.lastRun ? esc(new Date(watchStatus.lastRun.ranAt).toLocaleString('fr-FR')) : 'en attente'}${watchStatus?.running ? ' · Collecte en cours' : ''}</p>${isAdmin ? '<button onclick="refreshJobsWatch(this)" class="px-3 py-2 rounded-lg bg-emerald-700 text-white text-xs font-bold">Actualiser la veille</button>' : ''}</div>
        ${watchStatus?.lastRun?.sources?.some(s => s.status === 'erreur') ? `<details class="text-xs text-amber-300"><summary>Sources à vérifier</summary>${watchStatus.lastRun.sources.filter(s => s.status === 'erreur').map(s => `<p>${esc(s.source)} : ${esc(s.message)}</p>`).join('')}</details>` : ''}
        <form onsubmit="event.preventDefault(); currentJobsSearch=this.search.value.trim(); currentJobsPage=1; renderJobsView()" class="flex gap-2"><input name="search" aria-label="Rechercher une annonce" value="${esc(currentJobsSearch)}" placeholder="Métier, entreprise, ville, télétravail…" class="flex-1 min-w-0 p-2 rounded-lg bg-[#111317] text-white"><button class="px-3 py-2 rounded-lg bg-[#f8485e] text-white text-sm">Rechercher</button></form>
        <p class="text-xs text-slate-400">${filtered.length} résultats · Les annonces à échéance connue sont masquées après clôture. Pour les autres, confirmez la disponibilité auprès de la source.</p>
      </div>
      ${isAdmin ? `
        <form onsubmit="submitJobOffer(event)" class="p-5 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-3">
          <h3 class="text-xs font-mono font-bold uppercase text-emerald-400">Publier une offre dans JOBS & STAGES (Admin)</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <select name="type" class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><option value="Stage">Stage</option><option value="Alternance">Alternance RPIP / Design</option><option value="Emploi">Emploi CDD / CDI</option></select>
            <input name="title" placeholder="Intitulé du poste ou du stage" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="company" placeholder="Entreprise / Atelier (ex. GPO SARL)" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="location" placeholder="Ville & Département" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <input name="remuneration" placeholder="Gratification / Salaire" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="norme" placeholder="Compétences & Normes (ex. Illustrator, CutContour)" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input name="contactUrl" placeholder="Lien ou email de candidature" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <input type="hidden" name="region" value="grand-est">
          </div>
          <div class="flex gap-3">
            <input name="description" placeholder="Missions détaillées confiées au stagiaire ou collaborateur..." required class="flex-1 px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
            <button class="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0">Publier l'offre</button>
          </div>
        </form>
      ` : ''}

      <div class="flex items-center justify-end gap-3 text-sm text-slate-300"><button onclick="changeJobsPage(-1)" ${currentJobsPage <= 1 ? 'disabled' : ''}>Précédent</button><span>Page ${currentJobsPage} / ${pageCount}</span><button onclick="changeJobsPage(1)" ${currentJobsPage >= pageCount ? 'disabled' : ''}>Suivant</button></div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        ${pageJobs.map(j => `
          <div class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col justify-between space-y-4">
            <div class="space-y-2.5">
              <div class="flex items-center justify-between gap-2">
                <span class="px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-mono text-xs font-bold">${esc(j.type)}</span>
                <span class="text-xs font-mono text-slate-300">${esc(j.location)}</span>
              </div>
              <h2 class="text-lg font-bold text-white">${esc(j.title)}</h2>
              <p class="text-xs font-bold text-[#f8485e]">${esc(j.company)} · <span class="text-amber-300 font-mono">${esc(j.remuneration)}</span></p>
              <p class="text-sm text-slate-300 leading-relaxed">${esc(j.description)}</p>
              ${j.sourceName ? `<p class="text-xs text-slate-400">Source : ${esc(j.sourceName)} · Vérifiée le ${esc(j.verifiedAt)}${j.publishedAt ? ` · Publiée le ${esc(j.publishedAt)}` : ''}${j.deadline ? ` · Candidature avant le ${esc(j.deadline)}` : ' · Échéance non précisée'}</p>` : ''}
            </div>
            <div class="pt-3 border-t border-[#262b35] space-y-2.5">
              <div class="p-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-xs font-mono text-sky-300">Prérequis : ${esc(j.norme)}</div>
              <div class="flex items-center justify-between gap-2">
                ${isAdmin && typeof j.id === 'number' ? `<button onclick="deleteJobOffer(${j.id})" class="px-3 py-1.5 rounded-lg bg-rose-950/70 text-rose-300 text-xs font-bold">Supprimer</button>` : `<span></span>`}
                <a href="${esc(j.contact_url || j.contactUrl || '#')}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">Candidater / Voir l'offre ↗</a>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

// 3. EXPOSITION DES TRAVAUX D'ATELIER (#content-exposition)
function renderCreatorShowcaseView() {
  const container = document.getElementById('creator-showcase-container');
  if (!container) return;
  const items = getCreatorShowcaseItems();
  const isAdmin = (typeof getActiveRole === 'function' ? getActiveRole() : 'visiteur') === 'admin';

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border border-[#262b35]">
        <span class="px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-semibold">Galerie d'Exposition de l'Atelier</span>
        <h1 class="text-2xl lg:text-3xl font-bold text-white mt-1.5">Exposition des Travaux & Réalisations</h1>
        <p class="text-sm text-slate-300 mt-1">Planches d'étude académique, peintures numériques et gabarits prépresse 1:1 exposés par la direction d'atelier.</p>
      </div>
      ${isAdmin ? `
        <form onsubmit="addCreatorShowcaseItem(event)" class="p-5 rounded-2xl bg-[#181b21] border border-amber-500/40 space-y-3">
          <h4 class="text-xs font-mono font-bold uppercase text-amber-300">Exposer un nouveau travail dans la Galerie (Admin)</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <input name="categorie" placeholder="Catégorie" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><input name="titre" placeholder="Titre de l'œuvre" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><input name="norme" placeholder="Norme appliquée" required class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><input name="image" placeholder="Chemin image (ex. assets/session_mucha_art.jpg)" class="px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
          </div>
          <div class="flex gap-3"><input name="technique" placeholder="Description technique..." required class="flex-1 px-3 py-2 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white"><button class="px-5 py-2 rounded-xl bg-[#f8485e] text-white text-xs font-bold shrink-0">Exposer</button></div>
        </form>
      ` : ''}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${items.map(w => `
          <div class="rounded-2xl bg-[#181b21] border border-[#262b35] overflow-hidden flex flex-col justify-between">
            <div>
              <div class="p-4 pb-0"><span class="px-2.5 py-0.5 rounded bg-black border border-[#262b35] text-xs font-mono font-bold text-white">${w.categorie}</span></div>
              <div class="p-4 space-y-1.5"><h2 class="text-base font-bold text-white">${w.titre}</h2><p class="text-xs text-slate-300 leading-relaxed">${w.technique}</p></div>
            </div>
            <div class="px-4 py-2.5 border-t border-[#262b35] bg-[#111317] flex items-center justify-between text-xs font-mono"><span class="text-amber-300 truncate">${w.norme}</span><span class="text-[#f8485e] font-bold shrink-0">Agrandi →</span></div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

if (typeof window !== 'undefined') {
  Object.assign(window, { renderVeilleView, setVeilleCategoryFilter, addVeilleArticle, editVeilleArticle, renderJobsView, setJobsTypeFilter, submitJobOffer, deleteJobOffer, renderCreatorShowcaseView, addCreatorShowcaseItem });
}
