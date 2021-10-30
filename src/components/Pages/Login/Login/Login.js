import React from 'react';
import { useHistory ,useLocation} from 'react-router';
import useAuth from '../../../../hooks/useAuth';

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
        <div>
            <h2>Please Login For Booking</h2>
            <button onClick={handleGoogleSignIn}  className='btn btn-info'>Google Sign In</button>
        </div>
    );
};

export default Login;