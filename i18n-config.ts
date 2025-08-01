import { LanguagesEnum } from './interfaces';

export const i18n = {
  defaultLocale: 'hy',
  locales: ['hy', 'en'] as LanguagesEnum[],
} as const;

export type Locale = (typeof i18n)['locales'][number];
