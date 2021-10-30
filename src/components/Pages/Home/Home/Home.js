import React from 'react';
import Banner from '../Banner/Banner';


import HelpSection from '../HelpSection/HelpSection';
import Offer from '../Offer/Offer';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <div>
         
           <Banner></Banner>
           <Services></Services>
           <HelpSection></HelpSection>
           <Offer></Offer>
        </div>
    );
};

export default Home;