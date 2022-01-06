import React from 'react';
import './MainBanner.css';
import mainBanner from '../../assets/events_banner3.jpg'

const MainBanner = () => {
    return (
        <div>
            <div className="main__ContentBanner">
                <div className="container__mainBanner">
                    <img className="mainBanner" src={mainBanner} alt="banner principal, imagen promicional" />
                </div>
                <h1 className="mainTitle">EVENTOS </h1>
            </div>
        </div>
    )
}

export default MainBanner
