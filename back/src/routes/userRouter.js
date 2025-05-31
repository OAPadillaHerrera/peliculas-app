

/**
 * User Routes
 * -----------
 * Defines the route for handling user-related operations using Express Router.
 * 
 * Routes:
 * - GET / → Fetch all users using userController.getAllUsers
 * 
 * Currently serves as a placeholder for future user management features.
 */

const { Router } = require ("express");
const asyncHandler = require ("express-async-handler");

const userController = require ("../controllers/userController");

const userRouter = Router ();

userRouter.get ("/", asyncHandler (userController.getAllUsers));

module.exports = userRouter;
