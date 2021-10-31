import React, { useEffect, useState } from 'react';
import useAuth from '../../Hooks/useAuth';

const MyOrder = () => {
    const {user}=useAuth();
    const [orders,setOrders]=useState([]);
    const[isDelete, setIsDelete]=useState(null);
    
    useEffect(()=>{
        fetch('https://boiling-hollows-19614.herokuapp.com/manageorders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
    },[isDelete])

   const results= orders.filter((order)=>order.email===user.email);
    console.log(results)

    // fetch()


    const handleDeleteOrder=email=>{
        fetch(`https://boiling-hollows-19614.herokuapp.com/myorder/${email}`,{
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
        }).then(res=>res.json())
        .then(result=>{
            if (result.deleteCount) {
               
                setIsDelete(true);
               
                
            }
            else{
              
                setIsDelete(false);
            }

        })
        console.log(email);
    }
    return (
        <div>
          <h1 className="bg-warning container my-5 rounded-pill py-3 text-white fs-1 fw-bolder w-75">MY ORDERS</h1>
            <div className="row gx-4 gy-4">

            {

            
                results.map(order=><div className=" col col-lg-4 col-md-6 col-sm-12 col-12  manageOrder-card text-center mx-auto mb-4 rounded">
                            
                            <img className="img-fluid" src={order.img} alt=""/>
                            <h3>{order?.title}</h3>
                            <h5>{order?.address}</h5>
                            <p className="text-danger">$ {order?.price}</p>
                            <p className="text-black fw-bolder">$ {order?.email}</p>
                            <button className="btn btn-danger" onClick={()=>handleDeleteOrder(order?.email)}>Delete X</button>
            
                        </div>
                       
                      

                )};
            </div>
        </div>
    );
};

export default MyOrder;