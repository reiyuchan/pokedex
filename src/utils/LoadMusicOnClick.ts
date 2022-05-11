const LoadMusicOnClick  = () => {
    const video = document.getElementById('bgaudio') as HTMLVideoElement;
    const textChange = document.getElementById('toggleMuted') as HTMLDivElement;
    
    const autoplay = () => {
        if (video.muted) {
            video.muted = false;
            textChange.textContent = 'Mute';
            window.removeEventListener('click', autoplay);
        }
    }
    
        window.addEventListener('click', autoplay);
}

export default LoadMusicOnClick;