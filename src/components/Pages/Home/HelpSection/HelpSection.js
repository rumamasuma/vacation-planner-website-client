import React from 'react';
import winterImg from '../../../images/winterOffer/winterMorning.jpg'
import './HelpSection.css';

const HelpSection = () => {
    return (
        <div className= 'container m-5 '>
            <div className="card mb-3" >
  <div className="row g-0 help-section">
    <div className="col-md-4">
      <img src={winterImg} className="img-fluid rounded-start " alt=""/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Looking for an affordable winter escape?</h3>
        <h4 className="card-title">How Ruksat Vacation Planner Help you?</h4>
        <h2 className="card-text">Best Off-Peak Places to Visit in December for Affordability</h2>
        <h1 className="card-text">30 % discount </h1>
        <h4> For  Pre Booking !!!</h4>
      </div>
      <button> For Details</button>
    </div>
  </div>
</div>
</div>
    );
};

export default HelpSection;