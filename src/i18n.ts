import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../public/locales/en/translation.json';
import translationUK from '../public/locales/uk/translation.json';

const resources = {
	en: {
		translation: translationEN,
	},
	uk: {
		translation: translationUK,
	},
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'uk',
		debug: true,

		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
