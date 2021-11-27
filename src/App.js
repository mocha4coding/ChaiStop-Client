
import './style.css';
//import Header from './Header'

//import AuthModal from './AuthModal';
import AuthModalContext from './AuthModalContext';
import {useState, useEffect} from 'react';
import axios from 'axios';
import UserContext from './UserContext';
import Routing from './Routing';
//import CreateThreadModal from './CreateThreadModal';
import CreateThreadModalContext from './CreateThreadModalContext';
import { Redirect } from 'react-router-dom';

//import Thread from './Thread';
// import {
//   Routes, 
//   Route,
//   useLocation,
//   BrowserRouter as Router,
// } from 'react-router-dom';

// import SubForum from './SubForum';
// import ThreadPage from './ThreadPage';




function App() {
  const [showAuthModal,setShowAuthModal] = useState(false);
  const [user, setUser] = useState({});
  const [showCreateThreadModal, setShowCreateThreadModal] = useState(false);
  // const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://chaiserver.herokuapp.com/user', {withCredentials:true})
    .then(response => setUser(response.data));

    // axios.get('https://chaiserver.herokuapp.com/postthread', {withCredentials:true})
    // .then(response => setPosts(response.data));

  }, []);



  function logout(){
    axios.post('https://chaiserver.herokuapp.com/logout', {}, {withCredentials: true})
    .then(() =>{
          setUser({});
          <Redirect to = "/"/>       
        
        });
  }



 

  return (
    <div className = "">
      {/* To pop up auth modal if user tries to post/comment without loggin in */}
    <AuthModalContext.Provider value = {{show: showAuthModal, setShow: setShowAuthModal}}> 

     <CreateThreadModalContext.Provider value = {{show: showCreateThreadModal, setShow: setShowCreateThreadModal}}>
      
      {/* To pass details of user  */}
      <UserContext.Provider value = {{...user, logout, setUser}}>  
      
        <Routing/>   

        
      </UserContext.Provider>
      </CreateThreadModalContext.Provider>
    </AuthModalContext.Provider>
    
    </div>
  );
}

export default App;
