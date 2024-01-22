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