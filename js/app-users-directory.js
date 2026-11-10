// =====================================================================
// ESPACE VISITEUR (#content-visiteur) & ANNUAIRE DES ÉCOLES, SITES & FORMATIONS CPF (#content-ecoles)
// AFFICHAGE DES PRIX (0 € PUBLIC, CFA RÉMUNÉRÉ, TARIFS PRIVÉS RNCP, FORMATIONS CPF 2026)
// =====================================================================

let currentEcolesSecteur = 'all', currentEcolesStatut = 'all', currentEcolesSearchQuery = '';

function setEcolesSecteurFilter(secteur) { currentEcolesSecteur = secteur; renderEcolesDirectoryPage(); }
function setEcolesStatutFilter(statut) { currentEcolesStatut = statut; renderEcolesDirectoryPage(); }
function handleEcolesSearchInput(val) { currentEcolesSearchQuery = String(val || ''); renderEcolesDirectoryPage(true); }
function resetEcolesFilters() { currentEcolesSecteur = 'all'; currentEcolesStatut = 'all'; currentEcolesSearchQuery = ''; renderEcolesDirectoryPage(); }
function getTutoAffiliateKey() { try { return localStorage.getItem('croisee_tuto_affiliate_key') || ''; } catch { return ''; } }

function saveTutoAffiliateKey(e) {
  e.preventDefault();
  const val = e.currentTarget.tutoKey.value.trim();
  try { localStorage.setItem('croisee_tuto_affiliate_key', val); } catch {}
  if (typeof showCustomToast === 'function') showCustomToast('Partenariat Tuto.com', val ? `Clé d'affiliation (${val}) activée sur les liens Tuto.com.` : 'Clé d\'affiliation retirée.', 'success');
  renderEcolesDirectoryPage();
}

function openPartnerCourseSearch(event) {
  event.preventDefault();
  const f = event.currentTarget;
  const q = encodeURIComponent((f.q.value || 'graphisme').trim());
  const platform = f.platform.value;
  const aff = getTutoAffiliateKey();
  const affParam = aff ? `&cc=${encodeURIComponent(aff)}` : '';
  let targetUrl = `https://fr.tuto.com/recherche/?q=${q}${affParam}`;
  if (platform === 'dps') targetUrl = `https://digitalpainting.school/cours`;
  if (platform === '21draw') targetUrl = `https://www.21-draw.com/courses/`;
  if (platform === 'cpf') targetUrl = `https://www.moncompteformation.gouv.fr/espace-prive/html/#/formation/recherche`;
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
}

function getStatutBadgeHTML(s) {
  const statut = typeof s === 'object' ? s.statut : s;
  const cpfBadge = (typeof s === 'object' && s.cpf && statut !== 'cpf') ? `<span class="px-2 py-0.5 rounded-md bg-rose-500/15 text-[#f8485e] border border-[#f8485e]/40 text-xs font-bold">Éligible CPF</span>` : '';
  if (statut === 'cpf') return `<span class="px-2.5 py-0.5 rounded-md bg-rose-500/20 text-[#f8485e] border border-[#f8485e]/40 text-xs font-bold">Formation Certifiante CPF (RNCP / TOSA RS)</span>`;
  if (statut === 'public') return `<div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-0.5 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-bold">Public · Gratuit (Parcoursup)</span>${cpfBadge}</div>`;
  if (statut === 'cfa') return `<span class="px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 text-xs font-bold">CFA Alternance RPIP · Rémunéré</span>`;
  if (statut === 'plateforme') return `<div class="flex flex-wrap gap-1.5"><span class="px-2.5 py-0.5 rounded-md bg-sky-500/15 text-sky-300 border border-sky-500/30 text-xs font-bold">En Ligne & Partenaire Vidéo</span>${cpfBadge}</div>`;
  return `<span class="px-2.5 py-0.5 rounded-md bg-purple-500/15 text-purple-300 border border-purple-500/30 text-xs font-bold">École Supérieure Privée (RNCP)</span>`;
}

