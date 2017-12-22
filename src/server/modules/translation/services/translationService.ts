const ObjectID = require('mongodb').ObjectID;

import { getCollection } from '../../../db/mongodb';

export class TranslationService {
    static async getTranslations() {
        const db = getCollection('translations');
        return await db.find({}, {values: 0}).toArray();
    }

    static async getTranslationsById(id) {
        const db = getCollection('translations');
        return await db.findOne({ _id: ObjectID(id)});
    }

    static async searchTranslations(text) {
        const db = getCollection('translations');
        return await db.find({key: {$regex:text}}, {values: 0}).toArray();
    }

    static async searchTranslationsField(text) {
        const db = getCollection('translations');
        return await db.find(
            {
                $or: [
                    {
                        'values.ru': {$regex:text}
                    },
                    {
                        'values.en': {$regex:text}
                    },
                    {
                        'values.zn': {$regex:text}
                    },
                    {
                        'values.hi': {$regex:text}
                    },
                    {
                        'values.sp': {$regex:text}
                    },
                    {
                        'values.pt': {$regex:text}
                    }
                ]

            },
            {values: 0}).toArray();
    }

    static async createTranslation(data) {
        const db = getCollection('translations');
        const newTranslation = {
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

        return await db.insertOne(newTranslation);
    }

    static async changeTranslation(id, data) {
        const db = getCollection('translations');
        return await db.updateOne(
            { _id: ObjectID(id)},
            data
        );
    }


    static async deleteTranslation(id) {
        const db = getCollection('translations');
        return await db.remove(
            { _id: ObjectID(id)}
        );
    }
}
