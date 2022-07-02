import db from '../config/keys';
import { MongoClient } from 'mongodb';

const mongodb = db.mongoURI;
let client;

export const initializeDbConnection = async () => {
    client = await MongoClient.connect(mongodb, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export const getDbConnection = () => {
    const db = client.db('sammy');
    return db;
};