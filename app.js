import quotes from './quotes.js'; // Import your quotes data

const textElement = document.querySelector('.input_area');
const quoteElement = document.querySelector('.quote');
const timerElement = document.querySelector('.curr_time');
const wpmElement = document.querySelector('.curr_wpm');
const cpmElement = document.querySelector('.curr_cpm');
const accuracyElement = document.querySelector('.curr_accuracy');
const errorsElement = document.querySelector('.curr_errors');
const restartButton = document.querySelector('.restart_btn');
const themeSwitch = document.getElementById('slider');
const headerColor = document.querySelector('.header');

// Global variables
let startTime;
let elapsedTime = 0;
let typedChars = 0;
let correctChars = 0;
let incorrectChars = 0;
let isStarted = false;
let isDarkMode = false; // Initialize darkness based on user preference

// Difficulty level (default: Normal)
let difficulty = 'Normal';

// Load saved theme, if any
if (localStorage.getItem('theme')) {
  isDarkMode = localStorage.getItem('theme') === 'theme-dark';
  document.documentElement.classList.add(isDarkMode ? 'theme-dark' : 'theme-light');
}

// Event handlers

// Theme toggle
themeSwitch.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  document.documentElement.classList.toggle('theme-dark');
  localStorage.setItem('theme', isDarkMode ? 'theme-dark' : 'theme-light');
  if (isDarkMode) {
    headerColor.style.color = '#Fd1ddd'; // Adjust header color for dark mode
  } else {
    headerColor.style.color = 'var(--headercolor)'; // Reset header color to default
  }
});

// Start typing event
textElement.addEventListener('input', () => {
  if (!isStarted) {
    startTime = new Date();
    isStarted = true;
    updateTimer(); // Start timer
  }

  // Calculate typed characters, correct/incorrect, and accuracy
  const typedText = textElement.value;
  const actualText = quoteElement.textContent;
  const currentChar = typedText[typedChars];

  typedChars++;
  if (currentChar === actualText[typedChars - 1]) {
    correctChars++;
  } else {
    incorrectChars++;
  }

  // Update UI elements
  wpmElement.textContent = Math.round(correctChars / (elapsedTime / 60000));
  cpmElement.textContent = Math.round(typedChars / (elapsedTime / 60000));
  accuracyElement.textContent = Math.round((correctChars / typedChars) * 100);
  errorsElement.textContent = incorrectChars;
});

// Restart button
restartButton.addEventListener('click', () => {
  resetGame();
});

// Timer function
function updateTimer() {
  elapsedTime = new Date() - startTime;
  timerElement.textContent = formatTime(elapsedTime);

  // Update timer every 100 milliseconds
  if (isStarted) {
    setTimeout(updateTimer, 100);
  }
}

// Reset game
function resetGame() {
  isStarted = false;
  startTime = null;
  elapsedTime = 0;
  typedChars = 0;
  correctChars = 0;
  incorrectChars = 0;
  textElement.value = '';
  quoteElement.textContent = getRandomQuote(difficulty); // Get a new quote
  updateTimer();

  // Reset UI elements
  wpmElement.textContent = 0;
  cpmElement.textContent = 0;
  accuracyElement.textContent = 0;
  errorsElement.textContent = 0;
}

// Get a random quote based on difficulty
function getRandomQuote(difficulty) {
  const quoteArray = quotes[difficulty]; // Use the correct difficulty array
  const randomIndex = Math.floor(Math.random() * quoteArray.length);
  return quoteArray[randomIndex];
}

// Format time in minutes and seconds
function formatTime(timeInMs) {
  const minutes = Math.floor(timeInMs / 60000);
  const seconds = Math.floor((timeInMs %
