import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth'

const Navigation = () => {
    const {logOut,user}=useAuth();
   
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="py-3 text-black ">
    <Container>
        <Navbar.Brand className="fs-3 fw-bolder me-auto" as={Link} to="/home" >FUNNY TRAVELING</Navbar.Brand>
            <Nav className="ms-auto fs-5 " >
            <Nav.Link className=" nav-text" as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/travelOffer">Travel Offer</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/venuerentals">VENUE RENTALS</Nav.Link>
            <Nav.Link className=" nav-text" as={Link} to ="/about">About Us</Nav.Link>
           

           {
               user.email?<div><Nav.Link >
               <h5 className="text-white">{user.displayName}</h5>
           <img className="w-25 img-fluid rounded-circle" src={user.photoURL} alt=""/>
           <button onClick={logOut}>Logout</button>
           </Nav.Link>
           <Nav.Link className=" nav-text" as={Link} to ="/myordeer">My-Order</Nav.Link>
           <Nav.Link className=" nav-text" as={Link} to ="/manageOrder">Manage All Order</Nav.Link>
           <Nav.Link className=" nav-text" as={Link} to ="/newservice">Add a New Service</Nav.Link>
           
           
           
           </div>:<Nav.Link className=" nav-text" as={Link} to ="/login">Login</Nav.Link>
           }
            

           
        </Nav>
        
        
    </Container>
  </Navbar>
        
    

       </div>
    );
};

export default Navigation;