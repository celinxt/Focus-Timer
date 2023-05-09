export const Controls = ({
  btnPlay,
  btnPause,
  btnStopwatch,
  btnStop,
  btnMute,
  btnUnmute,
}) => {
  const play = () => {
    btnPlay.classList.add("hide");
    btnPause.classList.remove("hide");
    btnStopwatch.classList.add("hide");
    btnStop.classList.remove("hide");
  };

  const pause = () => {
    btnPlay.classList.remove("hide");
    btnPause.classList.add("hide");
    btnStopwatch.classList.add("hide");
    btnStop.classList.remove("hide");
  };

  const reset = () => {
    btnPlay.classList.remove("hide");
    btnPause.classList.add("hide");
    btnStopwatch.classList.remove("hide");
    btnStop.classList.add("hide");
  };

  const mute = () => {
    btnMute.classList.add("hide");
    btnUnmute.classList.remove("hide");
  };

  const unmute = () => {
    btnMute.classList.remove("hide");
    btnUnmute.classList.add("hide");
  };

  return {
    play,
    pause,
    reset,
    mute,
    unmute,
  };
};
