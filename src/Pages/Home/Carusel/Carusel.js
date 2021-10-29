import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carusel = () => {
    return (
        <div>
        <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1592716287052-b884f81993db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
                        alt="First slide"
                        />
                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src="https://images.unsplash.com/photo-1548003671-5361469aaebe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=892&q=80"
                        alt="Second slide"
                        />

                    
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100 "
                        src ="https://images.unsplash.com/photo-1541781286675-7b70223358d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=866&q=80"
                        alt="Third slide"
                        />

                       
                </Carousel.Item>
            </Carousel>
                
        </div>
    );
};

export default Carusel;