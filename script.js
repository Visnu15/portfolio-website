const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check for saved user preference and apply it
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    toggleButton.textContent = savedTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    const currentTheme = body.getAttribute("data-theme") === "dark" ? "light" : "dark";
    body.setAttribute("data-theme", currentTheme);
    toggleButton.textContent = currentTheme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
    localStorage.setItem("theme", currentTheme); // Save user preference
});
