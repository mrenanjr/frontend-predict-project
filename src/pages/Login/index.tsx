import React, { FormEvent, useState } from 'react';
import './styles.css'
import Footer from '../../components/Footer'
import { Input } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'
import { Dimmer, Loader } from 'semantic-ui-react'
import api from '../../services/api';


const Login = () => {
    const [email, setEmail] = useState('');
    const [psw, setPsw] = useState('');
    const [loader, setLoader] = useState('');

    const history = useHistory();

    function handleLogin(event: FormEvent) {
        event.preventDefault();

        setLoader('active');
        api.post('auth', {}, {
            auth: {
                username: email,
                password: psw
            }
        }).then(resp => {
                localStorage.setItem('token', resp.data.token);
                history.push('/inicio');
            }).catch(err => {
                alert(`Falha ao tentar logar, verifique seu login e senha. Error: ${err}`);
            }).finally(() => {
                setLoader('disabled');
            })
    };

    return (
        <>
            <Dimmer className={loader}>
                <Loader size="large" content='Carregando' />
            </Dimmer>
            <div className="container-login fadeInDown">
                <div >
                    <p className="title">SISAP</p>
                    <p className="title-name">Sistema de Análise Preditiva</p>
                </div>
                <form>
                    <Input className="login-input" type="email" value={email} onChange={e => setEmail(e.target.value)} icon="user" iconPosition="left" placeholder="Informe seu login único."/>
                    <Input className="password-input" type="password" value={psw} onChange={e => setPsw(e.target.value)} icon="lock" iconPosition="left" placeholder="Informe sua senha."/>
                    <button type="submit" onClick={handleLogin}>Entrar</button>
                </form>
            </div>
            <Footer/>
        </>
    );
}

export default Login;
