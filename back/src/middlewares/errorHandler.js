

/**
 * Global Error Handler Middleware
 * -------------------------------
 * Catches and handles errors from all parts of the application.
 * 
 * - Logs error stack to the console.
 * - Returns a JSON response with appropriate HTTP status.
 * - Hides error details in production for security.
 * 
 * Intended to be mounted at the end of the middleware stack in server.js.
 */

const errorHandler = (err, req, res, next) => {

  console.error ("[ERROR]", err.stack || err);

  res.status (err.status || 500).json ({

    message: "Internal Server Error",
    error: process.env.NODE_ENV === "production" ? undefined : err.message,

  });

};

module.exports = errorHandler;

