import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react";

import React from 'react'

export default function SsDetails() {
    const {ss} = useParams()
    const apiKey = "29492cda71d01357b7f21d117dcf0e55"
    const url = `https://financialmodelingprep.com/api/v3/quote-short/${ss}?apikey=${apiKey}`

    const [stock, setStock] = useState(null);
   

    const getStock = async()=>{
        try{
            const response = await fetch(url)
            const data = await response.json()
            setStock(data)
        }catch(err){
            console.error(err)
        }
    }


    useEffect(()=>{
        getStock()
    },[])


    //For refresh button
    //const [refresh, setReftesh] = useState(false)
    //   useEffect(()=>{
    //     getStock()   
    // },[refresh])
    // const handleClick=()=>{
    //     setReftesh(!refresh)
    //  }
    //  <button onClick = {handleClick}>Refresh</button>


  
  const loaded=()=>{
    return(
        <>
            <h1>{stock[0].symbol}</h1>
            <h2>Price: {stock[0].price}</h2>
            <h4>Volume: {stock[0].volume}  </h4>   
        </>
    )
  }


  const loading = () =>{
    return <h1>Loading...</h1>;
 }
  
  
 return(
    stock ? loaded():loading()
  );
  

}
