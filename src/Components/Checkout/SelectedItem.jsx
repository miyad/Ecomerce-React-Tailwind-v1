import React, { useContext } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";

const SelectedItem = ({ id, amount }) => {
  const [products, { cart }, dispatch] = useContext(GlobalContext);
  const { title, price, image } = products.find((e) => e.id === id);

  return (
    <div
      className={
        "rounded-md grid grid-cols-5 justify-start items-end mx-4 my-4 p-2 bg-gray-300 text-lg"
      }
    >
      <div className="col-span-3 flex items-center justify-between">
        <div className="w-48">{title}</div>
        <img src={image} className="w-20 h-20" />
      </div>

      <div className="col-span-1 flex flex-col">
        <div className=" flex justify-start px-3.5">
          <div className="">${price}</div>
        </div>
        <div className="px-2 flex">
          <div className="px-1">x</div>
          <div>
            {cart.find((obj) => obj.id === id)
              ? cart.find((obj) => obj.id === id).amount
              : 0}
          </div>
        </div>
      </div>
      <div className="col-span-1">= ${(price * amount).toFixed(2)}</div>
    </div>
  );
};

export default SelectedItem;
