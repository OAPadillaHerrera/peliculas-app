

/**
 * Post Routes
 * -----------
 * Defines the route for handling post-related operations using Express Router.
 * 
 * Routes:
 * - GET / → Fetch all posts using postController.getAllPosts
 * 
 * Uses:
 * - asyncHandler to catch asynchronous errors and forward them to global error middleware.
 * 
 * This router is exported to be used in the main application router.
 */

const { Router } = require ("express"); 
const asyncHandler = require ("express-async-handler");
const postController = require ("../controllers/postController");
const postRouter = Router ();
postRouter.get ("/", asyncHandler (postController.getAllPosts));
module.exports = postRouter;

