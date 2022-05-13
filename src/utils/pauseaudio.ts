const pauseAudioUnfocus = () => {
  document.addEventListener("visibilitychange", () => {
    const audio = document.querySelector("#bgaudio") as HTMLAudioElement;
    const textChange = document.querySelector("#toggleMuted") as HTMLDivElement;

      if (document.visibilityState === "hidden") {
          textChange.textContent = "Unmute";
          audio.pause();
      }
      else
          audio.play();
  });
};

export default pauseAudioUnfocus;
