import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import banner1 from '../../../images/banner2.jpg';
import banner2 from '../../../images/banner.jpg';
import banner3 from '../../../images/banner3.jpg';
import banner4 from '../../../images/banner4.jpg';
import './Banner.css';

const Banner = () => {
  
 
    return (
        <div  className='carousal-part'>
           <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h1>Siasconset Beach, Nantucket, Massachusetts</h1>
        <p>At the eastern most flank of the island, Siasconset.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner2}
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h1>Matira Beach, Bora Bora, French Polynesia</h1>
        <p>Matira is perhaps the most famous of Tahiti's beaches.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner3}
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h1>Marco Island, Florida</h1>
        <p> Marco Island makes up part of Florida’s Paradise Coast.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={banner4}
        alt="fourth slide"
      />
  
      <Carousel.Caption>
        <h1>Reethi Rah, North Malé Atoll, Maldives</h1>
        <p>West Beach Bar buzzes with the low hum of famous voices.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    
        </div>
    );
};

export default Banner;