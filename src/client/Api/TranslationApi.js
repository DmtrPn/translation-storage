import axios from 'axios';

export class TranslationApi {
    static async getTranslationsList() {
        const res = await axios.get('/api/translations');

        return res.data;
    }

    static async getTranslationsById(id) {
        const res = await axios.get(`/api/translations/${id}`);

        return res.data;
    }

    static async searchTranslations(text, isField) {
        const requestUrl = `/api/translations/search?text=${text}` + (isField ? `&isField=${isField}` : '');
        const res = await axios.get(requestUrl);

        return res.data;
    }

    static async changeTranslation(id, key, values) {
        const res = await axios.put(`/api/translations/${id}`, {
            key,
            values
        });

        return res.data;
    }

    static async createTranslation(key) {
        const res = await axios.post('/api/translations/', {key});

        return res.data;
    }

    static async deleteTranslation(id) {
        const res = await axios.delete(`/api/translations/${id}`);

        return res.data;
    }
}
