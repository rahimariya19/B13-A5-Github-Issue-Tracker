const API = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

let allIssues = [];
let currentFilter = "all";

// LOGIN
function login() {
  if (username.value === "admin" && password.value === "admin123") {
    loginPage.classList.add("hidden");
    mainPage.classList.remove("hidden");
    loadIssues();
  } else {
    alert("Wrong credentials");
  }
}