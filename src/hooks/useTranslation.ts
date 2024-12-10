import { translations } from '../data/translations';
import { Language } from '../types/game';

export function useTranslation(language: Language) {
  return {
    t: (key: string) => {
      const keys = key.split('.');
      let value: any = translations[language];
      
      for (const k of keys) {
        value = value[k];
      }
      
      return value || key;
    }
  };
}