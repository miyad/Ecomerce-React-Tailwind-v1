import React, { useContext, useState } from "react";
import { GlobalContext } from "../../GlobalContext/GlobalContext";
import deleteLogo from '../../logo/delete.png';

const Item = ({ id, amount }) => {
  const handleInputChange = (e) => {
    let val = e.target.value ? e.target.value : 1;
    setInputValue(val);
    dispatch({ type: "set", data: { id, amount: val } });
  };

  const [inputValue, setInputValue] = useState(amount);
  const [products, state, dispatch] = useContext(GlobalContext);
  const { title, price, image } = products.find((e) => e.id === id);
  return (
    <div
      className={
        "rounded-md grid grid-cols-12 justify-start items-end my-4 p-2 bg-blue-200 text-lg"
      }
    >
      <div className="col-span-6 flex items-center justify-between">
        <div>{title}</div>
        <img src={image} className="w-20 h-20" />
      </div>

      <div className="col-span-3 flex flex-col">
        <div className=" flex justify-start px-3.5">
          <div className="">${price}</div>
        </div>
        <div className="px-2 flex">
          <div className="px-1">x</div>
          <input
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
            min={1}
            step={1}
            type={"number"}
            className="w-full rounded"
          />
        </div>
      </div>
      <div className="col-span-2 ">= ${(price*amount).toFixed(2)}</div>
      <img onClick={e=>dispatch({type:"removeItem",data:{id,amount}})} src={deleteLogo} className="cursor-pointer col-span-1 w-7 py-2"></img>
    </div>
  );
  // <div className={"flex flex-col "}>
  //             <div>{title.substring(0,20)}..</div>
  //             <div className="w-10"><img src={products.find(e=>e.id===id).image}></img></div>
  //         </div>
  //         <div className="mx-2">
  //             ${price}
  //             x<input onChange={(e)=>handleInputChange(e)} value={inputValue}  min={1} step={1} type={"number"} className={"mx-2 px-2 rounded-lg"}/>
  //         </div>
  //         <div>=${(price*amount).toFixed(2)}</div>
};

export default Item;
