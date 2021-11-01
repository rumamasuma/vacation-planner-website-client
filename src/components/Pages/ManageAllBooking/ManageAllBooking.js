import React, { useEffect, useState } from 'react';


const ManageAllBooking = () => {

    const [allBookings , setAllBookings] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/booking')
        .then(res=> res.json())
        .then(data => setAllBookings(data));
    },[])

    // delete button
    const handleDelete= id =>{
        const url = `http://localhost:5000/booking/${id}`;
        fetch(url,{
            method : 'DELETE'
        })
        .then(res =>res.json())
        .then(data =>{
            // console.log(data);
            if(data.deletedCount){
                alert('Deleted Bookings Successfully');
                const remaining = allBookings.filter(booking => booking._id !== id);
                setAllBookings(remaining);
            }
          
        })
    }

    return (
        <div className='m-4'>
            <h2> All Booking  Details </h2>
            <h3>Total Bookings- {allBookings.length} </h3>

             <div className="row  row-cols-1 row-cols-md-3 ">
               {
                  allBookings.map(allBooking =>  <div className="col" key={allBooking._id}>
                  <div className="card">
            <div className="card-body">
              <h5 className="card-title"> Clients Name : {allBooking.userName}</h5>
              <h5 className="card-title"> Clients email : {allBooking.email}</h5>
              <p className="card-text">Package Name :{allBooking.name}</p>
              <p className="card-text">Package Price :{allBooking.price}</p>
              <button  onClick={() =>handleDelete(allBooking._id)} className="btn btn-primary">Delete</button>
            </div>
          </div>
                  </div>
                    
                    )
               }

             </div>
        </div>
    );
};

export default ManageAllBooking;
