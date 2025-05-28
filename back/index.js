

/**
 * Entry point for the application.
 * - Loads environment variables.
 * - Connects to the database.
 * - Starts the server.
 */

require ("dotenv").config ();
const app = require ("./src/server");
const dbCon  = require ("./src/config/dbCon");
const PORT = process.env.PORT || 3000;

if (!process.env.PORT) {

  console.warn ("[WARN] PORT not set in .env, defaulting to 3000");

}

const getTimestamp = () => new Date ().toISOString ();


(async () => {

  try {

    await dbCon ();

    app.listen (PORT, () => {

      console.log (`[${getTimestamp ()}] Server listening on port ${PORT}`);

    });

  } catch (err) {

    console.error (`[${getTimestamp ()}] Database connection error:`, err);
    process.exit(1);

  }

}) ();

