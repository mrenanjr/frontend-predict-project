/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
    const history = useHistory();
    const [showInMobile, setShowInMobile] = useState(false);

    function handleLogoutCLick() {
        setShowInMobile(!showInMobile)

        localStorage.clear()
        history.push('/');
    }

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
            <div className={`menu ${showInMobile ? 'on' : '' }`}>
                <div className="menu-toogle" onClick={() => setShowInMobile(!showInMobile)}>
                    <div className="one"></div>
                    <div className="two"></div>
                    <div className="three"></div>
                </div>
                <div className="elements">
                    <Select placeholder='Selecione a Instituição' value='IES' options={instOptions} />
                    <Link to="/inicio" onClick={() => setShowInMobile(!showInMobile)}>
                        <img src={HomeIcon} alt="Home" />
                    </Link>
                    <Link to="/sobrenos" onClick={() => setShowInMobile(!showInMobile)}>
                        <img src={InfoIcon} alt="Informação" />
                    </Link>
                    <a onClick={handleLogoutCLick}>
                        <img src={QuitIcon} alt="Sair" />
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
