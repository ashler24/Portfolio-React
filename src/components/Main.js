import React from 'react';
import Home from './Home.js';
import Header from './Header.js';
import {Switch, Route, Redirect} from 'react-router-dom';

const Main = () => (
    <div>
        <Header />
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Redirect to="/home" />
        </Switch>
    </div>
);

export default Main;



