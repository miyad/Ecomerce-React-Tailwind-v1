import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from '../Home/Home';
const Parent = () => {
    return (
        <main>
            <Router>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>
            </Router>
        </main>
    );
}

export default Parent;
