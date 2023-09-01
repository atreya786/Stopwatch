let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");
let timestampText = document.querySelector(".timestamp");

let msec = 0;
let sec = 0;
let min = 0;

let time = null;

startBtn.addEventListener("click", () => {
  if (time !== null) {
    clearInterval(time);
  }
  time = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(time);
  displayTimestamp(); // Call function to display timestamp using the current stopwatch time
});

resetBtn.addEventListener("click", () => {
  clearInterval(time);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = sec = min = 0;
  timestampText.textContent = ''; // Clear the timestamp when resetting
});

function startTimer() {
  msec++;
  if (msec === 100) {
    msec = 0;
    sec++;
    if (sec === 60) {
      sec = 0;
      min++;
    }
  }

  let miliSecond = msec < 10 ? `0${msec}` : msec;
  let second = sec < 10 ? `0${sec}` : sec;
  let minute = min < 10 ? `0${min}` : min;

  timerDisplay.innerHTML = `${minute} : ${second} : ${miliSecond}`;
}

function displayTimestamp() {
  let currentStopwatchTime = timerDisplay.textContent;
  let timestampValue = `Stopped at ${currentStopwatchTime}`;
  timestampText.textContent = timestampValue;
}
