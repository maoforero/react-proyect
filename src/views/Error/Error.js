import React from 'react';
import imgError from '../../assets/404-error.svg';
import './Error.css';

const Contact = () => {
    return (
        <div className='container__errorView'>
            <div className='errorView--title'>
                <h1 className='errorTitle'>Error :(</h1>
            </div>
            <div className='errorView--text'>
                <p className='errorText'>Lo lamentamos, la ruta seleccionada no se encuentra disponible...</p>
            </div>
            <div className='errorView--img'>
                <img src={imgError} alt="imagen de error" className='errorImg'/>
            </div>
        </div>
    )
}

export default Contact
