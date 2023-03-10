import { Timer } from "./timer.js";
import { Controls } from "./controls.js";
import { Sounds } from "./sounds.js";
import { Events } from "./events.js";
import {
  btnPlay,
  btnPause,
  btnStopwatch,
  btnStop,
  btnMute,
  btnUnmute,
  minutesDisplay,
  secondsDisplay,
  minutes,
} from "./variables.js";

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  minutes,
  btnPause,
  btnPlay,
  btnStop,
  btnStopwatch,
});

const controls = Controls({
  btnStopwatch,
  btnStop,
  btnPause,
  btnPlay,
  btnMute,
  btnUnmute,
});

const sounds = Sounds();

Events({ controls, timer, sounds });
