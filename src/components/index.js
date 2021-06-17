import {React} from 'react';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import nutritionFacts from '../nutritionFacts'

import Navbar from './navbar'
import Home from './home'
import Food from './food'
import About from './about'
import Admin from './admin'

const RouterSetup = ()=>{
    return (
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
                <Food nutritionFacts={nutritionFacts}/>
            </Route>
            <Route path='/admin'>
                <Admin/>
            </Route>
        </Switch>
    </Router>
    );
}
export default RouterSetup;