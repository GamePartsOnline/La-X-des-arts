let currentBugPage = 1;
async function renderBugReports() {
  const container = document.getElementById('content-bugs');
  const admin = backendUser?.role === 'admin';
  container.innerHTML = `<div class="p-6 rounded-2xl bg-[#181b21] border border-[#262b35] space-y-4"><h1 class="text-xl font-bold text-white">Signaler un bug</h1><form onsubmit="submitBugReport(event)" class="space-y-3"><label class="block text-sm text-slate-300">Titre<input name="title" required maxlength="160" class="block w-full p-2 rounded bg-[#111317]"></label><label class="block text-sm text-slate-300">Page concernée<input name="page" maxlength="500" value="${escapeBackend(location.pathname + location.hash)}" class="block w-full p-2 rounded bg-[#111317]"></label><label class="block text-sm text-slate-300">Description et étapes pour reproduire<textarea name="description" required maxlength="4000" rows="5" class="block w-full p-2 rounded bg-[#111317]" placeholder="Que faisiez-vous ? Quel résultat attendiez-vous ? Que s’est-il passé ?"></textarea></label><p class="text-xs text-slate-400">Les signalements sont consultables par l’administration. Ne joignez aucun mot de passe.</p><p id="bug-error" role="alert" class="text-sm text-rose-300"></p><button type="submit" class="px-4 py-2 bg-[#f8485e] rounded-lg font-bold text-white">Envoyer le signalement</button></form></div><div class="space-y-3"><h2 class="text-lg font-bold text-white">${admin ? 'Tous les signalements' : 'Mes signalements'}</h2><div id="bug-list" class="space-y-3" aria-live="polite">Chargement…</div></div>`;
  try {
    const data = await api('/bug-reports?page=' + currentBugPage);
    const {reports,total,page} = data; currentBugPage = page;
    const pageCount = Math.max(1,Math.ceil(total/10));
    document.getElementById('bug-list').innerHTML = reports.length ? reports.map(b => `<article class="p-4 rounded-xl bg-[#181b21] border border-[#262b35] space-y-2"><div class="flex flex-wrap justify-between gap-2"><h3 class="font-bold text-white">#${b.id} · ${escapeBackend(b.title)}</h3><span class="text-sm text-slate-300">${b.status === 'resolu' ? 'Résolu' : 'Ouvert'}</span></div><p class="text-xs text-slate-400">${escapeBackend(b.created_at)} · ${escapeBackend(b.page)}${admin ? ' · ' + escapeBackend(b.author || 'Compte supprimé') : ''}</p><p class="text-sm text-slate-200 whitespace-pre-wrap">${escapeBackend(b.description)}</p>${admin ? `<button onclick="setBugStatus(${b.id}, '${b.status === 'resolu' ? 'ouvert' : 'resolu'}')" class="px-3 py-1 rounded border border-[#363d4f] text-sm text-white">${b.status === 'resolu' ? 'Rouvrir' : 'Marquer résolu'}</button>` : ''}</article>`).join('') : '<p class="text-sm text-slate-400">Aucun signalement.</p>';
    document.getElementById('bug-list').insertAdjacentHTML('afterbegin', `<div class="flex justify-end gap-3 text-sm text-slate-300"><button onclick="changeBugPage(-1)" ${page <= 1 ? 'disabled' : ''}>Précédent</button><span>Page ${page} / ${pageCount} · ${total} signalements</span><button onclick="changeBugPage(1)" ${page >= pageCount ? 'disabled' : ''}>Suivant</button></div>`);
  } catch (e) { document.getElementById('bug-list').textContent = e.message; }
}
async function submitBugReport(event) {
  event.preventDefault();
  const form = event.currentTarget, button = form.querySelector('[type="submit"]');
  button.disabled = true;
  try {
    await api('/bug-reports', 'POST', Object.fromEntries(new FormData(form)));
    showCustomToast('Signalement enregistré', 'Votre signalement a été transmis à l’administration.', 'success');
    currentBugPage = 1; await renderBugReports();
  } catch (e) { document.getElementById('bug-error').textContent = e.message; }
  finally { button.disabled = false; }
}
async function setBugStatus(id, status) {
  try { await api('/bug-reports/' + id, 'PUT', {status}); await renderBugReports(); }
  catch (e) { backendError(e); }
}

function changeBugPage(delta) { currentBugPage = Math.max(1,currentBugPage + delta); renderBugReports(); }
