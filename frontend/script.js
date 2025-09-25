const API = "http://localhost:5000/api/auth";

// Register
async function register() {
  const username = document.getElementById("regUser").value;
  const password = document.getElementById("regPass").value;

  const res = await fetch(`${API}/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  document.getElementById("message").innerText = data.message || data.error;
}

// Login
async function login() {
  const username = document.getElementById("logUser").value;
  const password = document.getElementById("logPass").value;

  const res = await fetch(`${API}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  const data = await res.json();
  if (data.token) {
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.username);
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("message").innerText = data.error;
  }
}

