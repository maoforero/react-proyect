import './NavBar.css';

const NavBar = () => {
    return (
        <div className="container__NavBar__Header">
            <nav className="NavBar__Header">
                <ul>
                    <li><a>Inicio</a></li>
                    <li><a>Cartelera</a></li>
                    <li><a>Teatro</a></li>
                    <li><a>Perfil</a></li>
                    <li><a>Carrito</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;