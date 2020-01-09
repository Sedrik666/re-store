import React from "react";
import { Route, Switch } from "react-router-dom";

import CardPage from "../pages/card-page";
import HomePage from "../pages/home-page";

import './app.css'

const App = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route path='/card' component={CardPage}/>
        </Switch>
    )
};

export default App;

