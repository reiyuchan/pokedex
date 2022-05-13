import React from 'react';
import { Link } from 'react-router-dom';
import './Body.css'

const Body = () => {
    return (
        <div style={{marginTop: '10rem'}}>
            <h3 style={{ textAlign: 'center', fontSize: '1.5rem', color: 'brown' }}>Welcome to the Pokedex!</h3>
            <div className='randomPokemon'>
                <div className='pokemon'>
                </div>
                <button className='genbtn'>Start</button>
            </div>
        </div>
    )
}

export default Body;