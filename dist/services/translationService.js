const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const DATA_PATH = path.join(__dirname, '../../data/translations.json');

const fileData = fs.readFileSync(DATA_PATH, 'utf8');
let translationsData = JSON.parse(fileData);
let translationsCount = translationsData.length;
let timeStart = new Date();

class TranslationsService {
    getTranslations() {
        const data = {};
        data.translations = _.reduce(translationsData, function(acc, element) {
            acc.push({
                id: element.id,
                key: element.key
            });
            return acc;
        }, []);
        data.count = translationsCount;
        return data;
    }

    getTranslationsById(id) {
        const translation = _.filter(translationsData, function(translation) {
            return translation.id == id;
        });
        return translation[0];
    }

    searchTranslations(text) {
        const data = {};
        data.translations = _.reduce(translationsData, function(acc, translation) {
            if (translation.key.match(text)) {
                acc.push({
                    id: translation.id,
                    key: translation.key
                });
            }
            return acc;
        }, []);

        return data;
    }

    createTranslation(data) {
        const newTranslation = {
            id: new Date() - timeStart,
            key: data.key,
            values: {
                ru: '',
                en: '',
                zn: '',
                hi: '',
                sp: '',
                pt: ''
            }
        };

        translationsData.unshift(newTranslation);

        fs.writeFileSync(DATA_PATH, JSON.stringify(translationsData), 'utf8');
        return newTranslation;
    }

    changeTranslation(id, data) {
        const translation = _.filter(translationsData, function(translation) {
            return translation.id == id;
        });
        if (!translation) return false;
        translation[0].values = data.values || translation[0].values;
        translation[0].key = data.key || translation[0].key;
        fs.writeFileSync(DATA_PATH, JSON.stringify(translationsData), 'utf8');
        return translation[0];
    }

    deleteTranslation(id) {
        const translation = _.filter(translationsData, function(translation) {
            return translation.id != id;
        });

        if (!translation) return false;
        translationsData = translation;
        fs.writeFileSync(DATA_PATH, JSON.stringify(translationsData), 'utf8');
        return true;
    }
}
module.exports = TranslationsService;
