import React, {useContext} from 'react';
import {GlobalContext} from "../../GlobalContext/GlobalContext";

const Item = ({item,amount}) => {
    const [porducts,dispatch] = useContext(GlobalContext);
    return (
        <div className={"border-solid grid grid-cols-2 contents-end my-4 bg-white"}>
            <div className={"" }>
                {item.title}
            </div>
            <div>
                {amount}
                <input className={"border-solid bg-black w-12"}/>
            </div>
        </div>
    );
}

export default Item;
