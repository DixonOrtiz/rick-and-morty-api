const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME } = require('../config/env');

const dbUrl = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

const connect = async () => {
  try {
    const db = await mongoose.connect(dbUrl, connectionParams);
    console.log(db);
    return '[rick-and-morty-api][db] successful connection to the database';
  } catch (error) {
    throw new Error(
      `[rick-and-morty-api][db][error] could not connect to the database \n${error}`
    );
  }
};

module.exports = {
  connect,
};
