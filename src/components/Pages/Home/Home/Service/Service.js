import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = (props) => {

    const{_id,name,img,price ,travelPeriod} = props.service;

    return (
        
       <div class="col-md-4 service-part ">
        <img src={img} alt="" />
         <h4> {name}</h4>
         <h4> Duration - {travelPeriod} </h4>
         <h3> Offer Package : ${price}</h3>
    <Link to ={`/booking/${_id}`}>
    <button className=' btn btn-info rounded text-bold'>BOOK NOW</button>
    </Link>
        </div>
       
    );
};

export default Service;