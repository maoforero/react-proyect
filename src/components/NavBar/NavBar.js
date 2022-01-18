import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import home_icon from '../../assets/cine_icon.png';
import { NavLink } from 'react-router-dom';

const NavBar = ({title}) => {
    return (
        <div className="container__NavBar__Header">
            <div className="container__NavBar__Icon" id="navBar__Icon">
                <img className="home_icon" src={home_icon} alt="logo main"></img>
                <p className="home_title">{title}</p>
            </div>
            <div className="container__NavBar__Menu">
                <nav className="NavBar__Menu" id="navBar_Main">
                    <ul className="NavBar__Menu--ul">
                        <NavLink className="NavBar--item" to="/" >Inicio</NavLink>
                        <NavLink className="NavBar--item" to="/movies" >Peliculas</NavLink>
                        <NavLink className="NavBar--item" to="/teatro" >Teatro</NavLink>  
                        <NavLink to="/cart" className="active"><CartWidget/></NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;