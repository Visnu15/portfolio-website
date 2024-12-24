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

// Select all the sections to observe
const sections = document.querySelectorAll('section');

// Create an IntersectionObserver instance
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the 'visible' class when the section is in view
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once it becomes visible
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Observe each section
sections.forEach(section => observer.observe(section));
