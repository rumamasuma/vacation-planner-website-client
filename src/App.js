import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import AboutUs from './components/Pages/AboutUs/AboutUs';
import AddNewServices from './components/Pages/AddNewServices/AddNewServices';
import Booking from './components/Pages/Booking/Booking';
import Footer from './components/Pages/Home/Footer/Footer';
import Header from './components/Pages/Home/Header/Header';
import Home from './components/Pages/Home/Home/Home';
import NotFound from './components/Pages/Home/NotFound/NotFound';
import Login from './components/Pages/Login/Login/Login';
import PrivateRoute from './components/Pages/Login/PrivateRoute/PrivateRoute';

import Tour from './components/Pages/Tour/Tour';
import AuthProvider from './contexts/AuthProvider';

function App() {
  return (
    <div className="App">
      
  <AuthProvider>
  <Router>
   <Header></Header>
     <Switch>
       <Route exact path='/'>
         <Home></Home>
       </Route>
       <Route exact path='/home'>
         <Home></Home>
       </Route>
       <Route path='/about'>
         <AboutUs></AboutUs>
       </Route>
       <Route path='/tour'>
        <Tour></Tour>
       </Route>
       <Route path='/login'>
       <Login></Login>
       </Route>
       <PrivateRoute path="/booking/:serviceId">
         <Booking></Booking>
       </PrivateRoute>
       <Route path ="/addNewServices">
       <AddNewServices></AddNewServices>
       </Route>
     <Route path ='*'>
    <NotFound></NotFound>
  </Route>
     </Switch>
     <Footer></Footer>
   </Router>
  </AuthProvider>

    </div>
  );
}

export default App;
