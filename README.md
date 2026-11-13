# RYFT website

Landing page for [RYFT](https://prozainajmal.github.io/ryft-website/), the Valorant companion app for Windows. Built with React + Vite and hosted on GitHub Pages.

## How the download button stays current

- Every **Download** button points straight at the installer (`RYFT-Setup-<version>.exe`) of the latest release in [prozainajmal/ryft-releases](https://github.com/prozainajmal/ryft-releases/releases).
- `scripts/fetch-release.mjs` saves the latest release info to `src/release.json` on every build, and the page refreshes it live from the GitHub API when it opens. A new release shows up on the site right away, with no redeploy needed.
- RYFT's release script also triggers this repo's **Deploy website** workflow, so the saved info is rebuilt too. A daily scheduled run is the safety net.

To add release notes for a new version, add an entry to `RELEASE_NOTES` in `src/data.ts`. Versions without one show their GitHub release name.

## Develop

```bash
npm install
npm run dev      # http://localhost:5173/ryft-website/
npm run build    # output in dist/
```

Pushing to `main` deploys the site.

RYFT isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing Riot Games properties.
