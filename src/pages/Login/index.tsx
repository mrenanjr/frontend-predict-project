import React, { FormEvent } from 'react';
import './styles.css'
import Footer from '../../components/Footer'
import { Input } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory();

    function handleLogin(event: FormEvent) {
        event.preventDefault();

        history.push('/inicio');
    };

    return (
        <>
            <div className="container-login fadeInDown">
                <div >
                    <p className="title">SISAP</p>
                    <p className="title-name">Sistema de Análise Preditiva</p>
                </div>
                <form>
                    <Input className="login-input" icon="user" iconPosition="left" placeholder="Informe seu login único."/>
                    <Input className="password-input" icon="lock" iconPosition="left" placeholder="Informe sua senha."/>
                    <button type="submit" onClick={handleLogin}>Entrar</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default Login;
