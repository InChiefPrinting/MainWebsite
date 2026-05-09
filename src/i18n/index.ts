export { LOCALES, LANG_NAMES, RTL_LANGS, ui } from './ui';
export type { Lang, UIStrings } from './ui';
import { LOCALES, ui } from './ui';
import type { Lang } from './ui';

/** Return the translation object for a given locale (falls back to 'en'). */
export function t(lang: string): typeof ui['en'] {
  return ui[(lang as Lang) in ui ? (lang as Lang) : 'en'];
}

/** getStaticPaths for [lang] dynamic routes — returns all supported locales. */
export function getLangStaticPaths() {
  return LOCALES.map((lang) => ({ params: { lang } }));
}

/** Build a localized internal URL for this site (with /MainWebsite/ base). */
export function url(lang: Lang, path: string): string {
  const base = '/MainWebsite';
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}/${lang}${clean === '/' ? '' : clean}`;
}

/** Swap the locale segment in the current pathname. */
export function switchLangUrl(currentPath: string, newLang: Lang): string {
  // currentPath looks like /MainWebsite/en/about or /MainWebsite/zh/
  const base = '/MainWebsite';
  const withoutBase = currentPath.replace(base, '') || '/';
  // strip leading /lang segment
  const parts = withoutBase.split('/').filter(Boolean); // ['en','about']
  const rest = parts.slice(1).join('/'); // 'about'
  return `${base}/${newLang}${rest ? '/' + rest : ''}`;
}
