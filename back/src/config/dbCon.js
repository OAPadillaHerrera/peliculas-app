

/**
 * This file contains the configuration for connecting to the MongoDB database
 * using the Mongoose module. The `dbCon` function is asynchronous and handles
 * the connection using the provided URI from environment variables.
 * If the connection is successful, a message is logged to the console.
 * If the connection fails, the error is logged and the server process is terminated.
 */

const mongoose = require ("mongoose");

const dbCon = async () => {

  try {

      const uri = process.env.MONGODB_URI;

      if (!uri) {

        throw new Error ("MONGODB_URI is not defined in the .env file")
      
      }

    await mongoose.connect (uri);
    console.log ("Successfully connected to the MongoDB database.");

  } catch (error) {

    console.error ("Failed to connect to the MongoDB database:", error);
    process.exit (1); 

  }
  
};

module.exports =  dbCon;

