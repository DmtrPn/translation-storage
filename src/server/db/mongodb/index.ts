import { MongoClient } from './db';
// import * as mongodb from 'mongodb';
const state = {
    db: null
};

const DBConfig = {
    port: 27017,
    path: 'mongodb://localhost',
    name: 'translations'
};

export const connect = () => MongoClient.connect(`${DBConfig.path}:${DBConfig.port}/${DBConfig.name}`)
    .then((db) => {
        // mongodb.Logger.setLevel('debug');
        console.log(`Connect to db ${DBConfig.name}`);
        state.db = db;
    });

export const getCollection = (collectionName) => state.db.collection(collectionName);