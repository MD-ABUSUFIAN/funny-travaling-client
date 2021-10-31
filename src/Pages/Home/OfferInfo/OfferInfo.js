import React from 'react';
import './OfferInfo.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
const axios = require('axios');


const OfferInfo = () => {
    const {user}=useAuth();
    console.log(user);
    const {infoId}=useParams();
    
    const[data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/services')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const result=data.filter((db)=>db._id===infoId);
    
   

    const object = {...result};
    console.log(object);

    const handleAddToCart =(order)=>{
        
        order.email=user.email;
        console.log(order);
        axios.post('http://localhost:5000/myorders',order)
        .then(res=>{
        console.log(res);
        })
        
    }


  

    return (
        <div className='container'>
            <h1 className="bg-primary w-50 mx-auto my-5 p-3 rounded-pill text-white fw-bolder">Booking Place Information</h1>
            <div className="mx-auto text-center my-5">
            <img className="img-fluid rounded" src={result[0]?.img} alt=""/>
            <h1 className="fs-1 fw-bolder text-danger mt-5">{result[0]?.title}</h1>
            <h2 className="fs-1 fw-bolder text-warning mt-5">{result[0]?.address}</h2>
            <h3 className="text-primary fs-3">Cost: ${result[0]?.price}</h3>
            <h5>{result[0]?.description}</h5>


        <button onClick={()=>handleAddToCart(object[0])} className=" order-button btn px-4 fs-4 fw-bolder btn-primary mt-5">Order Now</button>

            </div>
            
        </div>
    );
};

export default OfferInfo;

