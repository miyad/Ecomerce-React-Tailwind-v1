import React, {useContext, useState} from 'react';
import {GlobalContext} from "../../GlobalContext/GlobalContext";

const Item = ({id,amount}) => {

    const handleInputChange = e =>{
        let val = e.target.value?e.target.value:1;
        setInputValue(val);
        dispatch({type:"set",data:{id,amount:val}});
    }


    const [inputValue,setInputValue] = useState(amount);
    const [products,state,dispatch] = useContext(GlobalContext);
    const {title,price} = products.find(e=>e.id===id);
    return (
        <div className={"border-black flex my-4 bg-white text-lg"}>
            <div className={"flex flex-col mx-4"}>
                <div>{title.substring(0,20)}..</div>
                <div className="w-10"><img src={products.find(e=>e.id===id).image}></img></div>
            </div>
            <div className="mx-2">
                ${price} 
                x<input onChange={(e)=>handleInputChange(e)} value={inputValue}  min={1} step={1} type={"number"} className={"mx-2 outline-black"}/>
            </div>
            <div>=${(price*amount).toFixed(2)}</div>
        </div>
    );
}

export default Item;