// 1. VUE DÉDIÉE RÔLE "VISITEUR" (ORIENTATION, ÉCOLES & CPF, BLOG ACTU & JOBS)
function renderVisiteurView() {
  const container = document.getElementById('visiteur-workspace-container');
  if (!container) return;
  const schoolsCount = (window.SCHOOLS_DIRECTORY_DATA || []).length;
  const metiersCount = (window.METIERS_DATA || []).length;

  container.innerHTML = `
    <div class="space-y-6">
      <section class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div class="space-y-2 max-w-3xl">
          <span class="px-2.5 py-1 rounded-md bg-slate-500/15 text-slate-200 border border-slate-500/30 text-xs font-semibold">Espace Visiteur Connecté · Orientation, Écoles & CPF, Blog Actu & Jobs</span>
          <h1 class="text-2xl lg:text-3xl font-bold text-white">Orientation Métiers, Prix des Écoles, Formations CPF, Blog Actu & Stages</h1>
          <p class="text-sm text-slate-300 leading-relaxed">
            Les cours pratiques d'atelier sont réservés aux stagiaires en immersion chez GPO SARL. En tant que membre Visiteur, vous accédez librement aux <strong>${metiersCount} fiches métiers</strong>, à l'<strong>annuaire des ${schoolsCount} écoles, plateformes et formations CPF (avec tarifs vérifiés : 0 € public, CFA rémunéré, privé RNCP et règles CPF 2026)</strong>, au <strong>Blog ACTU & NEWS (avec suivi de lecture "J'ai lu")</strong> et aux annonces <strong>JOBS & STAGES</strong>.
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-2.5 shrink-0">
          <button onclick="showTab('ecoles')" class="px-4 py-2.5 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-white text-xs font-bold">Écoles, Prix & Formations CPF →</button>
          <button onclick="showTab('veille')" class="px-4 py-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-amber-300 text-xs font-bold">Blog Actu (À lire / J'ai lu) →</button>
        </div>
      </section>

      <section id="home-discover-metier-slot"></section>

      <section class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-5 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col justify-between space-y-4">
          <div class="space-y-1.5">
            <span class="text-xs font-mono text-emerald-400 font-bold uppercase">Tarifs & Formations CPF</span>
            <h2 class="text-lg font-bold text-white">Annuaire des ${schoolsCount} Écoles & CPF</h2>
            <p class="text-xs text-slate-300 leading-relaxed">Comparez les tarifs (0 € écoles publiques, CFA RPIP rémunéré, écoles privées RNCP, formations CPF RNCP37943 / TOSA Adobe) et leurs modèles de financement.</p>
          </div>
          <button onclick="showTab('ecoles')" class="w-full py-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-xs font-bold text-emerald-300">Explorer les Écoles & CPF →</button>
        </div>
        <div class="p-5 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col justify-between space-y-4">
          <div class="space-y-1.5">
            <span class="text-xs font-mono text-amber-300 font-bold uppercase">Bot Quotidien & Lecture</span>
            <h2 class="text-lg font-bold text-white">Blog ACTU & NEWS (J'ai lu)</h2>
            <p class="text-xs text-slate-300 leading-relaxed">Actualités classées par ordre d'arrivée, collectées tous les jours par le Bot de veille, avec case à cocher « J'ai lu » pour suivre vos lectures.</p>
          </div>
          <button onclick="showTab('veille')" class="w-full py-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-xs font-bold text-amber-300">Ouvrir le Blog Actu →</button>
        </div>
        <div class="p-5 rounded-2xl bg-[#181b21] border border-[#262b35] flex flex-col justify-between space-y-4">
          <div class="space-y-1.5">
            <span class="text-xs font-mono text-[#f8485e] font-bold uppercase">Mode Connecté</span>
            <h2 class="text-lg font-bold text-white">JOBS & STAGES Atelier</h2>
            <p class="text-xs text-slate-300 leading-relaxed">Offres de stages RPIP, alternances en studio graphique, postes d'illustrateur et missions prépresse réservées aux membres connectés.</p>
          </div>
          <button onclick="showTab('jobs')" class="w-full py-2.5 rounded-xl bg-[#111317] hover:bg-[#262b35] border border-[#262b35] text-xs font-bold text-white">Consulter les annonces →</button>
        </div>
      </section>
    </div>
  `;
  if (typeof renderDiscoverMetierWidget === 'function') renderDiscoverMetierWidget();
}

