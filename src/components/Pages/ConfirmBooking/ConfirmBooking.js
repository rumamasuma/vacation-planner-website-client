import React from 'react';

const ConfirmBooking = ({confirmBooking}) => {
    const { userName, name, email, price } = confirmBooking;


    return (
        <div>      
 <div className="card text-center m-4 p-4">
  <div className="card-header">
  <h4> Hi , {userName}.Thanks for your booking.</h4>
  </div>
  <div className="card-body">
  <h5 className="card-title">Your mail address : {email}</h5>
    <h5 className="card-title">Special Package Name : {name}</h5>
    <h4 className="card-text"> Offer Price : $ {price}</h4>
    <button className='btn-info rounded'>Cancel booking</button>
  </div>
  <div className="card-footer text-muted">
   you ordered a few minutes ago.
  </div>
</div>
        </div>
    );
};

export default ConfirmBooking;