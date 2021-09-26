import React, { useContext} from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import deleteLogo from '../../logo/delete.png';

const Item = ({ id, amount }) => {
  const handleInputChange = (e) => {
    let val = e.target.value ? e.target.value : 1;

    dispatch({ type: "set", data: { id, amount: val } });
  };
  const [products, {cart} , dispatch] = useContext(GlobalContext);

  
  const { title, price, image } = products.find((e) => e.id === id);
  return (
    <div
      className={
        "rounded-md grid grid-cols-6 md:grid-cols-12 justify-start items-end my-4 p-2  text-lg border-b bg-blue-100 mx-2"
      }
    >
      <div className="col-span-6 flex items-center justify-between">
        <div>{title}</div>
        <img src={image} className="w-20 h-20" alt={""}/>
      </div>

      <div className="col-span-3 flex flex-col">
        <div className=" flex justify-start px-3.5">
          <div className="">${price}</div>
        </div>
        <div className="px-2 flex">
          <div className="px-1">x</div>
          <input
            onChange={(e) => handleInputChange(e)}
            value={cart.find(e=>e.id===id).amount}
            min={1}
            step={1}
            type={"number"}
            className="w-full rounded"
          />
        </div>
      </div>
      <div className="col-span-2 ">= ${(price*amount).toFixed(2)}</div>
      <img onClick={() => dispatch({
  type: "removeItem",
  data: {id, amount}
})} src={deleteLogo} className="cursor-pointer col-span-1 w-7 py-2" alt={"o"}/>

    </div>
  );
  
};

export default Item;


