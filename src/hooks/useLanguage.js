import { useParams } from 'react-router-dom';
import en from '../locales/en.json';
import ta from '../locales/ta.json';

const translations = { en, ta };

export const useLanguage = () => {
  const { lang } = useParams();
  // Fallback to English if the lang parameter is invalid
  const t = translations[lang] || translations.en;
  return { t, lang };
};