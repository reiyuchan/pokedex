const toggleMute = () => {
  const textChange = document.getElementById("toggleMuted") as HTMLDivElement;
  const audio = document.getElementById("bgaudio") as HTMLAudioElement;
  if (textChange.textContent === "Unmute") {
    textChange.textContent = "Mute";
    audio.muted = false;
    audio.play();
  } else {
    textChange.textContent = "Unmute";
    audio.muted = true;
  }
};

export { toggleMute };
