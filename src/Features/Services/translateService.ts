import axios from 'axios';

const API_KEY = 'pdct.1.1.20240703T053200Z.0f4010bbbf64c82a.4a8eda05126026ae95da99fe57f5541105de6b1d';  // Replace with your actual API key
const URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

export const translateText = async () => {
  try {
    const response = await axios.post(URL, null, {
      params: {
        key: API_KEY,
        text: 'Привет мир',
        lang: 'en',
      },
    });

    if (response.status !== 200) {
      throw new Error(`API response status code: ${response.status}`);
    }

    const translatedText = response.data.text[0];
    console.log(translatedText);
    return translatedText;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 403) {
        console.error('Error translating text: Forbidden (403). Please check your API key and permissions.');
      } else if (error.response?.status === 401) {
        console.error('Error translating text: Unauthorized (401). Please check your API key.');
      } else if (error.response?.status === 429) {
        console.error('Error translating text: Too Many Requests (429). You have exceeded your quota.');
      } else {
        console.error('Error translating text:', error.response?.data || error.message);
      }
    } else {
      console.error('Unexpected error:', error);
    }
    throw new Error('Translation failed');
  }
};
