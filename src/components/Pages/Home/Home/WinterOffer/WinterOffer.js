import React from 'react';
import './WinterOffer.css';

const WinterOffer = (props) => {

    const{ img, name} = props.winterOffer;

    return (
        <div class='col-md-4 col-sm-6 col-12 winter-offer'>
       <div class="card">
      <img src={img} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
      </div>
      <button className='btn-info'>Learn More >> </button>
    </div> 
    
        </div>
    );
};

export default WinterOffer;