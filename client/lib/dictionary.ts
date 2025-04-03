import 'server-only';
import type { Locale } from '@/i18n.config';

const dictionaries = {
  uk: () => import('@/dictionaries/uk.json').then((module) => module.default),
  // ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
  // en: () => import('@/dictionaries/en.json').then((module) => module.default),
  // ja: () => import('@/dictionaries/ja.json').then((module) => module.default),
  // hi: () => import('@/dictionaries/hi.json').then((module) => module.default),
  // zh: () => import('@/dictionaries/zh.json').then((module) => module.default),
  // pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
  // bg: () => import('@/dictionaries/bg.json').then((module) => module.default),
  // el: () => import('@/dictionaries/el.json').then((module) => module.default),
  // pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
  // cs: () => import('@/dictionaries/cs.json').then((module) => module.default),
  // de: () => import('@/dictionaries/de.json').then((module) => module.default),
  // it: () => import('@/dictionaries/it.json').then((module) => module.default),
  // sv: () => import('@/dictionaries/sv.json').then((module) => module.default),
  // nl: () => import('@/dictionaries/nl.json').then((module) => module.default),
  // lb: () => import('@/dictionaries/lb.json').then((module) => module.default),
  // fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  // es: () => import('@/dictionaries/es.json').then((module) => module.default),
  // ga: () => import('@/dictionaries/ga.json').then((module) => module.default),
  // no: () => import('@/dictionaries/no.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries.uk();