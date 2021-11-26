import Header from './Header';
import {
    Routes, 
    Route,
    useLocation,
    BrowserRouter as Router,
  } from 'react-router-dom';
import RoutingSwitch from './RoutingSwitch';
import AuthModal from './AuthModal';
import CreateThreadModal from './CreateThreadModal';
import Footer from './Footer';

function Routing(){
return(

    <Router>
        <Header/>  
        <RoutingSwitch/>  
        <AuthModal/>
        <CreateThreadModal/>
        <Footer/>
    </Router> 
);
}

export default Routing;