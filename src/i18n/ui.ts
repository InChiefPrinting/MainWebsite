export const LOCALES = ['en', 'zh', 'fr', 'ar', 'es', 'it', 'ru', 'de', 'ko', 'ja', 'id', 'pt', 'nl', 'pl', 'tr', 'cs', 'hu', 'ro', 'el', 'sv', 'da', 'no', 'fi', 'uk', 'vi', 'ms', 'th', 'hi', 'bn', 'ur', 'fa', 'he', 'fil', 'sw'] as const;
export type Lang = typeof LOCALES[number];

export const RTL_LANGS = new Set<Lang>(['ar', 'ur', 'fa', 'he']);

export const LANG_NAMES: Record<Lang, string> = {
  en: 'English',
  zh: '中文',
  fr: 'Français',
  ar: 'العربية',
  es: 'Español',
  it: 'Italiano',
  ru: 'Русский',
  de: 'Deutsch',
  ko: '한국어',
  ja: '日本語',
  id: 'Bahasa Indonesia',
  pt: 'Português',
  nl: 'Nederlands',
  pl: 'Polski',
  tr: 'Türkçe',
  cs: 'Čeština',
  hu: 'Magyar',
  ro: 'Română',
  el: 'Ελληνικά',
  sv: 'Svenska',
  da: 'Dansk',
  no: 'Norsk',
  fi: 'Suomi',
  uk: 'Українська',
  vi: 'Tiếng Việt',
  ms: 'Melayu',
  th: 'ไทย',
  hi: 'हिन्दी',
  bn: 'বাংলা',
  ur: 'اردو',
  fa: 'فارسی',
  he: 'עברית',
  fil: 'Filipino',
  sw: 'Kiswahili',
};

export type { UIStrings } from './types';

import type { UIStrings } from './types';
import en from './locales/en';
import zh from './locales/zh';
import fr from './locales/fr';
import ar from './locales/ar';
import es from './locales/es';
import it from './locales/it';
import ru from './locales/ru';
import de from './locales/de';
import ko from './locales/ko';
import ja from './locales/ja';
import id_ from './locales/id';
import pt from './locales/pt';
import nl from './locales/nl';
import pl from './locales/pl';
import tr from './locales/tr';
import cs from './locales/cs';
import hu from './locales/hu';
import ro from './locales/ro';
import el from './locales/el';
import sv from './locales/sv';
import da from './locales/da';
import no from './locales/no';
import fi from './locales/fi';
import uk from './locales/uk';
import vi from './locales/vi';
import ms from './locales/ms';
import th from './locales/th';
import hi from './locales/hi';
import bn from './locales/bn';
import ur from './locales/ur';
import fa from './locales/fa';
import he from './locales/he';
import fil from './locales/fil';
import sw from './locales/sw';

export const ui: Record<Lang, UIStrings> = {
  en, zh, fr, ar, es, it, ru, de, ko, ja, id: id_, pt, nl, pl, tr, cs, hu, ro, el, sv, da, no, fi, uk, vi, ms, th, hi, bn, ur, fa, he, fil, sw,
};
