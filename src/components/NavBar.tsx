import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
import PokemonTheme from '../../assets/pokemon_theme_song_music_video_6623166465637615962.mp3'
import { toggleMute  } from '../utils/togglemute'

const NavBar = () => {
    return (
        <div>
            <nav style={{ display: 'flex',position: 'fixed', zIndex: '999',top: '0', flexDirection: 'column', padding: '7px', width: '100%', height: 'auto', background: '#2f2f4f' }}>
                <div id='toggleMuted' className='toggleMute' onClick={() => toggleMute()}>
                    Unmute
                </div>

            </nav>
            <video id="bgaudio" src={(PokemonTheme)} playsInline autoPlay loop muted></video>
        </div>
    )
}

export default NavBar;