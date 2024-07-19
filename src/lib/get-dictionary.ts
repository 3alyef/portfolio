import 'server-only'
import type { Locale } from '@/i18n'

// Enumeramos todos os dicionários aqui para melhor suporte a linting e typescript
// Também obtemos a importação padrão para tipos
const dictionaries = {
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
  pt: () => import('@/dictionaries/pt.json').then((module) => module.default),
  he: () => import('@/dictionaries/he.json').then((module) => module.default),
  es: () => import('@/dictionaries/es.json').then((module) => module.default),
  ar: () => import('@/dictionaries/ar.json').then((module) => module.default),
  da: () => import('@/dictionaries/da.json').then((module) => module.default),
  de: () => import('@/dictionaries/de.json').then((module) => module.default),
  fr: () => import('@/dictionaries/fr.json').then((module) => module.default),
  ga: () => import('@/dictionaries/ga.json').then((module) => module.default),
  it: () => import('@/dictionaries/it.json').then((module) => module.default),
  nl: () => import('@/dictionaries/nl.json').then((module) => module.default),
  ru: () => import('@/dictionaries/ru.json').then((module) => module.default),
  tr: () => import('@/dictionaries/tr.json').then((module) => module.default),
  zh: () => import('@/dictionaries/zh.json').then((module) => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()