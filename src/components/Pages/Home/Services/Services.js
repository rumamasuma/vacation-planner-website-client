import React,{useState, useEffect} from 'react';
import Service from '../Home/Service/Service';

const Services = () => {
const [services, setServices] = useState([]);

useEffect(() =>{
  fetch('https://tranquil-reef-90336.herokuapp.com/services')
  .then(res => res.json())
  .then(data => {
      setServices(data);
  })
},[])

    return (
        <div className ='container m-4 p-3'>
            <h2> Ruksat Vacation Planner Services</h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                {
                services.map((service)=> <Service key={service._id}
                service={service}
                ></Service>)

                }
            </div>
        
        </div>
    );
};

export default Services;