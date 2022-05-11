import React, { useEffect } from 'react'
import NavBar from './components/NavBar'
import Body from './components/Body'
import Footer from './components/Footer'
import LoadMusicOnClick from './utils/LoadMusicOnClick'
import { generatePokemon } from './PokeAPI/generatepokemon'


const App = () => {
    useEffect(() => {
        LoadMusicOnClick();
        generatePokemon();
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