import React from 'react';
import Carusel from '../Carusel/Carusel';
import Offering from '../Offering/Offering';
import VanueRentals from '../VENUE RENTALS/VanueRentals';


const Home = () => {
    return (
        <div>
            
            <Carusel></Carusel>
            <Offering></Offering>
            <VanueRentals></VanueRentals>
        </div>
    );
};

export default Home;