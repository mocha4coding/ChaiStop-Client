
import Avatar from './avatar.png'
import CreateThreadModalContext from './CreateThreadModalContext';
import {useContext} from 'react';

//Post form

//The Post thread bar in forum dashboard which on click opens the createThreadModal



function PostThread() {
    const modalContext = useContext(CreateThreadModalContext);
    
    return (      
        <div className= "bg-theme_dark px-6 py-4 text-theme_dark-brighter  ">
        
        
            <div className = "border-2 border-theme_dark hover:border-theme_dark-highlight p-2 rounded-md flex shadow-md">
              <div className = "overflow-hidden w-10 h-10">
                <img src = {Avatar} alt = "" />
              </div>
              <form action = "" className = "bg-theme_dark-alternateBright p-1 ml-2 flex rounded-md border border-theme_border flex-grow">
                <input 
                      type = "text" 
                      className = "w-full bg-theme_dark-alternateBright text-gray block" 
                      placeholder = "Create Thread"
                      onClick={e => {
                        e.preventDefault();
                        modalContext.setShow(true);
                      }}
                     
                />
              </form>
            </div>
        </div>

  
      
    );
  }
  
  export default PostThread;
  