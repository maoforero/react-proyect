import React from 'react';
import './Footer.css';
import logoFooter from '../../assets/cine_icon.png';

const Footer = () => {
    return (
        <div>
            <footer className='container__footer'>
                <div className="cointer__footer__description">
                    <div className="footer__description__info">
                        <img className='footer__description--logo' src={logoFooter} alt='Logo'></img>
                        <p>React proyect for CoderHouse. Simulation of an event ticket sales page </p>
                    </div>
                </div>
                <div className="cointer__footer__team">
                    <h6>Autor</h6>
                    <p className="footer__team--profile">Forero Mauro</p>
                </div>
                <div className="cointer__footer__media">
                    <h6>Social Media</h6>
                    <p>Facebook</p>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>GitHub</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
