import {
  btnPlay,
  btnPause,
  btnStopwatch,
  btnStop,
  btnMute,
  btnUnmute,
} from "./variables.js";

export let Events = ({ controls, timer, sounds }) => {
  // Button Play and Pause click event
  btnPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sounds.pressBtn();
  });

  btnPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sounds.pressBtn();
  });

  // Button Stopwatch and Stop click event
  btnStopwatch.addEventListener("click", function () {
    let newMinutes = prompt("Quantos minutos deseja adicionar?");
    if (!newMinutes) {
      timer.reset();
      return;
    }

    let minutes = newMinutes;
    timer.updateDisplay(minutes, 0);
    timer.updateMinutes(minutes);
  });

  btnStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sounds.pressBtn();
  });

  // Button Mute and Unmute click event
  btnUnmute.addEventListener("click", function () {
    controls.mute();
    sounds.bgAudioStart();
  });

  btnMute.addEventListener("click", function () {
    controls.unmute();
    sounds.bgAudioEnd();
  });
};
