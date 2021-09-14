import React,{createContext, useReducer, useState,useEffect, useRef }from 'react';
import { Reducer } from '../Reducer/Reducer';

export const GlobalContext = createContext();

const mydata = require('../data.json');


export const GlobalContextProvider = props => {
    
    const [products,setProducts] = useState([]);
    const initValue = {
        totalCount: 0,
        cart:[
                
        ]
    };
    const cache=useRef({});
   
    const apiUrl = "https://fakestoreapi.com/products";
    // useEffect(()=>{
    //     if(cache.current[apiUrl]){
    //         setProducts(cache.current[apiUrl]);
    //     }
    //     else{
    //     fetch(apiUrl)
    //         .then(response=>response.json())
    //             .then(data=>{setProducts(data);cache.current[url] = data;})
    //                 .catch((err)=>console.log(err))
    //     }
    // },[]);
    useEffect(()=>{
        setProducts(mydata);
    },[]);
    
    
    let [state, dispatch] = useReducer(Reducer,initValue);
    // useEffect(()=>{
    //     dispatch({type:"initialize",products});
    // },[products])

    return (
        <GlobalContext.Provider value={[products,state,dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    );
}