// 2. ANNUAIRE INTERACTIF DES ÉCOLES, SITES & FORMATIONS CPF AVEC TARIFS ET EXPLICATIONS
function renderEcolesDirectoryPage(preserveFocus = false) {
  const container = document.getElementById('ecoles-workspace-container');
  if (!container) return;

  const schools = window.SCHOOLS_DIRECTORY_DATA || [];
  const secteurs = window.SECTEURS_GEOGRAPHIQUES || [{ id: 'all', label: 'Tous' }];
  const q = currentEcolesSearchQuery.trim().toLowerCase();

  const matchesSearchAndStatut = s => {
    const okStatut = currentEcolesStatut === 'all' || (currentEcolesStatut === 'cpf' ? (s.statut === 'cpf' || !!s.cpf) : s.statut === currentEcolesStatut);
    const text = `${s.nom} ${s.ville} ${s.categorie} ${s.cursus} ${s.tarif || ''} ${(s.diplomes || []).join(' ')} ${s.cpf ? 'cpf compte formation t osa rncp' : ''}`.toLowerCase();
    return okStatut && (!q || text.includes(q));
  };

  const filtered = schools.filter(s => (currentEcolesSecteur === 'all' || (s.secteurs || [s.secteur]).includes(currentEcolesSecteur)) && matchesSearchAndStatut(s));
  const activeRole = typeof getActiveRole === 'function' ? getActiveRole() : 'visiteur';
  const affKey = getTutoAffiliateKey();
  const cpfCount = schools.filter(s => s.statut === 'cpf' || s.cpf).length;

  container.innerHTML = `
    <div class="space-y-6">
      <div class="p-6 lg:p-8 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-5">
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div class="space-y-1.5 max-w-3xl">
            <span class="px-2.5 py-1 rounded-md bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">Transparence Tarifaire · ${schools.length} Écoles, CFA RPIP, Plateformes & ${cpfCount} Formations CPF</span>
            <h1 class="text-2xl lg:text-3xl font-bold text-white">Annuaire des Écoles, Tarifs Annuels & Formations Éligibles CPF</h1>
            <p class="text-sm text-slate-300">Comparez les coûts réels de scolarité par région, les formations finançables par le Compte Personnel de Formation (CPF) et le modèle économique de chaque établissement.</p>
          </div>
          <button onclick="setEcolesStatutFilter('cpf')" class="px-4 py-2.5 rounded-xl bg-[#f8485e] hover:bg-[#e0374c] text-xs font-bold text-white shrink-0">Voir les ${cpfCount} Formations CPF →</button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 pt-1">
          <div class="p-3.5 rounded-xl bg-[#111317] border border-emerald-500/30 space-y-1"><span class="text-xs font-mono font-bold text-emerald-400 block">1. Public : 0 € / an</span><p class="text-[11px] text-slate-300 leading-relaxed">Financé par l'État (Éducation nationale / Culture). Seule la CVEC (~103 €) ou droits nationaux s'appliquent.</p></div>
          <div class="p-3.5 rounded-xl bg-[#111317] border border-amber-500/30 space-y-1"><span class="text-xs font-mono font-bold text-amber-300 block">2. CFA RPIP : 0 € + Salaire</span><p class="text-[11px] text-slate-300 leading-relaxed">École 100 % payée par l'OPCO de l'entreprise et l'apprenti perçoit un salaire (27 % à 100 % du SMIC).</p></div>
          <div class="p-3.5 rounded-xl bg-[#111317] border border-rose-500/40 space-y-1"><span class="text-xs font-mono font-bold text-[#f8485e] block">3. CPF 2026 (RNCP / TOSA)</span><p class="text-[11px] text-slate-300 leading-relaxed">Titre Pro <strong>RNCP37943</strong> sans plafond ; <strong>TOSA Adobe RS</strong> plafonné à 1 500 €. Reste à charge 150 € (0 € si France Travail ou OPCO).</p></div>
          <div class="p-3.5 rounded-xl bg-[#111317] border border-purple-500/30 space-y-1"><span class="text-xs font-mono font-bold text-purple-300 block">4. Privé : 5 400 à 15 990 €</span><p class="text-[11px] text-slate-300 leading-relaxed">Hors budget État : finance les campus, stations 3D, licences et intervenants (0 € possible en alternance).</p></div>
          <div class="p-3.5 rounded-xl bg-[#111317] border border-sky-500/30 space-y-1"><span class="text-xs font-mono font-bold text-sky-300 block">5. En Ligne : Freemium</span><p class="text-[11px] text-slate-300 leading-relaxed">Initiation et forums gratuits (DPS, Tuto.com) ; parcours complets ou masterclasses (21 Draw) payants ou CPF.</p></div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-3 pt-1">
          <div class="lg:col-span-6 relative">
            <input id="ecoles-search-input" type="search" value="${currentEcolesSearchQuery.replace(/"/g, '&quot;')}" oninput="handleEcolesSearchInput(this.value)" placeholder="Rechercher : CPF, RNCP37943, TOSA, Pyramyd, Gobelins, Paris, Lyon, 0 €..." class="w-full px-4 py-3 rounded-xl bg-[#111317] border border-[#262b35] focus:border-[#f8485e] text-sm text-white placeholder-slate-400 outline-none" />
          </div>
          <div class="lg:col-span-6 flex flex-wrap items-center gap-1.5 bg-[#111317] p-1.5 rounded-xl border border-[#262b35]">
            ${[{ id: 'all', label: 'Tous' }, { id: 'public', label: 'Public (0 €)' }, { id: 'cfa', label: 'CFA Rémunéré' }, { id: 'cpf', label: `Formations CPF (${cpfCount})` }, { id: 'prive', label: 'Privé (RNCP)' }, { id: 'plateforme', label: 'En ligne' }].map(st => `<button type="button" onclick="setEcolesStatutFilter('${st.id}')" class="px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all ${currentEcolesStatut === st.id ? 'bg-[#f8485e] text-white' : 'text-slate-300 hover:text-white'}">${st.label}</button>`).join('')}
          </div>
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between text-xs text-slate-400"><span class="font-mono uppercase font-bold text-slate-300">Filtrer par Secteur Géographique :</span><span>${filtered.length} établissement(s) ou formation(s) affiché(s)</span></div>
          <div class="flex flex-wrap items-center gap-1.5">
            ${secteurs.map(sec => {
              const count = schools.filter(s => (sec.id === 'all' || (s.secteurs || [s.secteur]).includes(sec.id)) && matchesSearchAndStatut(s)).length;
              return `<button type="button" onclick="setEcolesSecteurFilter('${sec.id}')" class="px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${currentEcolesSecteur === sec.id ? 'bg-emerald-600 border-emerald-500 text-white' : 'bg-[#111317] border-[#262b35] text-slate-300 hover:border-slate-500 hover:text-white'}"><span>${sec.label}</span><span class="px-1.5 py-0.5 rounded bg-black/40 font-mono text-[11px]">${count}</span></button>`;
            }).join('')}
          </div>
        </div>
      </div>

      <div class="p-5 rounded-2xl bg-[#181b21] border border-sky-500/30 space-y-3">
        <span class="text-xs font-mono font-bold uppercase text-sky-400 block">Passerelle Cours Vidéo & Recherche Mon Compte Formation (CPF, Tuto.com, DPS, 21 Draw)</span>
        <form onsubmit="openPartnerCourseSearch(event)" class="grid grid-cols-1 md:grid-cols-12 gap-2.5">
          <input name="q" placeholder="Ex. Infographiste RNCP37943, TOSA Illustrator, InDesign PDF/X-4, Blender..." required class="md:col-span-6 px-3.5 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white">
          <select name="platform" class="md:col-span-3 px-3 py-2.5 rounded-xl bg-[#111317] border border-[#262b35] text-xs text-white font-semibold"><option value="tuto">Sur Tuto.com (Partenaire & CPF)</option><option value="cpf">Sur Mon Compte Formation (CPF)</option><option value="dps">Sur Digital Painting School</option><option value="21draw">Sur 21 Draw</option></select>
          <button type="submit" class="md:col-span-3 py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-bold">Lancer la recherche ↗</button>
        </form>
        ${activeRole === 'admin' ? `<form onsubmit="saveTutoAffiliateKey(event)" class="pt-2 border-t border-[#262b35] flex flex-wrap items-center gap-2 text-xs"><span class="text-slate-400 font-mono">Admin · Clé d'affiliation Tuto.com :</span><input name="tutoKey" value="${affKey.replace(/"/g, '&quot;')}" placeholder="Code affilié Tuto.com" class="px-3 py-1.5 rounded-lg bg-[#111317] border border-[#262b35] text-white text-xs"><button type="submit" class="px-3 py-1.5 rounded-lg bg-[#262b35] hover:bg-[#f8485e] text-white font-bold">Enregistrer</button></form>` : ''}
      </div>

      ${filtered.length === 0 ? `
        <div class="p-8 rounded-2xl bg-[#181b21] border border-[#262b35] text-center space-y-3"><p class="text-base font-bold text-white">Aucun établissement ne correspond à votre recherche.</p><button onclick="resetEcolesFilters()" class="px-4 py-2 rounded-xl bg-[#f8485e] text-white text-xs font-bold">Réinitialiser tous les filtres</button></div>
      ` : `
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          ${filtered.map(s => {
            const finalUrl = s.url.includes('tuto.com') && affKey ? `${s.url}?cc=${encodeURIComponent(affKey)}` : s.url;
            return `
              <div class="p-5 rounded-2xl bg-[#181b21] border border-[#262b35] hover:border-emerald-400 transition-all flex flex-col justify-between space-y-3.5">
                <div class="space-y-2.5">
                  <div class="flex flex-wrap items-center justify-between gap-2">${getStatutBadgeHTML(s)}<span class="px-2.5 py-0.5 rounded bg-[#111317] border border-[#262b35] text-xs font-mono text-slate-200 font-semibold">${s.ville}</span></div>
                  <div><span class="text-[11px] font-mono text-slate-400">${s.categorie}</span><h2 class="text-lg font-bold text-white mt-0.5">${s.nom}</h2></div>
                  <div class="p-3 rounded-xl bg-[#111317] border border-[#262b35] space-y-1">
                    <div class="flex items-center justify-between gap-2"><span class="text-[11px] font-mono uppercase text-slate-400">Coût / Tarif :</span><span class="text-xs font-mono font-bold ${s.statut === 'public' || s.statut === 'cfa' ? 'text-emerald-300' : 'text-amber-300'}">${s.tarif || 'Consulter le site'}</span></div>
                    <p class="text-xs text-slate-300 leading-snug"><strong class="text-white">Pourquoi ce tarif :</strong> ${s.pourquoiTarif || ''}</p>
                  </div>
                  <p class="text-xs text-slate-300 leading-relaxed">${s.cursus}</p>
                  <div class="flex flex-wrap gap-1.5">${(s.diplomes || []).map(d => `<span class="px-2 py-0.5 rounded bg-[#111317] border border-[#262b35] text-[11px] font-mono text-sky-300">${d}</span>`).join('')}</div>
                </div>
                <div class="pt-3 border-t border-[#262b35] flex items-center justify-between gap-3">
                  <span class="text-xs font-mono text-slate-400 truncate">${s.url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}</span>
                  <a href="${finalUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shrink-0">Ouvrir le site officiel ↗</a>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      `}
    </div>
  `;

  if (preserveFocus) {
    const input = document.getElementById('ecoles-search-input');
    if (input) { input.focus(); input.setSelectionRange(input.value.length, input.value.length); }
  }
}

if (typeof window !== 'undefined') {
  Object.assign(window, { renderVisiteurView, renderEcolesDirectoryPage, setEcolesSecteurFilter, setEcolesStatutFilter, handleEcolesSearchInput, resetEcolesFilters, openPartnerCourseSearch, saveTutoAffiliateKey });
}
