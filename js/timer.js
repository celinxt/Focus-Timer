import { Sounds } from "./sounds.js";

export const Timer = ({
  minutes,
  seconds,
  btnPlay,
  btnPause,
  btnStop,
  btnStopwatch,
}) => {
  let timerTimeOut;

  const reset = () => {
    minutes.textContent = "25";
    seconds.textContent = "00";
    return;
  };

  const countdown = () => {
    timerTimeOut = setTimeout(() => {
      let sec = Number(seconds.textContent);
      let min = Number(minutes.textContent);

      if (min <= 0 && sec <= 0) {
        btnPlay.classList.toggle("hide");
        btnPause.classList.toggle("hide");
        btnStopwatch.classList.toggle("hide");
        btnStop.classList.toggle("hide");
        reset();
        Sounds().timeEnd();
        return;
      }

      if (sec <= 0) {
        sec = 60;
        minutes.textContent = String(min - 1).padStart(2, "0");
      }

      seconds.textContent = String(sec - 1).padStart(2, "0");

      countdown();
      return;
    }, 1000);
  };

  const hold = () => {
    clearTimeout(timerTimeOut);
  };

  return {
    timerTimeOut,
    reset,
    countdown,
    hold,
  };
};
