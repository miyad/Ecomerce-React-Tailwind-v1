import React, { useContext } from 'react';
import {Link} from "react-router-dom";
import { GlobalContext } from '../../GlobalContext/GlobalContext';

import SelectedItem from './SelectedItem';

const Checkout = () => {
    const [products, { cart }, dispatch] = useContext(GlobalContext);
    const getTotal = () => {
        let sum = 0;
        cart.map(
          (e) =>
            (sum += Number(
              Number(e.amount) * Number(products.find((p) => p.id === e.id).price)
            ))
        );
        return sum.toFixed(2);
      };
      
    return (
        <div className="flex flex-col justify-center items-center h-screen max-w-1/2">
            <div className="font-bold text-lg">Your Order is Placed!</div>
            <div className=" max-h-96 overflow-auto">
                {cart.map((item,index)=><SelectedItem id={item.id} amount={item.amount} key={index}/>)}
            </div>
            <div className="text-xl flex justify-between w-72 mt-2">
                <div className="">
                    <div>Total</div>
                </div>
                <div>${getTotal()}</div>
            </div>
            <Link to="/">
                <button onClick={() => dispatch({ type: "reset" })} className="bg-blue-700 font-bold text-white cursor-pointer mt-6 p-2 rounded hover:bg-black focus:ring-blue-400" >Go Home</button>
            </Link>
        </div>
    );
}

export default Checkout;
