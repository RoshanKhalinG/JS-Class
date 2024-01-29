// Get references to HTML elements
const local = document.getElementById("local");
const timer_text = document.querySelector(".curr_time");
const first_row = document.getElementById("firstrow");
const level = document.getElementById("select");

// Time limit buttons
const timeModes = {
  15: document.getElementById("fifteen"),
  30: document.getElementById("thirty"),
  60: document.getElementById("sixty"),
  120: document.getElementById("twomin"),
};

// Current state of wpmtest
const current = {
  started: false,
  username: localStorage.getItem("username"),
  timeLimit: +localStorage.getItem("timelimit") || 60,
  difficulty: localStorage.getItem("difficulty") || "Medium",
};

function setTimeLimit(time) {
  if (!Object.keys(timeModes).includes(`${time}`)) {
    console.error(`Time limit ${time}s not available.`);
    return;
  }
  localStorage.setItem("timelimit", time);
  current.timeLimit = localStorage.getItem("timelimit");

  timer_text.innerText = current.timeLimit + "s";

  for (t in timeModes) {
    timeModes[t].style.color = t == time ? "var(--timemode)" : "white";
  }
}

function setGameDifficulty(difficulty) {
  localStorage.setItem("difficulty", difficulty);
  current.difficulty = difficulty;
  first_row.innerText = "Currently " + difficulty;
}

// Initializing
setTimeLimit(current.timeLimit);
setGameDifficulty(current.difficulty);

if (!current.username) {
  current.username = prompt("enter username");
  localStorage.setItem("username", current.username);
}
local.innerText = current.username;

// ...

// Event listeners for time limit buttons
timeModes[15].addEventListener("click", () => setTimeLimit(15));
timeModes[30].addEventListener("click", () => setTimeLimit(30));
timeModes[60].addEventListener("click", () => setTimeLimit(60));
timeModes[120].addEventListener("click", () => setTimeLimit(120));

// Event listener for the dropdown level button
level.addEventListener("click", () => {
  // Your logic for handling level selection goes here
});

// ...

// Event listener for the restart button
document.querySelector(".restart_btn").addEventListener("click", () => resetValues());

// Event listener for the start of the game
document.querySelector(".input_area").addEventListener("focus", () => startGame());

// ...

// Additional functions and logic can be added as needed

