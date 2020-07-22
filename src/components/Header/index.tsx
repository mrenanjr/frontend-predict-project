import React from 'react';
import { Link } from 'react-router-dom';
import { Select } from 'semantic-ui-react';

import './styles.css';

import Img from '../../assets/insert_photo-24px.svg';
import HomeIcon from '../../assets/home-24px.svg';
import InfoIcon from '../../assets/info-24px.svg';
import QuitIcon from '../../assets/power_settings_new-24px.svg';

const Header = () => {
    const instOptions = [
        { key: 'ies', value: 'IES', text: 'IES' }
    ];
    return (
        <header className="header-container">
            <div className="img">
                <Link to="/inicio">
                    <img src={Img} alt="Imagem"/>
                </Link>
            </div>
            <Link to="/inicio">
                <p>SISAP</p>
            </Link>
            <div className="menu">
                <Select placeholder='Selecione a Instituição' value='IES' options={instOptions} />
                <Link to="/inicio">
                    <img src={HomeIcon} alt="Home" />
                </Link>
                <Link to="/sobrenos">
                    <img src={InfoIcon} alt="Informação" />
                </Link>
                <Link to="/" style={{ marginRight: 60 }}>
                    <img src={QuitIcon} alt="Sair" />
                </Link>
            </div>
        </header>
    );
}

export default Header;
