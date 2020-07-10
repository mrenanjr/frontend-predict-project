import React from 'react';
import './styles.css';

import Img from '../../assets/insert_photo-24px.svg';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-copyright">
                ©2020 Copyright
            </div>
            <div className="img">
                <img src={Img} alt="Imagem"/>
            </div>
        </footer>
    );
}

export default Footer;
