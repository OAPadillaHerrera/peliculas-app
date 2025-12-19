

/**
 * Main application router.
 * 
 * Defines the following route groups:
 * - /api/users   → userRouter
 * - /api/posts   → postRouter
 * - /api/movies  → movieRouter
 * - /api/auth    → authRouter
 */

const {Router} = require ("express");
const userRouter = require ("./userRouter");
const postRouter = require ("./postRouter");
const movieRouter = require ("./movieRouter");
const authRouter = require ("./authRouter");
const router = Router ();
router.use ("/users", userRouter);
router.use ("/posts", postRouter);
router.use ("/movies", movieRouter); 
router.use ("/auth", authRouter);
module.exports = router;

