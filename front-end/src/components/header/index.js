import './style.css'
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";


function Header() {
    const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

    return(
        <header>
            <h2>EcoViva</h2>
            <nav ref={navRef}>
                <a href='/'>Página inicial</a>
                <a href='/PostDicas'>Dicas</a>
                <a href='/PostEventos'>Eventos</a>

                <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                </button>
            </nav>
            <button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
        </header>
    )
}
export default Header