import { Sounds } from "./sounds.js";

export let Timer = ({
  minutesDisplay,
  secondsDisplay,
  minutes,
  btnPause,
  btnPlay,
  btnStop,
  btnStopwatch,
}) => {
  let timerTimeOut;

  let resetBtns = () => {
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
    btnStop.classList.add("hide");
    btnStopwatch.classList.remove("hide");
  };

  let reset = () => {
    updateDisplay(minutes, 0);
    clearTimeout(timerTimeOut);
  };

  let updateDisplay = (minutes, seconds) => {
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");
  };

  let countdown = () => {
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent);
      let minutes = Number(minutesDisplay.textContent);

      updateDisplay(minutes, 0);

      if (minutes <= 0 && seconds <= 0) {
        reset();
        resetBtns();
        Sounds().timeEnd();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        --minutes;
      }

      updateDisplay(minutes, String(seconds - 1));

      countdown();
    }, 1000);
  };

  let updateMinutes = (newMinutes) => {
    minutes = newMinutes;
  };

  let hold = () => {
    clearInterval(timerTimeOut);
  };

  return {
    countdown,
    reset,
    updateDisplay,
    clearTimeout,
    updateMinutes,
    hold,
  };
};
