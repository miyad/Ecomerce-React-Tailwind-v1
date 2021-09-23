import React,{createContext, useReducer}from 'react';
import { Reducer } from '../Reducer/Reducer';
import useFetch from "./useFetch";

export const GlobalContext = createContext();


export const GlobalContextProvider = props => {

    const initValue = {
        totalCount: 0,
        cart:[
                
        ]
    };

    const apiUrl = "https://fakestoreapi.com/products";

    const products = useFetch(apiUrl);

    
    let [state, dispatch] = useReducer(Reducer,initValue);

    return (
        <GlobalContext.Provider value={[products,state,dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    );
}
