# Vultures of Blackdawn website

A responsive, static launcher website. Plain HTML, CSS, and JavaScript; no build or server needed on GitHub Pages. Artwork comes from the Blackdawn launcher. The launcher showcase uses an actual window screenshot captured from the compiled Windows application.

## Preview locally

Run `python -m http.server 4173` in this folder, then visit http://localhost:4173. The download section honestly shows that a public release is not available until a repository is connected.

## Publish on GitHub Pages

1. Push this folder's contents to a GitHub repository with `main` as the default branch. Do not upload the Windows installer as a repository file.
2. In the repository, open **Settings → Pages → Source → Deploy from a branch**.
3. Select **main** and **/ (root)**, then save. `.nojekyll` keeps this a plain static site.
4. The completed deployment provides the website URL. All asset paths support repository subpaths and custom domains.

Connected repository: https://github.com/deadsots7-cmyk/Vultures-of-BlackDawn

Configured Pages address: https://deadsots7-cmyk.github.io/Vultures-of-BlackDawn/

An optional manual Actions workflow is included. To use it, switch Pages Source to **GitHub Actions**, then run **Deploy Blackdawn website**. This repository currently uses static branch publishing.

See [GitHub's Pages workflow documentation](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## Enable installer downloads

Create a GitHub Release (for example `v2.0.0`) and attach `Vultures of Blackdawn-Setup-2.0.0.exe` as a release asset. The workflow automatically connects the site to its repository. The download button finds the latest published release and matching Windows installer, without embedding a versioned URL. If GitHub's API is unavailable, it falls back to the Releases page.

If downloads live in another repository, set `repository: "YOUR-ACCOUNT/YOUR-REPOSITORY"` in `config.js`. There are no tokens or secrets in this site. Before a repository is configured, the download button takes visitors to the release availability message rather than a broken download.

The installer is built separately in `C:\Users\Administrator\Desktop\mmmmmm\EML-Template-main\release`. Keep executables in GitHub Releases, not in the site's Git history.

## Edit

- `index.html`: content and sections
- `styles.css`: colors, layout, responsive styles
- `app.js`: automatic release discovery
- `config.js`: optional release repository override
- `assets/`: optimized existing launcher artwork and icon

Google Fonts supplies Barlow / Barlow Condensed, with system-font fallbacks. The site uses no analytics, cookies, or accounts. Microsoft sign-in happens inside the launcher.
