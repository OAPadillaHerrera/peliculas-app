

/**
 * Auth Controller
 * ---------------
 * Handles authentication requests.
 */

const authService = require("../services/authService");

module.exports = {

  login: async (req, res) => {
    const { username, password } = req.body;

    const loggedUser = authService.login(username, password);

    if (!loggedUser) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    res.status(200).json({
      message: "Login successful",
      user: loggedUser
    });
  }
};
