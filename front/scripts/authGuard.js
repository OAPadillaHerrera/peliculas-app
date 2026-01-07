

/**
 * Auth Guard (Frontend)
 * ---------------------
 * Checks if the user is authenticated before allowing access
 * to protected pages.
 *
 * Authentication is determined by the presence of data
 * in localStorage.
 */

document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (!isLoggedIn) {
    window.location.href = "/pages/login.html";
  }
});
