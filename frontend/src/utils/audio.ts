/* eslint-disable no-param-reassign */
let timer: number;

const playAudioWithFade = (
  audio: HTMLAudioElement,
  fadeTiming = 1000,
): void => {
  let volCounter = 0;
  audio.volume = 0;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  timer = setTimeout(() => {
    audio.play();

    const volumeFade = setInterval(() => {
      volCounter++;
      audio.volume = volCounter / 20;
    }, 100);

    setTimeout(() => {
      clearInterval(volumeFade);
    }, fadeTiming);
  }, fadeTiming);
};

const pauseAudioWithFade = (
  audio: HTMLAudioElement,
  fadeTiming = 1000,
): void => {
  clearTimeout(timer);
  let volCounter = audio.volume * 10;

  const volumeFade = setInterval(() => {
    volCounter--;
    audio.volume = Math.max(volCounter / 10, 0);
  }, 100);

  setTimeout(() => {
    clearInterval(volumeFade);
    audio.pause();
  }, fadeTiming);
};

export { playAudioWithFade, pauseAudioWithFade };
