let timerDisplay = document.querySelector(".timerDisplay");
let stopBtn = document.getElementById("stopBtn");
let startBtn = document.getElementById("startBtn");
let resetBtn = document.getElementById("resetBtn");

let msec = 00;
let sec = 00;
let min = 00;

let time = null;

startBtn.addEventListener("click", () => {
  if (time !== null) {
    clearInterval(time);
  }
  time = setInterval(startTimer, 10);
});

stopBtn.addEventListener("click", () => {
  clearInterval(time);
});

resetBtn.addEventListener("click", () => {
  clearInterval(time);
  timerDisplay.innerHTML = `00 : 00 : 00`;
  msec = sec = min = 00;
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

  timerDisplay.innerHTML = `${minute} : ${second} : ${miliSecond}`
}
