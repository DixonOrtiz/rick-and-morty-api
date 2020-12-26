require('dotenv').config();

const PORT = process.env.PORT;
if (PORT === undefined) {
  console.error(
    '[rick-and-morty-api][error] No PORT environment variable in .env file'
  );
  process.exit(1);
}

const CHARACTERS_ENDPOINT = process.env.CHARACTERS_ENDPOINT;
if (CHARACTERS_ENDPOINT === undefined) {
  console.error(
    '[rick-and-morty-api][error] No CHARACTERS_ENDPOINT environment variable in .env file'
  );
  process.exit(1);
}

const DB_HOST = process.env.DB_HOST;
if (DB_HOST === undefined) {
  console.error(
    '[rick-and-morty-api][error] No DB_HOST environment variable in .env file'
  );
  process.exit(1);
}

const DB_PORT = process.env.DB_PORT;
if (DB_PORT === undefined) {
  console.error(
    '[rick-and-morty-api][error] No DB_PORT environment variable in .env file'
  );
  process.exit(1);
}

const DB_NAME = process.env.DB_NAME;
if (DB_NAME === undefined) {
  console.error(
    '[rick-and-morty-api][error] No DB_NAME environment variable in .env file'
  );
  process.exit(1);
}

module.exports = {
  PORT,
  CHARACTERS_ENDPOINT,
  DB_HOST,
  DB_PORT,
  DB_NAME,
};
