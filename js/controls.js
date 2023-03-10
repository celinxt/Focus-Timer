export let Controls = ({
  btnStopwatch,
  btnStop,
  btnPause,
  btnPlay,
  btnMute,
  btnUnmute,
}) => {
  let reset = () => {
    btnStopwatch.classList.remove("hide");
    btnStop.classList.add("hide");
    btnPause.classList.add("hide");
    btnPlay.classList.remove("hide");
  };

  let play = () => {
    btnPlay.classList.add("hide");
    btnPause.classList.remove("hide");
    btnStopwatch.classList.add("hide");
    btnStop.classList.remove("hide");
  };

  let pause = () => {
    btnPlay.classList.remove("hide");
    btnPause.classList.add("hide");
  };

  let mute = () => {
    btnMute.classList.remove("hide");
    btnUnmute.classList.add("hide");
  };

  let unmute = () => {
    btnMute.classList.add("hide");
    btnUnmute.classList.remove("hide");
  };

  return {
    reset,
    play,
    pause,
    mute,
    unmute,
  };
};
