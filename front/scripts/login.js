

/**
 * Login Frontend Logic
 * -----------------------------------------
 * Handles the login form submission from the frontend.
 * Sends user credentials to the backend API for validation.
 * If authentication is successful, stores basic session data
 * in localStorage and redirects the user to the home page.
 */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginform");

  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const user = document.getElementById("user").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!user || !password) {
      alert("Username and password are required");
      return;
    }

    try { 
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({username: user, password:password
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        alert(errorData.message || "Invalid credentials");
        return;
      }

      const data = await response.json();

      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("user", data.user.username);
      localStorage.setItem("role", data.user.role);

      window.location.href = "../index.html"; 

    } catch (error) {
      console.error("Login error", error);
      alert("Unable to connect to the server");
    }
  });
});



