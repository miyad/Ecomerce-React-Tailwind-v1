import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

import ModalComp from "../Modal/ModalComp";


import Product from "../Product/Product";
import Modal from "../Modal/Modal";

const Home = () => {
  const [products,state, dispatch] = useContext(GlobalContext);



  if (products.length > 0)
    return (
      <div>
      <div className="bg-gray-100">
        <header className=" bg-gray-600 h-20 fixed w-full flex justify-between">
            <div className="px-8 py-6 text-4xl text-white font-bold"> Mini Mart</div>
            <div className="text-2xl  grid grid-cols-2 items-end">
               <div>
               <Modal/>
               </div>
                <div className="text-white mb-2">
                {state.totalCount}
                </div>
            </div>
        </header>
        <div className="p-10"/>
        <div className="flex flex-wrap justify-center">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
       
      </div>
      </div>
    );
  else
    return (
      <div className="mt-60  text-4xl text-center">Fetching Data.....</div>
    );
};

export default Home;
