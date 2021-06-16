import {React} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

import Navbar from './navbar'
import Home from './home'
import Food from './food'
import About from './about'

const RouterSetup = ()=>{
    
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path='/'>
                <Home/>
            </Route>
            <Route path='/about'>
                <About/>
            </Route>
            <Route path='/nutrition'>
                <Food/>
            </Route>
        </Switch>
    </Router>
}