function openPasswordDialog() {
  if (backendUser?.role !== 'stagiaire') return;
  document.getElementById('password-dialog')?.remove();
  const dialog = document.createElement('dialog');
  dialog.id = 'password-dialog';
  dialog.className = 'rounded-2xl bg-[#181b21] text-white border border-[#262b35] p-6 w-full max-w-md';
  dialog.setAttribute('aria-labelledby', 'password-title');
  dialog.innerHTML = `<form class="space-y-4" onsubmit="changeStudentPassword(event)">
    <h2 id="password-title" class="text-lg font-bold">Changer mon mot de passe</h2>
    <p class="text-sm text-slate-300">Choisissez un mot de passe de 12 à 256 caractères.</p>
    ${[['currentPassword', 'Mot de passe actuel', 'current-password'], ['newPassword', 'Nouveau mot de passe', 'new-password'], ['confirmation', 'Confirmer le nouveau mot de passe', 'new-password']].map(([name, label, autocomplete]) => `<label class="block text-sm">${label}<input name="${name}" type="password" autocomplete="${autocomplete}" required maxlength="256" ${name !== 'currentPassword' ? 'minlength="12"' : ''} class="block w-full mt-1 p-2 rounded-lg bg-[#111317] border border-[#262b35]"></label>`).join('')}
    <p id="password-error" role="alert" class="text-sm text-rose-300"></p>
    <div class="flex justify-end gap-3"><button type="button" onclick="document.getElementById('password-dialog').close()">Annuler</button><button type="submit" class="px-4 py-2 rounded-lg bg-[#f8485e] font-bold">Enregistrer</button></div>
  </form>`;
  dialog.addEventListener('close', () => dialog.remove());
  document.body.append(dialog);
  dialog.showModal();
}

async function changeStudentPassword(event) {
  event.preventDefault();
  const form = event.currentTarget, fields = form.elements;
  const error = document.getElementById('password-error');
  error.textContent = '';
  if (fields.newPassword.value !== fields.confirmation.value) {
    error.textContent = 'Les nouveaux mots de passe ne correspondent pas.';
    return;
  }
  const button = form.querySelector('[type="submit"]');
  button.disabled = true;
  try {
    await api('/me/password', 'PUT', { currentPassword: fields.currentPassword.value, newPassword: fields.newPassword.value });
    form.reset();
    document.getElementById('password-dialog').close();
    showCustomToast('Mot de passe modifié', 'Vos autres sessions ont été déconnectées.', 'success');
  } catch (err) {
    error.textContent = err.message;
  } finally { button.disabled = false; }
}
