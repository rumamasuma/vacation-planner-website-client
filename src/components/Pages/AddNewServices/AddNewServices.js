import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddNewServices.css';

const AddNewServices = () => {
    const { register, handleSubmit ,reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services' , data)
        .then(res => {
           if(res.data.insertedId){
               alert('Service Added Successfully.')
               reset();
           }
        })
      
    }

     return (
      <div className ='add-services m-5'>
      <h2 className='heading'>Please Add New Services</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("img") } placeholder='img url' />   
      <input {...register("Name") } placeholder='Package-Name' />
      <input type="number" {...register("price")} placeholder='Package-Price' />
      <input type="name" {...register("time")} placeholder='Package-Time' />
      <input {...register("description")}placeholder='Package-Description' />
      <input type="submit" />
     </form>
     </div>
    );
};

export default AddNewServices;