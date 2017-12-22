import { Promise } from 'bluebird';
import * as mongodb from 'mongodb';

export const MongoClient = Promise.promisifyAll(mongodb).MongoClient;
