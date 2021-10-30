import React ,{useState, useEffect} from 'react';
import { useParams } from 'react-router';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Booking = () => {
 
    const {serviceId} = useParams();
    const [tourBookings , setTourBookings] = useState({});


     useEffect(() =>{
     fetch('http://localhost:5000/services')
     .then(res => res.json())
     .then(data => {
         const bookingInfo = data.find(tourBooking => tourBooking._id == serviceId);
         setTourBookings(bookingInfo);
     })
 },[serviceId]);

    return (
        <div>
            <h2>Please Book Your Vacation Offer Package</h2>
            <Card style={{ width: '600px' , color : 'blue' }}>
  <Card.Img variant="top" src={tourBookings.img}/>
  <Card.Body>
    <Card.Title>{tourBookings.name}</Card.Title>
    <Card.Text>
     Travel Period : {tourBookings.travelPeriod}
    </Card.Text>
    <Card.Text>
     Offer Package : $ {tourBookings.price}
    </Card.Text>
    <Card.Text>
     {tourBookings.description}
    </Card.Text>
    <Button variant="primary">Confirm Booking</Button>
  </Card.Body>
</Card>
            
        </div>
    );
};

export default Booking;