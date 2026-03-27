import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

/** Utility to generate language-specific links without hardcoding */
export function getRelativeLocaleUrl(lang: string, path: string) {
    const cleanPath = path.replace(/^\//, '');
    if (lang === 'es') {
        return `/${cleanPath}`;
    }
    return `/en/${cleanPath}`;
}
