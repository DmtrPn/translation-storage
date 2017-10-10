import axios from 'axios';

export default class ServerApi {
    static getTranslationsList() {
        return axios.get('/api/translations')
            .then(response => response.data);
    }

    static getTranslationsById(id) {
        return axios.get(`/api/translations/${id}`);
    }

    static searchTranslations(text, isField) {
        const requestUrl = `/api/translations/search?text=${text}` + (isField ? `&isField=${isField}` : '');
        return axios.get(requestUrl)
            .then(response => response.data);
    }

    static changeTranslation(id, key, values) {
        return axios.put(`/api/translations/${id}`, {
            key,
            values
        });
    }

    static createTranslation(key) {
        return axios.post('/api/translations/', {key});
    }

    static deleteTranslation(id) {
        return axios.delete(`/api/translations/${id}`);
    }
}
