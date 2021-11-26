import React, { useEffect, useState } from 'react';

import useAuth from '../../../hooks/useAuth';
import ConfirmBooking from '../ConfirmBooking/ConfirmBooking';

const MyBookings = () => {
    const {user} = useAuth();
   
    const [serviceBooking, setServiceBooking] = useState([]);
    const [filterBooking, setFilterBooking] = useState([]);
    

    useEffect(() =>{
        fetch('https://tranquil-reef-90336.herokuapp.com/booking')
        .then(res => res.json())
        .then(data => {
           setServiceBooking(data);
        setFilterBooking(serviceBooking.filter(booked => booked.email === user.email));         
        })
    },[serviceBooking,user.email]);
    return (
        <div className='m-3 w-75 mx-auto'>
            <h2>Client's Booking List </h2>
            {
                filterBooking.map(confirmBooking => <ConfirmBooking  key={confirmBooking._id}
                    confirmBooking={confirmBooking}
                ></ConfirmBooking> )
            }

        </div>
    );
};

export default MyBookings;