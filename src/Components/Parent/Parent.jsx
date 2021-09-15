import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Checkout from '../Checkout/Checkout';
import Home from '../Home/Home';
const Parent = () => {
    return (
        <main>
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exat path="/checkout" component={Checkout}/>
                </Switch>
            </Router>
        </main>
    );
}

export default Parent;
