import React from 'react';
import Item from "../Cart/Item";
import {Link} from "react-router-dom";

const Modal = ({cart,setIsOpen,total,dispatch,orientation}) => {
    let position;
    switch (orientation){
        case "left":
            position = "md:left-0 right-6 md:right-auto";
            break;
        case "middle":
            position = "md:right-1/3 right-3 left-3 md:left-auto";
            break;
        case "right":
            position = "md:right-0 left-6 md:left-auto";
            break;
        default:
            position = "right-0"
    }
    return (
        <div className={"w-screen bg-white z-50 inset-0 fixed bg-opacity-50 rounded"}>
            <div className={`h-full px-4 w-full md:w-1/3 ${position} fixed bg-white`}>
                    <div className={" text-2xl flex justify-between mb-2 mt-2"}>
                        <div className={"px-4"}>
                            Cart Items
                        </div>
                        <button className={"text-red-500 px-4 rounded-md"} onClick={()=>setIsOpen(false)}>
                            x
                        </button>
                    </div>
                <hr/>
                <div className="overflow-y-scroll  h-4/6 py-12">
                    {cart?cart.map((product, index) => (
                        <Item
                            id={product.id}
                            amount={product.amount}
                            key={index}
                        />
                    )):null}
                </div>
                <div>
                {cart?cart.length > 0 ? (
                    <div>
                        <div className="flex md:justify-end justify-center md:px-16 text-xl mt-2">
                            <div>
                                Total ${total}
                            </div>
                        </div>
                    </div>
                ) : null:null}
                </div>
                <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b text-white">
                    {cart && cart.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-4 text-xl">
                            <button
                                className={
                                    "bg-red-500 col-span-2 p-2 mx-4 rounded mb-2 md:mb-0"
                                }
                                onClick={() => {
                                    dispatch({ type: "reset" });
                                }}
                            >
                                Clear Cart
                            </button>
                            <Link
                                className="bg-gray-700 col-span-2 mx-4 p-2 rounded text-center"
                                to="/checkout"
                            >
                                <button  className="  rounded ">Checkout</button>
                            </Link>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default Modal;
