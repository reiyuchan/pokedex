import { HtmlHTMLAttributes } from "react";

const LoadMusicOnClick  = () => {
    const audio = document.getElementById('bgaudio') as HTMLAudioElement;
    const textChange = document.getElementById('toggleMuted') as HTMLDivElement;
    
    const autoplay = () => {
        if (audio.muted) {
            audio.muted = false;
            audio.play();
            textChange.textContent = 'Mute';
            window.removeEventListener('click', autoplay);
        }
    }
    
        window.addEventListener('click', autoplay);
}

export default LoadMusicOnClick;