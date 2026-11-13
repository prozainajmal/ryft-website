import { createContext, useContext, useEffect, useState } from 'react';
import saved from './release.json';

export const RELEASES_REPO = 'prozainajmal/ryft-releases';
export const LATEST_PAGE = `https://github.com/${RELEASES_REPO}/releases/latest`;

export interface ReleaseSummary { version: string; date: string; name: string }
export interface ReleaseInfo {
  version: string;
  date: string;
  /** Direct link to the installer (.exe). */
  url: string;
  /** Installer size in bytes. */
  size: number;
  releases: ReleaseSummary[];
}

interface GhAsset { name: string; size: number; browser_download_url: string }
interface GhRelease { tag_name: string; name: string | null; published_at: string; draft: boolean; prerelease: boolean; assets: GhAsset[] }

const clean = (tag: string) => tag.replace(/^v/, '');

function fromGitHub(list: GhRelease[]): ReleaseInfo | null {
  const published = list.filter((r) => !r.draft && !r.prerelease);
  const latest = published[0];
  const exe = latest?.assets.find((a) => /\.exe$/i.test(a.name));
  if (!latest || !exe) return null;
  return {
    version: clean(latest.tag_name),
    date: latest.published_at,
    url: exe.browser_download_url,
    size: exe.size,
    releases: published.slice(0, 3).map((r) => ({ version: clean(r.tag_name), date: r.published_at, name: r.name || r.tag_name })),
  };
}

/** Release info saved at build time, refreshed live from GitHub when the page opens. */
export function useLatestRelease(): ReleaseInfo {
  const [info, setInfo] = useState<ReleaseInfo>(saved as ReleaseInfo);
  useEffect(() => {
    const ctrl = new AbortController();
    fetch(`https://api.github.com/repos/${RELEASES_REPO}/releases?per_page=10`, { signal: ctrl.signal, headers: { Accept: 'application/vnd.github+json' } })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((list: GhRelease[]) => { const fresh = fromGitHub(list); if (fresh) setInfo(fresh); })
      .catch(() => { /* keep the saved info */ });
    return () => ctrl.abort();
  }, []);
  return info;
}

export const ReleaseContext = createContext<ReleaseInfo>(saved as ReleaseInfo);
export const useRelease = () => useContext(ReleaseContext);

/** Link for every Download button: the installer itself, or the releases page as a fallback. */
export const downloadHref = (r: ReleaseInfo) => r.url || LATEST_PAGE;

export const formatSize = (bytes: number) => (bytes > 0 ? `${Math.round(bytes / 1048576)} MB` : '');

export const formatDate = (iso: string) => {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};
