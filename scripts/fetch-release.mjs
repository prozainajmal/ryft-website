// Runs before every build: reads the latest RYFT releases from the public
// prozainajmal/ryft-releases repo and saves them to src/release.json. The page
// shows these values right away and then refreshes them live from GitHub, so the
// download button is correct even if the GitHub API can't be reached.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = 'prozainajmal/ryft-releases';
const out = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'src', 'release.json');

const headers = { Accept: 'application/vnd.github+json', 'User-Agent': 'ryft-website-build' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

try {
  const res = await fetch(`https://api.github.com/repos/${REPO}/releases?per_page=10`, { headers });
  if (!res.ok) throw new Error(`GitHub answered ${res.status}`);
  const list = (await res.json()).filter((r) => !r.draft && !r.prerelease);
  const latest = list[0];
  const exe = latest?.assets.find((a) => /\.exe$/i.test(a.name));
  if (!latest || !exe) throw new Error('no published release with an installer');
  const data = {
    version: latest.tag_name.replace(/^v/, ''),
    date: latest.published_at,
    url: exe.browser_download_url,
    size: exe.size,
    releases: list.slice(0, 3).map((r) => ({ version: r.tag_name.replace(/^v/, ''), date: r.published_at, name: r.name || r.tag_name })),
  };
  fs.writeFileSync(out, JSON.stringify(data, null, 2) + '\n');
  console.log(`[fetch-release] latest is v${data.version} (${exe.name})`);
} catch (err) {
  if (fs.existsSync(out)) {
    console.warn(`[fetch-release] could not reach GitHub (${err.message}); keeping the saved release info.`);
  } else {
    throw err;
  }
}
