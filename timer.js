// Variables to track time and the timer state
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let intervalId = null;
let isRunning = false;

// Get references to the HTML elements
const timeDisplay = document.getElementById('time');
const startButton = document.querySelector('.buttons button:nth-child(1)');
const stopButton = document.querySelector('.buttons button:nth-child(2)');
const resetButton = document.querySelector('.buttons button:nth-child(3)');

// Function to update the time display
function updateTime() {
  milliseconds += 10;

  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;

    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  // Format the time with leading zeros
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');
  const formattedMilliseconds = String(Math.floor(milliseconds / 10)).padStart(2, '0');

  // Update the display
  timeDisplay.textContent = `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
}

// Function to start the timer
function startTimer() {
  if (!isRunning) {
    // Start the timer by calling the updateTime function every 10 milliseconds
    intervalId = setInterval(updateTime, 10);
    isRunning = true;
  }
}

// Function to stop the timer
function stopTimer() {
  if (isRunning) {
    // Stop the timer by clearing the interval
    clearInterval(intervalId);
    isRunning = false;
  }
}

// Function to reset the timer
function resetTimer() {
  // Stop the timer first
  stopTimer();

  // Reset all time variables to 0
  milliseconds = 0;
  seconds = 0;
  minutes = 0;

  // Reset the display to 00:00:00
  timeDisplay.textContent = '00:00:00';
}

// Add event listeners to the buttons
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);
