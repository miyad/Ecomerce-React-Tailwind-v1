import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
const Parent = () => {
    return (
        <main>
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exat path="/checkout" component={Checkout}/>
                </Switch>
            </Router>
        </main>
    );
}

export default Parent;
