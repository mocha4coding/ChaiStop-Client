
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
    axios.get('http://localhost:4000/user', {withCredentials:true})
    .then(response => setUser(response.data));

    // axios.get('http://localhost:4000/postthread', {withCredentials:true})
    // .then(response => setPosts(response.data));

  }, []);



  function logout(){
    axios.post('http://localhost:4000/logout', {}, {withCredentials: true})
    .then(() =>{
          setUser({});
          <Redirect to = "/"/>       
        
        });
  }



 

  return (
    <div className = "">
    <AuthModalContext.Provider value = {{show: showAuthModal, setShow: setShowAuthModal}}>
     <CreateThreadModalContext.Provider value = {{show: showCreateThreadModal, setShow: setShowCreateThreadModal}}>
      <UserContext.Provider value = {{...user, logout, setUser}}>  
        
        {/* <Router>
        <Header/>  
          <Routes>
            <Route exact path = "/" element = {<SubForum/>}/> 
            <Route exact path = {"/posts/:id"} element = {<ThreadPage/>}/> 
          </Routes>
        </Router>  */}
        <Routing/>
        
        
        {/* <PostsListing/> */}
        
        
        
        
       

        
      </UserContext.Provider>
      </CreateThreadModalContext.Provider>
    </AuthModalContext.Provider>
    
    </div>
  );
}

export default App;
