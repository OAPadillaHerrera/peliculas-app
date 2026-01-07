

/**
 * Main application router.
 *
 * Defines the following route groups:
 * - /api/auth    → authRouter (login / logout simulation)
 * - /api/movies  → movieRouter (movies listing and creation)
 */

const {Router} = require ("express");

const movieRouter = require ("./movieRouter");
const authRouter = require ("./authRouter");

const router = Router ();

router.use ("/movies", movieRouter); 
router.use ("/auth", authRouter);

module.exports = router;

