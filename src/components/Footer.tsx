import './Footer.css'
import whiteHeartIcon from '/assets/whiteheart.png';

const Footer = () => {
    return (
        <div>
            <footer>Made with <img style={{ position: 'relative', width: '15px', top: '2.5px' }} src={ whiteHeartIcon } alt="heart icon" /> using PokeAPI <br /><br /> ©reiyuchan</footer>
        </div>
    )
}

export default Footer;