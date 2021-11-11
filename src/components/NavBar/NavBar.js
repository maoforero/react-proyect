import './NavBar.css';

const NavBar = () => {
    return (
        <div className="container__NavBar__Header">
            <div className="container__NavBar__Icon" id="navBar__Icon">
                <img src="./components/NavBar/assets/cine_icon.png" alt="icono principal"></img>
            </div>
            <div className="container__NavBar__Menu">
                <nav className="NavBar__Menu" id="navBar_Main">
                    <ul className="NavBar__Menu--ul">
                        <li className="NavBar--item"><a href="#">Inicio</a></li>
                        <li className="NavBar--item"><a href="#">Cartelera</a></li>
                        <li className="NavBar--item"><a href="#">Teatro</a></li>
                        <li className="NavBar--item"><a href="#">Perfil</a></li>
                        <li className="NavBar--item"><a href="#">Carrito</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;