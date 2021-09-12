import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../GlobalContext/GlobalContext';

const Home = () => {

    let apiUrl = "https://fakestoreapi.com/products";

    const [product,setProduct] = useState([]);

    useEffect(()=>{
        fetch(apiUrl)
            .then(response=>response.json())
                .then(data=>setProduct(data))
                    .catch((err)=>console.log(err))
    },[]);
   
    const [state,dispatch] = useContext(GlobalContext);
    console.log("can you see the sate ",state);
    console.log(state);
    if(state.products.length > 0)
    return (
        <div>
            Welcome to home page! <br />
            <button onClick={()=>dispatch({type:"adasdd"})}>
                Add
            </button>
            <br />
            title: {state.products.map((p)=><li key={p.id}>{p.title}<img src={p.image}></img> </li>)}    
        </div>
    );
    else
        return(
            <div>
                Fetching Data.....
            </div>
        )
    
}

export default Home;
