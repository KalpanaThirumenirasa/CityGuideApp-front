// src/services/translateService.ts
import { translate } from '@vitalets/google-translate-api';


export const translateText = async () => {
  try {
    const { text } = await translate('Привет мир');

console.log(text);
    return text;
    // const res = await translate("welcome", { to: "nl" });
    // console.log('Translating text result:', res); // Added logging for verification
    // return {
    //   translatedText: res.text,
    //   detectedLanguage: res.from.language.iso,
    // };
  } catch (error) {
    console.error('Error translating text:', error);
    throw new Error('Translation failed');
  }
};
