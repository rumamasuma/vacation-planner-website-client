import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import destination from '../../images/logo/travelling.png';
import price from '../../images/logo/price-tag.png';
import customer from '../../images/logo/customer-support.png';
import booking from '../../images/logo/calendar.png';
import Collection from './Collection/Collection';


const AboutUs = () => {
const [collections, setCollections] = useState([]);
 
useEffect(() =>{
  fetch('/about.json')
  .then(res => res.json())
  .then(res => setCollections(res));
},[])
    return (
        <div>
            <h2>Why You Choose Ruksat Vacation Planner ?</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4 about-part m-4 ">
  <div className="col">
    <div className="card ">
      <img src={destination} className="card-img-top mx-auto p-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title"> 500 + Destinations</h5>
        <p className="card-text">Destination Vacation is a boutique vacation rental company with the finest Oceanfront and Oceanside homes and villas in Sea Pines.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={price}className="card-img-top mx-auto p-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Best Price In the Industry</h5>
        <p className="card-text">Goods or services that are cheap cost less money than usual or than you expected.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={customer} className="card-img-top mx-auto p-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Great Customer Support</h5>
        <p className="card-text">Customer support is a range of customer services to assist customers in making cost effective and correct use of a product.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={booking}className="card-img-top mx-auto p-3" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Fast & Comfortable Booking</h5>
        <p className="card-text"> Discover our comfortable rooms located in the north of Vienna.</p>
      </div>
    </div>
  </div>
</div>
{/* Exclusive collections */}
<div >
  <h3>Our Exclusive Collections</h3>
<div className="row row-cols-1 row-cols-md-3 g-4 " >
  {
    collections.map(collection => <Collection key={collections.id} 
      collection = {collection}
    ></Collection>)
  }
</div>
</div>
        </div>
    );
};

export default AboutUs;