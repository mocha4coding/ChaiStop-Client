import BackgroundImage from './background_cover_home.svg';
import {useContext} from 'react';
import UserContext from './UserContext';
import { Redirect } from 'react-router-dom';
import AuthButton from './AuthButton';
import AuthModalContext from './AuthModalContext';
import { ArrowNarrowRightIcon } from "@heroicons/react/solid";
function HomePage()
{
    const user = useContext(UserContext);
    const authModal = useContext(AuthModalContext); 
    const username = user.username; //the user who is logged in

    return (
        
        <div>
             {!username  && 
            (
                        <div >
                             <div className = "bg-theme_dark-brighter h-screen  flex"> 
                                <img src = {BackgroundImage} alt = "" className = "w-1/2 h-auto p-16"/>
                                <div>

                                    <h1 className = "text-theme_dark-highlight text-5xl font-bold mt-2">Hello there!</h1>
                                    <h2 className = "text-theme_border mt-2"> Welcome to ChaiStop!!</h2>
                                    <p className = "text-2xl text-theme_border-bright mt-16"> Click the button below to get started!</p>
                                    <AuthButton className = "mt-7 flex" onClick = {() => authModal.setShow('register')}>
                                        Get Started
                                        <ArrowNarrowRightIcon className = "h-4 w-7 my-auto"/>    
                                    </AuthButton>
                                </div>
                            </div>
                            
                        </div>
   
            )}
            {
                username && (
                    <Redirect to = "/"/>
                )
            }
           
          
            {/* <div>
                <h1 className = "text-theme_dark-highlight text-right text-5xl font-bold">Hello there ! </h1>
            </div> */}
       
        </div>

        
    );
}

export default HomePage;