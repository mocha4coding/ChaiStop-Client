import Logo from './logo.png';
import {LoginIcon, BellIcon, SearchIcon,  LogoutIcon} from '@heroicons/react/outline';
import { BookmarkIcon ,UserCircleIcon, ChevronDownIcon, ClipboardListIcon} from '@heroicons/react/solid';
import AuthButton from './AuthButton';
import {useState, useContext} from 'react';
import ClickOutHandler from 'react-clickout-handler';
import AuthModalContext from './AuthModalContext';
import AuthModal from './AuthModal';
import UserContext from './UserContext';
import { Link } from 'react-router-dom';

function Header() {
    const [userDropdownVisibilityClass,setUserDropdownVisibilityClass] = useState('hidden');
    
    


    function toggleUserDropdown()
    {
      if(userDropdownVisibilityClass === 'hidden'){
        setUserDropdownVisibilityClass('block');
      } else{
        setUserDropdownVisibilityClass('hidden');
      }
    
    }

    const authModal = useContext(AuthModalContext); 
    const user = useContext(UserContext);

    return (      
        <header className = "w-full bg-theme_dark p-2">
          <div className = "mx-4 flex">
              {/* Website logo */}
            <Link to = "/">
              <button className="block flex my-1 text-white font-bold my-auto">
                <img src = {Logo} alt = "" className = "w-8 h-8 pt-1"/>
                <div className = "p-2"><span className = "text-theme_dark-highlight">CHAI</span><span className = "opacity-80">stop</span></div>
              </button>
            </Link>
              {/* Search Bar */}
              <div action = "" className = "bg-theme_dark p-1 flex rounded-md border border-theme_dark flex-grow"/>
            {/* <form action = "" className = "bg-gray-800 p-1 flex rounded-md border border-theme_border flex-grow">
              {/* <SearchIcon className = "text-theme_dark-brighter h-7 w-7"/>
              <input type = "text" className = "bg-gray-800 h-6 text-sm p-1 pl-2 pr-0 block focus:outline-none text-white" placeholder = "Search"/> 
            </form> */}


              {/* Authentication buttons to be displayed only when user is not logged in*/}
              {!user.username && (
                 <div className = "hidden sm:block">

                 <AuthButton outline className = "ml-2" onClick = {() => authModal.setShow('login')}>Log In</AuthButton>  
                 <AuthButton className = "ml-1 mr-2" onClick = {() => authModal.setShow('register')}>Sign Up</AuthButton>
               </div>
              )}
           
            
            
              
            {user.username && (


              <>
              {/* Other buttons (to be displayed only when user is logged in)*/}

              {/* My posts */}
              <Link to = {"/myposts/" + user.username}>
              <button className="px-2 py-1 block flex text-theme_dark-brighter hover:text-theme_dark-highlight">
                <p className = "font-bold m-1 ml-2 ">MY POSTS</p>
                <ClipboardListIcon className = " w-6 h-6 m-1  " />
              </button>
              </Link>

              {/* Saved posts */}
              <Link to = {"/bookmarks/" + user.username}>
              <button className="px-2 py-1 block flex text-theme_dark-brighter hover:text-theme_dark-highlight">
                <p className = "font-bold m-1 ml-2 ">SAVED POSTS</p>
                <BookmarkIcon className = " w-6 h-6 m-1  " />
              </button>
              </Link>
              {/* <button className="px-2 py-1">
                <BellIcon className =     "text-theme_dark-brighter w-6 h-6 m-1 mx-2" />
              </button> */}

              </>
            )}

            
            <ClickOutHandler onClickOut = {() => setUserDropdownVisibilityClass('hidden')}>
                {/* User profile icon */}
                 


                <button className = "block flex m-2 ml-3 text-white opacity-80 hover:text-theme_dark-highlight hover:opacity-100"  onClick = {() => toggleUserDropdown()} >
                  {/* Greeting */}
                  {user.username && (  
                   <span className = " font-bold  mx-1 " >

                   Welcome, {user.username}!!
                   </span>)
                   } 
                  
                  <UserCircleIcon className =     " w-6 h-6  " />
                  <ChevronDownIcon className =    " w-3 h-3 my-1.5"/>
                </button>


                {/* Profile dropdown */}
              <div className = {"absolute right-0 top-12 my-2 mr-8 bg-theme_dark border-2 border-theme_dark-brighter z-10 rounded-md text-theme_border overflow-hidden " + userDropdownVisibilityClass}>
                  


               
                  {/* Login/Signup button in profile dropdown (to be shown only when user is not logged in) */}
                {!user.username && (  
                  <button className = "block flex w-50 py-2 px-3 text-sm hover:bg-theme_border hover:text-theme_dark "  onClick = {() => authModal.setShow('login')}>
                    <LoginIcon className = "w-5 h-5"/>
                    Log In / Sign Up
                  </button>)
                }

                  {/* Logout button in profile dropdown (to be shown only when user is not logged in) */}
                  {/* BUG: Entire button not changing background on getting hovered -> Fixed Now */}
                {user.username && (  
                  <div>
                       <Link to = {"/profile/" + user.username}>
                         <button className = "block flex w-full py-2 px-3 text-sm hover:bg-theme_border hover:text-theme_dark "  
                                 >
                           <UserCircleIcon className = "w-5 h-5"/>
                          My Profile
                         </button>
                      </Link>
                     
                          <button className = "block flex w-full py-2 px-3 text-sm hover:bg-theme_border hover:text-theme_dark "  onClick = {() => user.logout()}>
                            <LogoutIcon className = "w-5 h-5"/>
                           Log Out
                          </button>
                      
                  </div>)
                } 
              </div>
            </ClickOutHandler>
        </div>
        </header>
       
        
  
      
    );
  }
  
  export default Header;
  