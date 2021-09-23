import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import mainLogo from "../../logo/bee.png";
import loadingLogo from "../../logo/loading.gif";

const Home = () => {
  const [products,{totalCount}] = useContext(GlobalContext);

  if (products.length > 0)
    return (
      <div>
        <div className="bg-gray-100">
          <header className=" bg-gray-600 h-20 fixed w-full flex justify-between">
            <div className="px-8 py-6 text-xl md:text-4xl text-white font-bold flex">
              <img src={mainLogo} />
              <div>Mini Mart</div>
            </div>
            <div className="text-2xl  grid grid-cols-2 items-end">
              <div>
                <Modal />
              </div>
              <div className="text-white mb-2">{totalCount}</div>
            </div>
          </header>
          <div className="p-10" />
          <div className="flex flex-wrap  mx-4 md:mx-8 lg:mx-12 justify-center">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    );
  else
    return (
      // <div className="mt-60  text-4xl text-center">Fetching Data.....
      //   <img src={loadingLogo} alt="loading for you..."></img>
      // </div>
      <div>
      <div className="bg-gray-100">
        <header className=" bg-gray-600 h-20 fixed w-full flex justify-between">
          <div className="px-8 py-6 text-4xl text-white font-bold flex">
            <img src={mainLogo} />
            <div>Mini Mart</div>
          </div>
          <div className="text-2xl  grid grid-cols-2 items-end">
            <div>
              <Modal />
            </div>
            <div className="text-white mb-2">{totalCount}</div>
          </div>
        </header>
        <div className="p-10" />
        <div className="flex bg-gray-100 flex-col justify-between items-center">
          <div className="mt-8 text-4xl">Just a moment....</div>
        <img className="mt-20 w-1/4" src={loadingLogo} alt="loading for you..."></img>
        </div>
      </div>
    </div>
    );
};

export default Home;
