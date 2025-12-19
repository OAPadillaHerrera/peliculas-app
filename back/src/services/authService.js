

/**
 * Auth Service
 * ------------
 * Handles authentication logic.
 * Uses in-memory users (no database).
 */

const USERS = [
  {
    username: "admin",
    password: "1234",
    role: "admin"
  }
];

const login = (username, password) => {
  const user = USERS.find(
    u => u.username === username && u.password === password
  );

  if (!user) return null;

  return {
    username: user.username,
    role: user.role
  };
};

module.exports = {
  login
};
