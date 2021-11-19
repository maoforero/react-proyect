import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import home_icon from './assets/home_icon.png';

const NavBar = () => {
    return (
        <div className="container__NavBar__Header">
            <div className="container__NavBar__Icon" id="navBar__Icon">
                <img className="home_icon" src={home_icon} alt="logo main"></img>
            </div>
            <div className="container__NavBar__Menu">
                <nav className="NavBar__Menu" id="navBar_Main">
                    <ul className="NavBar__Menu--ul">
                        <li className="NavBar--item"><a href="#">Inicio</a></li>
                        <li className="NavBar--item"><a href="#">Cartelera</a></li>
                        <li className="NavBar--item"><a href="#">Teatro</a></li>
                        <li className="NavBar--item"><a href="#">Perfil</a></li>
                        
                        <CartWidget />
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;