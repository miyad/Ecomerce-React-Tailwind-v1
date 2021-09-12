import React,{ Children, createContext, useReducer, useState,useEffect }from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = props => {

    const Reducer = (state,action)=>{
        switch(action.type){
            case "initialize": //whenever products changes this will update the state 
                return {products}
            case "add":
                console.log("this is add");
                return;//or break
            case "delete":
                console.log("this is delete");
                return;//or break
            default:
                console.log("this is default case");
                console.log("lets see the state = ",state);
                return state;
        }
    }

    const [products,setProducts] = useState([]);

    const initValue = {
        products
    };
    
    const apiUrl = "https://fakestoreapi.com/products";
    
        useEffect(()=>{
        fetch(apiUrl)
            .then(response=>response.json())
                .then(data=>{
                        setProducts(data);
                    })
                    .catch((err)=>console.log(err))
    },[]);

    let [state, dispatch] = useReducer(Reducer,initValue);
    useEffect(()=>{
        dispatch({type:"initialize"});
    },[products])

    return (
        <GlobalContext.Provider value={[state,dispatch]}>
            {props.children}
        </GlobalContext.Provider>
    );
}
