// Set the initial theme to dark if not already set
if (!localStorage.getItem("theme")) {
  setTheme("theme-dark");
}

// Function to set the theme
function setTheme(themeName) {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
  setHeaderColor(themeName); // Update header color based on the theme
  setTextareaStyle(themeName); // Update textarea styles based on the theme

  // Update font color based on the theme
  document.body.style.color = themeName === "theme-dark" ? "#ffffff" : "#333333"; // Set font color for light and dark themes
}

// Function to set header color
function setHeaderColor(themeName) {
  const headerColor = themeName === "theme-dark" ? "Black" : "Pink"; // Change this to your desired colors
  document.getElementById("header").style.backgroundColor = headerColor; // Adjust to your header element's ID
}

// Function to set textarea styles
function setTextareaStyle(themeName) {
  const textarea = document.getElementById("myTextarea"); // Change to your textarea's ID
  if (themeName === "theme-dark") {
      textarea.style.backgroundColor = "#333333"; // Dark background
      textarea.style.color = "#ffffff"; // Light text color
      textarea.style.borderColor = "#444"; // Dark border color
  } else {
      textarea.style.backgroundColor = "#ffffff"; // Light background
      textarea.style.color = "#333333"; // Dark text color
      textarea.style.borderColor = "#ccc"; // Light border color
  }
}

// Function to toggle between light and dark theme
function toggleTheme() {
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "theme-dark") {
      setTheme("theme-light");
  } else {
      setTheme("theme-dark");
  }
}

// Initialize the theme on page load
(function () {
  const savedTheme = localStorage.getItem("theme") || "theme-dark"; // Default to dark theme
  setTheme(savedTheme);
})();
