import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Footer from './components/Footer'
import LoadMusicOnClick from './utils/LoadMusicOnClick'
import { generatePokemon } from './PokeAPI/generatepokemon'
import pauseAudioUnfocus from './utils/pauseaudio'


const App = () => {
    useEffect(() => {
        LoadMusicOnClick();
        generatePokemon();
        pauseAudioUnfocus();
    })
    return (
        <div>
            <NavBar />
            <Body />
            <Footer />
        </div>
    )
}

export default App;