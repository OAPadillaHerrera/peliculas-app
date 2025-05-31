

/**
 * User Controller
 * ---------------
 * Handles the GET request for retrieving users.
 * 
 * - getAllUsers: Placeholder function that responds with a message indicating 
 *   the endpoint is ready for future implementation.
 * 
 * Can later be connected to a service or database.
 */

module.exports = {

  getAllUsers: async (req, res) => {

    res.status (200).json ({ message: "Users endpoint ready for future implementation" });

  },
  
};

