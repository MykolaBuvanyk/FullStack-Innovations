export const i18n = {
  defaultLocale: 'uk',
  locales: [
    'uk',
    'ru',
    'en',
    'ja',
    'hi',
    'zh',
    'pt',
    'bg',
    'el',
    'pl',
    'cs',
    'de',
    'it',
    'sv',
    'nl',
    'lb',
    'fr',
    'es',
    'ga',
    'no',
  ],
} as const;

export type Locale = (typeof i18n)['locales'][number];