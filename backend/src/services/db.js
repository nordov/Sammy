import db from '../config/keys';
import { MongoClient } from 'mongodb';

const mongodb = db.mongoURI;

export const initializeDbConnection = async () => {
    const client = await MongoClient.connect(mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export const getDbConnection = dbName => {
    const db = client.db('sammy');
    return db;
};