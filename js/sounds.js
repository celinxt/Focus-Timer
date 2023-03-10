export let Sounds = () => {
  const buttonPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  );

  bgAudio.loop;

  const pressBtn = () => {
    buttonPressAudio.play();
  };

  const timeEnd = () => {
    kitchenTimer.play();
  };

  const bgAudioStart = () => {
    bgAudio.play();
  };

  const bgAudioEnd = () => {
    bgAudio.pause();
  };

  return {
    pressBtn,
    timeEnd,
    bgAudioStart,
    bgAudioEnd,
  };
};
