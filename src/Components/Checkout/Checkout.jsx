import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Checkout = () => {
    return (
        <div className="items-center">
            Your order is placed for checkout <br />
            <Link to="/">
                <button>Go to home</button>
            </Link>
        </div>
    );
}

export default Checkout;
