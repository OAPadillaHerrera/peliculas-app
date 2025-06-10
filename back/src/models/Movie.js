


/**
 * Defines the `Movie` model for MongoDB using Mongoose.
 * The schema includes fields such as title, year, director, duration,
 * genre, rating, and poster. This model is used to interact with the
 * movies collection in the database.
 */

const mongoose = require ("mongoose");

const movieSchema = new mongoose.Schema (

  {

    title: {

      type: String,
      required: true,
      trim: true,

    },

    year: {

      type: Number,
      required: true,
      min: 1888, 

    },

    director: {

      type: String,
      required: true,
      trim: true,

    },

    duration: {

      type: String,
      required: true,

    },

    genre: {

      type: [String],
      required: true,
      validate: genre => Array.isArray(genre) && genre.length > 0,

    },

    rate: {

      type: Number,
      required: true,
      min: 0,
      max: 10,

    },

    poster: {

      type: String,
      required: true,
      trim: true,

    },

  },

  {

    timestamps: true, 

  }

);

const Movie = mongoose.model ("Movie", movieSchema);

module.exports = Movie;
