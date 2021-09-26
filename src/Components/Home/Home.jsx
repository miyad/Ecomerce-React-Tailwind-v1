import React, {useContext, useState} from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

import Product from "../Product/Product";
import Modal from "../Modal/Modal";
import mainLogo from "../../logo/bee.png";
import loadingLogo from "../../logo/loading.gif";
import cartLogo from "../../logo/cart.png";


const Home = () => {
  const [products,cartDetails,dispatch] = useContext(GlobalContext);
  const {totalCount} = cartDetails;
  const {cart} = cartDetails;
  const [showModal, setShowModal] = useState(false);

  const getTotal = () => {
    let sum = 0;

    cart?cart.map(
        (e) =>
            (sum += Number(
                Number(e.amount) * Number(products.find((p) => p.id === e.id).price)
            ))
    ):null;
    return sum.toFixed(2);
  };

  if (products.length > 0)
    return (
      <div>
        <div className="bg-gray-100">
          <header className=" bg-gray-600 h-20 fixed w-full flex justify-between">
            <div className="px-8 py-6 text-xl md:text-4xl text-white font-bold flex">
              <img src={mainLogo}  alt={""}/>
              <div>Mini Mart</div>
            </div>
            <div className="text-2xl w-24 mb-2 md:w-36  grid grid-cols-2 justify-between items-end">
              <img
                  src={cartLogo}
                  className=""
                  alt={""}
                  onClick={() => {
                    setShowModal(true);
                  }}
              />
              <div className="text-white mb-2">{totalCount}</div>
            </div>
          </header>
          <div>{
            showModal?<Modal setIsOpen={setShowModal} cart={cart} total={getTotal()} dispatch={dispatch} orientation={"left"}/>:""
          }

          </div>

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
            <img src={mainLogo}  alt={""}/>
            <div>Mini Mart</div>
          </div>
          <div className="text-2xl  grid grid-cols-2 items-end">

            <div className="text-white mb-2">{totalCount}</div>
          </div>
        </header>
        <div className="p-10" />
        <div className="flex bg-gray-100 flex-col justify-between items-center">
          <div className="mt-8 text-4xl">Just a moment....</div>
        <img className="mt-20 w-1/4" src={loadingLogo} alt="loading for you..."/>
        </div>
      </div>
    </div>
    );
};

export default Home;
