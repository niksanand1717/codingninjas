let timer;
let isRunning = false;
let startTime;
let elapsedTime = 0;
var trackedTime = "";

const display = document.getElementById("display");
const trackDisplay = document.querySelector(".track-container");
const trackBox = document.querySelector(".track-box");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const trackButton = document.getElementById("track");

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
trackButton.addEventListener("click", trackTimer);

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startTime = Date.now() - elapsedTime;
    timer = setInterval(updateDisplay, 1000);
  }
}

function stopTimer() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
  }
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  elapsedTime = 0;
  display.textContent = "00:00:00";
}

function trackTimer() {
  trackDisplay.style.display = "block";
  // trackDisplay.innerHTML = trackedTime;
  const tempDiv = document.createElement("div");
  tempDiv.className = "track-container";
  // tempDiv.classList.add = "track-container";
  tempDiv.innerHTML = trackedTime;
  trackBox.insertAdjacentElement("beforebegin", tempDiv);
}

function updateDisplay() {
  elapsedTime = Date.now() - startTime;
  const totalSeconds = Math.floor(elapsedTime / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  trackedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number.toString().padStart(2, "0");
}
