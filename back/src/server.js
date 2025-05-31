

/**
 * Express server configuration
 * ----------------------------
 * - Uses morgan for request logging.
 * - Enables CORS for cross-origin requests.
 * - Parses incoming JSON requests.
 * - Mounts application routes under /api.
 * - Applies global error handling middleware from middlewares/errorHandler.
 */

const express = require ("express");
const morgan = require ("morgan");
const cors = require ("cors");
const router = require ("./routes");
const errorHandler = require("./middlewares/errorHandler");
const app = express ();
app.use (morgan ("dev"));
app.use (cors ());
app.use (express.json ());

app.get ("/", (req, res) => {

    res.json ({ message: "Movies API is running" });

});

app.use ("/api", router);
app.use(errorHandler);
module.exports = app;
