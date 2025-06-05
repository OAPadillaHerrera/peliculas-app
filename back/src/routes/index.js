

/**
 * Main application router.
 * 
 * Defines the following route groups:
 * - /api/users   → userRouter
 * - /api/posts   → postRouter
 * - /api/movies  → movieRouter
 */

const {Router} = require ("express");
const userRouter = require ("./userRouter");
const postRouter = require ("./postRouter");
const movieRouter = require ("./movieRouter");
const router = Router ();
router.use ("/users", userRouter);
router.use ("/posts", postRouter);
router.use ("/movies", movieRouter); 
module.exports = router;

