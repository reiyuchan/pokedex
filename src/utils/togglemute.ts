const toggleMute = () => {
  const textChange = document.getElementById("toggleMuted") as HTMLDivElement;
  const video = document.getElementById("bgaudio") as HTMLVideoElement;

  if (textChange.textContent === "Unmute") {
    textChange.textContent = "Mute";
    video.muted = false;
  } else {
    textChange.textContent = "Unmute";
    video.muted = true;
  }
};

export { toggleMute };
