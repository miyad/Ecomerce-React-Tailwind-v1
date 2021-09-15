import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { GlobalContext } from '../../GlobalContext/GlobalContext';

const Checkout = () => {
    const [products, { cart }, dispatch] = useContext(GlobalContext);
    return (
        <div className="items-center">
            Your order is placed for checkout <br />
            <Link to="/">
                <button onClick={(e) => dispatch({ type: "reset" })} className="bg-gray-300 cursor-pointer" >Go to home</button>
            </Link>
        </div>
    );
}

export default Checkout;
