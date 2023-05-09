import { Controls } from "./controls.js";
import { Timer } from "./timer.js";
import { Sounds } from "./sounds.js";

const btnPlay = document.querySelector(".btn-play");
const btnPause = document.querySelector(".btn-pause");
const btnStopwatch = document.querySelector(".btn-stopwatch");
const btnStop = document.querySelector(".btn-stop");
const btnMute = document.querySelector(".btn-mute");
const btnUnmute = document.querySelector(".btn-unmute");
const minutes = document.querySelector("#minutes");
const seconds = document.querySelector("#seconds");
let addMinutes;

const controls = Controls({
  btnPlay,
  btnPause,
  btnStopwatch,
  btnStop,
  btnMute,
  btnUnmute,
});

const timer = Timer({
  minutes,
  seconds,
  btnPlay,
  btnPause,
  btnStop,
  btnStopwatch,
});

const sounds = Sounds();

btnPlay.addEventListener("click", () => {
  controls.play();
  timer.countdown();
});

btnPause.addEventListener("click", () => {
  controls.pause();
  clearTimeout(timer.hold());
});

btnStopwatch.addEventListener("click", () => {
  addMinutes = Number(prompt("Quantos minutos quer adicionar?"));
  if (!addMinutes) {
    timer.reset();
    return;
  }
  minutes.textContent = String(addMinutes).padStart(2, "0");
});

btnStop.addEventListener("click", () => {
  controls.reset();
  clearTimeout(timer.hold());
  timer.reset();
});

btnMute.addEventListener("click", () => {
  controls.mute();
  sounds.btnPress();
  sounds.bgAudioStart();
});

btnUnmute.addEventListener("click", () => {
  controls.unmute();
  sounds.btnPress();
  sounds.bgAudioEnd();
});
