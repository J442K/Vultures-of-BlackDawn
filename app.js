(async () => {
  const button = document.querySelector('#download-button');
  const label = document.querySelector('#download-label');
  const note = document.querySelector('#release-note');
  let repository = window.BLACKDAWN?.repository?.trim();
  if (!repository) {
    try {
      const response = await fetch('./repository.json');
      if (response.ok) repository = (await response.json()).repository;
    } catch { /* Local previews have no repository yet. */ }
  }
  if (!repository && location.hostname.endsWith('.github.io')) {
    const owner = location.hostname.split('.')[0];
    repository = `${owner}/${location.pathname.split('/').filter(Boolean)[0] || `${owner}.github.io`}`;
  }
  if (!/^[\w.-]+\/[\w.-]+$/.test(repository || '')) return;
  const releases = `https://github.com/${repository}/releases`;
  button.href = releases;
  label.textContent = 'View Windows releases';
  note.textContent = 'Find the Windows installer on GitHub Releases.';
  try {
    const response = await fetch(`https://api.github.com/repos/${repository}/releases/latest`, { signal: AbortSignal.timeout(7000) });
    if (!response.ok) return;
    const release = await response.json();
    const installer = release.assets?.find(asset => /^Vultures.of.Blackdawn-Setup-.*\.exe$/i.test(asset.name));
    if (!installer || !installer.browser_download_url?.startsWith(`https://github.com/${repository}/releases/download/`)) return;
    button.href = installer.browser_download_url;
    label.textContent = 'Download for Windows';
    document.querySelector('#release-version').textContent = ` · ${release.tag_name}`;
    note.textContent = `${installer.name} · ${Math.round(installer.size / 1024 / 1024)} MB · Hosted on GitHub Releases`;
  } catch { /* The Releases link remains usable if the API is unavailable. */ }
})();
