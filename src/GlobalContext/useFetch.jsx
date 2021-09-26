import {useEffect, useState} from "react";

const useFetch = (apiUrl) => {

    const [products, setProducts] = useState([]);
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
    return products;
}

export default useFetch;