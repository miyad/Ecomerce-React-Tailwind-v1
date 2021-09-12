import React, { useState } from 'react';


const Cart = () => {
    const [hide,setHide] = useState("hidden");
    const handleClick = (e) =>{
        e.preventDefault();
        console.log("into method");
        e.target.classList.add('hidden');
        setHide("");
    }
    
    return (
        <div>
        <div className="bg-green-400 text-center mt-2 shadow-md rounded-md" onClick={(e)=>handleClick(e)}>
            <a href="">
            <div className="font-semibold p-2 text-white text-lg">Add to Cart</div>
            </a>
        </div>
        <div className={hide}>See Me!</div>
        </div>
    );
}

export default Cart;
