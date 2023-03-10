const btnPlay = document.querySelector(".btnPlay");
const btnPause = document.querySelector(".btnPause");
const btnStopwatch = document.querySelector(".btnStopwatch");
const btnStop = document.querySelector(".btnStop");
const btnMute = document.querySelector(".btnMute");
const btnUnmute = document.querySelector(".btnUnmute");
const minutesDisplay = document.querySelector(".minutes");
const secondsDisplay = document.querySelector(".seconds");
let minutes = Number(minutesDisplay.textContent);

export {
  btnPlay,
  btnPause,
  btnStopwatch,
  btnStop,
  btnMute,
  btnUnmute,
  minutesDisplay,
  secondsDisplay,
  minutes,
};
