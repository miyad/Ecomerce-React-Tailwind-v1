import React,{createContext, useReducer, useState,useEffect, useRef }from 'react';
import { Reducer } from '../Reducer/Reducer';

export const GlobalContext = createContext();


export const GlobalContextProvider = props => {
    
    const [products,setProducts] = useState([]);
    const initValue = {
        totalCount: 0,
        cart:[
                
        ]
    };
    const cache=useRef({});
    
    const apiUrl = "https://fakestoreapi.com/products";
    useEffect(()=>{
        if(localStorage.getItem('apiData')){
            setProducts(JSON.parse(localStorage.getItem('apiData')));
        }
        else{
        fetch(apiUrl)
            .then(response=>response.json())
                .then(data=>{localStorage.setItem('apiData',JSON.stringify(data));setProducts(data);})
                    .catch((err)=>console.log(err))
        }
    },[]);
    
    let [state, dispatch] = useReducer(Reducer,initValue);

    return (
        <GlobalContext.Provider value={[products,state,dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    );
}
