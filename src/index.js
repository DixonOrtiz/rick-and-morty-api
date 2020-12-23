const express = require('express');
const expressConfig = require('./config/express');
const { PORT } = require('./config/env');
const { connect } = require('./helpers/mongo-connection');

const app = express();
expressConfig(app);

// Function that checks to connect to the db before the server starts listening
const runServer = async () => {
  await connect()
    .then((connectionMessage) => {
      // Succesful connection to database
      console.log(connectionMessage);

      app.listen(PORT, () => {
        console.log(`[rick-and-morty-api][server] Running at port ${PORT}`);
      });
    }) // Error connecting to database
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
};

runServer();
