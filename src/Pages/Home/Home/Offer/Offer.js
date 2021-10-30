import React from 'react';
import { Link } from 'react-router-dom';
import './Offer.css';

const Offer = ({offer}) => {
    
    const{_id,title,price,img,address}=offer;
    return (
        
       
            <div className="col col-md-6 col-lg-4 col-sm-12 col-12">
                
                <div className="single-offer border">
                <img className=" image w-100" src={img} alt=""/>
                
                <h3>{title}</h3>
                <h5>{address}</h5>
                <h3 className="text-danger">$ {price}</h3>
                <Link to={`/offerInfo/${_id}`}><button className="btn book-button btn-primary fw-bolder px-4">Book Now</button></Link>
                </div>
               
                
            </div>
        
    );
};

export default Offer;