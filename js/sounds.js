export const Sounds = () => {
  const btnPressAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true"
  );
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  );
  const bgAudio = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true"
  );

  bgAudio.loop = true;

  const btnPress = () => {
    btnPressAudio.play();
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
    btnPress,
    timeEnd,
    bgAudioStart,
    bgAudioEnd,
  };
};
