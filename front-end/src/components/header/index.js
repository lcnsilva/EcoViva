import './style.css'
import search_icon from '../../assets/search.png'

function Header() {
    return(
        <div className='navbar'>
            
            <ul>
                <li>Página inicial</li>
                <li>Dicas</li>
                <li>Eventos</li>
            </ul>
            <div className='pesquisa'>
                <input type='text' placeholder='Pesquisa'></input>
                <img src={search_icon} alt='' className=''/>
            </div>
        </div>
    )
}
export default Header