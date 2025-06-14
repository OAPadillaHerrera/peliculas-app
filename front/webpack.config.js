

/**
 * Webpack Configuration
 * ---------------------
 * This configuration sets up Webpack in development mode.
 * - Entry point: './scripts/index.js'
 * - Output: bundles the compiled code into 'public/bundle.js'
 * - Uses Node's 'path' module to resolve the output directory path.
 */

const path = require ('path');

module.exports = {

  mode: 'development',
  entry: './scripts/index.js',
  output: {

    path: path.resolve (__dirname, 'public'),
    filename: 'bundle.js'

  }

};

