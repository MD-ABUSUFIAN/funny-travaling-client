import React, { useEffect, useState } from 'react';
import './ManageOrder.css';

const ManageOrder = () => {
    const [orders,setOrders]=useState([]);
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/manageorders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[])

    


    return (
        <div>
            <h1 className="bg-warning container my-5 rounded-pill py-3 text-white fs-1 fw-bolder w-75">ALL ORDERS</h1>
            <div className="row gx-4 gy-4">

            {

               
                orders.map(order=><div className=" col col-lg-4 col-md-6 col-sm-12 col-12  manageOrder-card text-center mx-auto mb-4 rounded" key={order?._id}>
                            
                            <img className="img-fluid" src={order.img} alt=""/>
                            <h3>{order?.title}</h3>
                            <h5>{order?.address}</h5>
                            <p className="text-danger">$ {order?.price}</p>
                           <button className="btn btn-danger mb-2">X Delete</button>
                        </div>
                      

                )};
            </div>
        </div>
    );
};

export default ManageOrder;