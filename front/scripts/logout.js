

/**
 * Logout Logic
 * ------------
 * Clears session data and redirects user to login page.
 */

document.addEventListener("DOMContentLoaded", () => {
  const logoutBtn = document.getElementById("logoutBtn");

  if (!logoutBtn) return;

  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user");
    localStorage.removeItem("role");

    window.location.href = "/pages/login.html";
  });
});
