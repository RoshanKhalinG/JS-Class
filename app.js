const local = document.getElementById("local");
const timer_text = document.querySelector(".curr_time");
const first_row = document.getElementById("firstrow");
const level = document.getElementById("select");

const timeModes = {
  15: document.getElementById("fifteen"),
  30: document.getElementById("thirty"),
  60: document.getElementById("sixty"),
  120: document.getElementById("twomin"),
};





function setTheme(themeName) {
    localStorage.setItem("theme", themeName);
    document.documentElement.className = themeName;
  }
  
  // function to toggle between light and dark theme
  function toggleTheme() {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setheadercolor("Pink");
    } else {
      setTheme("theme-dark");
    }
  }