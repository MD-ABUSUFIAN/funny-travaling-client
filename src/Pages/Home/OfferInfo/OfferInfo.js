import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const OfferInfo = () => {
    const {infoId}=useParams();
    console.log(infoId);

    const[data,setData]=useState([])
    useEffect(()=>{
        fetch('/offering.json')
        .then(res=>res.json())
        .then(data=>setData(data))
    },[])
    const result=data.filter(db=>db._id==infoId);
    console.log(result);

    return (
        <div className='container'>
            <h1 className="bg-primary w-50 mx-auto my-5 p-3 rounded-pill text-white fw-bolder">Booking Place Information</h1>
            <div className="mx-auto text-center my-5">
            <img className="img-fluid rounded" src={result[0]?.img} alt=""/>
            <h1 className="fs-1 fw-bolder text-danger mt-5">{result[0]?.title}</h1>
            <h3 className="text-primary fs-3">Cost: ${result[0]?.price}</h3>
            <h5>{result[0]?.description}</h5>


        <button className="btn btn-lg py-2 px-4 fs-2 fw-bolder btn-primary mt-5">Order Now</button>

            </div>
            
        </div>
    );
};

export default OfferInfo;
