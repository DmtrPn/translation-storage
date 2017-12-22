const ObjectID = require('mongodb').ObjectID;

import {getCollection} from '../../../db/mongodb';

export class TranslationService {
    static getTranslations(cb) {
        const db = getCollection('test');
        db.get().collection('translations').find({}, {values: 0}).toArray(
            function (err, docs) {
                cb(err, docs);
            }
        );
    }

    static getTranslationsById(id, cb) {
        const db = getCollection('test');
        db.get().collection('translations').findOne({ _id: ObjectID(id)},
            function (err, docs) {
                cb(err, docs);
            });
    }

    static searchTranslations(text, cb) {
        const db = getCollection('test');
        db.get().collection('translations').find({key: {$regex:text}}, {values: 0}).toArray(
            function (err, docs) {
                cb(err, docs);
            }
        );
    }

    static searchTranslationsField(text, cb) {
        const db = getCollection('test');
        db.get().collection('translations').find(
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
            {values: 0}).toArray(
            function (err, docs) {
                cb(err, docs);
            }
        );
    }

    static createTranslation(data, cb) {
        const db = getCollection('test');
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

        db.get().collection('translations').insertOne(newTranslation,
            function (err, result) {
                cb(err, result, newTranslation);
            }
        );
    }

    static changeTranslation(id, data, cb) {
        const db = getCollection('test');
        db.get().collection('translations').updateOne(
            { _id: ObjectID(id)},
            data,
            function (err, result) {
                cb(err, result);
            }
        );
    }


    static deleteTranslation(id, cb) {
        const db = getCollection('test');
        db.get().collection('translations').remove(
            { _id: ObjectID(id)},
            function (err, result) {
                cb(err, result);
            }
        );
    }
}
