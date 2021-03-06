const db = require('../../db/db');
const ObjectID = require('mongodb').ObjectID;

class TranslationsService {

    getTranslations(cb) {
        db.get().collection('translations').find({}, {values: 0}).toArray(
            function (err, docs) {
                cb(err, docs);
            }
        );
    }

    getTranslationsById(id, cb) {
        db.get().collection('translations').findOne({ _id: ObjectID(id)},
            function (err, docs) {
                cb(err, docs);
            });
    }

    searchTranslations(text, cb) {
        db.get().collection('translations').find({key: {$regex:text}}, {values: 0}).toArray(
            function (err, docs) {
                cb(err, docs);
            }
        );
    }

    searchTranslationsField(text, cb) {
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

    createTranslation(data, cb) {
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

    changeTranslation(id, data, cb) {
        db.get().collection('translations').updateOne(
            { _id: ObjectID(id)},
            data,
            function (err, result) {
                cb(err, result);
            }
        );
    }

    deleteTranslation(id, cb) {
        db.get().collection('translations').remove(
            { _id: ObjectID(id)},
            function (err, result) {
                cb(err, result);
            }
        );
    }
}

module.exports = TranslationsService;
