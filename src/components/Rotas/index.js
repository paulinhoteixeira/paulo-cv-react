import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import Projects from '../Projects';

const Rotas = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />            
        </Switch>
    </BrowserRouter>
)

export default Rotas;
