import React ,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Booking.css';
import { Link } from 'react-router-dom';


const Booking = () => {
 const {user} = useAuth();
    const {serviceId} = useParams();
    const [serviceBookings , setServiceBookings] = useState({});

     useEffect(() =>{
     fetch(`http://localhost:5000/services/${serviceId}`)
     .then(res => res.json())
     .then(data => {
        setServiceBookings(data);
     })
 },[]);
  
 const { register, handleSubmit , reset } = useForm();

 const onSubmit = data =>{
     console.log(data);
     axios.post('http://localhost:5000/booking', data)
     .then(res =>{
        //  console.log(res);
        if(res.data.insertedId){
            alert('Your Booking Add Succesfully.Thank You.');
            reset();
        }
         
     })

 }

    return (
        <div className='row' >
            <h2 className='m-4 heading'>Please Book Your Vacation Offer Package</h2>
     <div className="col-md-6 p-4 mt-3">
     <div className="card mb-3">
  <img src={serviceBookings.img}  className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{serviceBookings.name}</h5>
    <h5 className="card-title">Duration: {serviceBookings.travelPeriod}</h5>
    <h5 className="card-title">Offer Price : ${serviceBookings.price}</h5>
    <p className="card-text">{serviceBookings.description}</p>
    <p className="card-text"><small className="text-muted">If you are sure then fill up the order form.</small></p>
  </div>
</div>
     </div>
     <div className="col-md-4 add-services p-4">
  <h3 className='form-heading'>Clients Booking Form </h3>
<form onSubmit={handleSubmit(onSubmit)}> 
<input {...register("userName") } placeholder='User Name' />
<input {...register("email") } defaultValue={user.email} placeholder='User Email' />
<input {...register("number") } placeholder='Contact Number' />
<input {...register("name") }  defaultValue={serviceBookings.name}   placeholder='Package Name' />
<input type="name" {...register("travelPeriod")}  defaultValue={serviceBookings.travelPeriod}  placeholder='Package Time' />
<input type="number" {...register("price")} 
defaultValue={serviceBookings.price}  placeholder='Package Price' />
<input type="submit" className='form-heading' />
</form>
</div> 
       </div>
  
    );
};

export default Booking;


 
