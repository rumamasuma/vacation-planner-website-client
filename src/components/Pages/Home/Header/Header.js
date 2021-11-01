import React from 'react';
import { Navbar ,Nav, Container} from 'react-bootstrap';
import './Header.css';
import logo from '../../../images/logo/airplane.png';
import { Link } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';
import Button from 'react-bootstrap/Button';

const Header = () => {
  const {user , logOut} = useAuth();
    return (
       <>
         <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home"><img src={logo} className='logo  p-2' alt="" />Ruksat Vacation Planner </Navbar.Brand>

    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link   as={Link} to="/home" >Home</Nav.Link>
      <Nav.Link as={Link} to="/about" >About us</Nav.Link>
      <Nav.Link as={Link} to="/allBooking" >Manage All  Booking</Nav.Link>
      {
        user?.email &&
           <Nav.Link as={Link} to="/booking" > My Bookings</Nav.Link>        
      }
        <Nav.Link as={Link} to="/addNewServices" >Add New Services</Nav.Link>
   {
     user?.email ?
     <Button onClick={logOut}  variant="outline-info">LogOut</Button> :
     <Nav.Link as={Link} to="/login">Login</Nav.Link> 
   }
     {user?.email && 
        <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName} </a>
      </Navbar.Text>
     }
    </Navbar.Collapse>
    </Container>
  </Navbar>
 </>
    );
};

export default Header;