import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../GlobalContext/GlobalContext';

import Product from '../Product/Product';

const Home = () => {

   
    const [state,dispatch] = useContext(GlobalContext);

    if(state.products.length > 0)
    return (
        <div className="bg-red-100 shadow-lg">
             Welcome to home page! <br />
            <h4>this is h4</h4>
            <h2>this is h2</h2>
            <h1>this is h1</h1>

            <div className="mx-6 bg-gray-100 flex flex-wrap">

                {
                    state.products.map((product)=><Product product={product} key={product.id}/>)
                }    
            </div>
        </div>
    );
    else
        return(
            <div className="mt-60  text-4xl text-center">
                Fetching Data.....
            </div>
        )
    
}

export default Home;
