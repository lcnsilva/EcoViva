import './style.css'
import search_icon from '../../assets/search.png'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <nav>
            <a href='/' className='titulo'>EcoViva</a>
            <div className="menu" onClick={() => {
                setMenuOpen(!menuOpen);
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <a href='/'>Página inicial</a>
                </li>
                <li>
                    <a href='/'>Dicas</a>
                </li>
                <li>
                    <a href='/'>Eventos</a>
                </li>
            </ul>
            <div className='pesquisa'>
                <input type='text' placeholder='Pesquisa'></input>
                <img src={search_icon} alt='' className=''/>
            </div>
        </nav>
    )
}
export default Header