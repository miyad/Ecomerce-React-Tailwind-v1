import React, { useContext, useState } from "react";
import Item from "../Cart/Item";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cartLogo from "../../logo/cart.png";

const Modal = () => {
  const [showModal, setShowModal] = React.useState(false);

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
    <>
      <img
        src={cartLogo}
        className="w-8 md:w-12 lg:w-16 mx-2 cursor-pointer mb-4 lg:mb-2"
        alt={""}
        onClick={() => {
          setShowModal(true);
        }}
      />

      {showModal ? (
        <div>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg  w-full bg-white">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold mx-4">Cart Items</h3>
                  <button
                    className="p-1 ml-auto bg-transparent  text-red-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="relative px-6 flex flex-col justify-end">
                  <div className="my-4 text-blueGray-500 w-screen leading-relaxed">
                    {cart.length > 0 ? (
                      <p>Item details</p>
                    ) : (
                      <p>Cart is Empty!</p>
                    )}
                  </div>
                  <div className="overflow-y-scroll  max-h-96 min-w-60">
                    {cart.map((product, index) => (
                      <Item
                        id={product.id}
                        amount={product.amount}
                        key={index}
                      />
                    ))}
                  </div>
                  {cart.length > 0 ? (
                    <div>
                    <div className="grid grid-cols-8">
                      <div className="col-span-5 flex justify-end">Total</div>
                      <div className={" col-span-2 flex justify-end"}>
                       $ {getTotal()}
                      </div>

                      
                    </div>

                    </div>
                  ) : null}
                  {/*<input  onChange={(e)=>handleInputChange(e)} value={inputValue}  min={1} step={1} type={"number"} className={"bg-gray-100 outline-black w-28  mx-12"}/>*/}
                </div>
                {/*footer*/}

                <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {cart.length > 0 ? (
                      <div className="grid grid-cols-4">
                    <button
                      className={"bg-red-500 col-span-2 p-2 mx-4  text-md rounded text-white"}
                      onClick={(e) => { dispatch({ type: "reset" })}}
                    >
                      Clear Cart
                    </button>
                                        <Link className="bg-gray-700 mx-4 flex justify-center  col-span-2 text-md rounded text-white" to="/checkout">
                                        <button className=" rounded">
                                          Checkout
                                        </button>
                                      </Link>
                                      </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </div>
      ) : null}
    </>
  );
};

export default Modal;
