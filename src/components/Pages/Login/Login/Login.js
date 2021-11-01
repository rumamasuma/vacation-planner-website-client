import React from 'react';
import { useHistory ,useLocation} from 'react-router';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../images/logo/vacations.png';
import './Login.css';

const Login = () => {

    const {signInUsingGoogle } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn =() =>{
        signInUsingGoogle()
        .then( (result) =>{
            history.push(redirect_uri);
         })
  
    }

    return (
        <div  className='row'>
           
        <div className="col-md-5 p-4">
            <img src={img} alt="" />
        </div>
        <div className="col-md-5 login">
       
        <div className="card border-info mb-3" >
  <div className="card-header"><h3>Please Login For Booking</h3></div>
  <div className="card-body">
 <p className="card-text">  <button onClick={handleGoogleSignIn}  className='btn btn-info'>Google Sign In</button></p>
  </div>
  </div>
        </div>
        </div>
    );
};

export default Login;