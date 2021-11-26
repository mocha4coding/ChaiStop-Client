import {Link} from 'react-router-dom';

import PostContent from './PostContent'; //Content rendering of the thread once 



//Post
function Thread(props){
    console.log(props.open);
    const openClass =  "bg-theme_dark-alternateBright";
    const generalClass = " cursor-pointer hover:border-theme_dark-highlight border-2 rounded-md border-theme_dark-alternateBright bg-theme_dark-alternateBright px-6 py-4 text-theme_dark shadow-md ";

   
    return (
            <>
        
          
              
             
              {/*When post is displayed in subforum page */}
              {!props.open  && (
                  <div className = "bg-theme_dark px-6 py-4 text-theme_dark-brighter text-left ">
                <div  className = { generalClass  }>
                     
                     <Link to={{pathname:'/posts/'+props._id,state:{postId:props._id}}} >
                    <PostContent {...props}/>                
                                        
                  </Link>
                </div>
                </div>
              )}
            
            <div>

               {/*When post is opened seperately */}
              {props.open === true && (
                <div className = {openClass}>
                  <PostContent {...props}/>
                </div>
              )
                
              }
              
            </div>
    </>   
    );
}
export default Thread;