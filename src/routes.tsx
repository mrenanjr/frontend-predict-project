import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Inicio from './pages/Inicio';
import Sobrenos from './pages/Sobrenos';
import Detalhes from './pages/Detalhes';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Login} path="/" exact />
            <Route component={Inicio} path="/inicio" />
            <Route component={Sobrenos} path="/sobrenos" />
            <Route component={Detalhes} path="/detalhes/:curso" />
        </BrowserRouter>
    );
}

export default Routes;