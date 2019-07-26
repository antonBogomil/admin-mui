import langs from '../../settings/langs';
export const DEFAULT_LOCALE_CODE = 'en';
export const LOCALE_CODES = langs.map((lang) => (lang.code)).join("|");
