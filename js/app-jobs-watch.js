function changeJobsPage(delta) {
  currentJobsPage = Math.max(1, currentJobsPage + delta);
  renderJobsView();
}
async function refreshJobsWatch(button) {
  button.disabled = true;
  button.textContent = 'Collecte en cours…';
  try {
    const result = await api('/jobs/watch', 'POST', {});
    showCustomToast('Veille actualisée', `${result.added} nouvelles offres, ${result.found} annonces collectées.`, 'success');
    await renderJobsView();
  } catch (error) { backendError(error); button.disabled = false; button.textContent = 'Réessayer'; }
}

function changeNewsPage(delta) { currentNewsPage = Math.max(1, currentNewsPage + delta); renderVeilleView(); }
