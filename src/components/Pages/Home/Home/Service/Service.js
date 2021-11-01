import React from 'react';
import { Link } from 'react-router-dom';

import './Service.css';

const Service = (props) => {

    const{_id,name,img,price ,travelPeriod} = props.service;

    return (
 
        <div class="col col-md-4  service-part p-3 ">
        <div class="card h-100">
          <img src={img} class="card-img-top" alt="..."/>
          <div class="card-body">
            <h4 class="card-title">{name}</h4>
            <h5 class="card-title">Duration : {travelPeriod}</h5>
            <h5 class="card-title">Offer Package: $ {price}</h5>
          </div>
          <Link to ={`/services/booking/${_id}`}>
<button className=' btn btn-info rounded text-bold m-2'>BOOK NOW</button>
</Link> 
        </div>

      </div>
       
    );
};

export default Service;
