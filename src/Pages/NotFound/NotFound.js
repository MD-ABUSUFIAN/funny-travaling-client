import React from 'react';
import { Link } from 'react-router-dom';
import error from '../../images/error.jpg';
import './NotFound.css'

const NotFound = () => {
    return (
        <div>
           <img className=" w-75 " src={error} alt="" />

           <Link to="/home"><button className="btn btn-warning fs-5" >GO>>BACK>></button></Link>
            
            
       </div>
    );
};

export default NotFound;