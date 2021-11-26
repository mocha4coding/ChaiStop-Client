import UserContext from "./UserContext";
import { useContext } from "react";



import MyPostsListing from "./MyPostsListing";
import notAllowed from './notAllowed.svg';
import noData from './noData.svg';

function MyPosts(props)
{
    const user = useContext(UserContext);
    const username = props.match.params.username; //the user whose bookmarks we are trying to fetch
    const profileUser = user.username; //the user who is logged in
    return(
        <div>
             {username === profileUser && 
            (
            <div className = " text-center p-4 bg-theme_dark-alternateBright w-full h-full">
                
                
                <div className = "text-theme_border font-bold text-3xl my-3">Posts you have written are here <span className = "text-theme_dark-highlight">{username}!</span> </div>
                
                <div className = "flex">
                    <div className = "flex-1">
                    <MyPostsListing username = {username}/>
                    </div>
                   
                </div>
                  

           </div>
   
            )}
            {
                !profileUser && (
                    <div className = "bg-theme_dark-alternateBright w-full h-full relative fixed top-0 text-center p-3">
                        <p className = "text-theme_border font-bold text-3xl ">
                            Please log in to view your saved posts.
                        </p>
                        <img src = {noData} alt = "" className = "w-4/6 h-4/6 p-4"/>
                    </div>
                    
                )
            }
            {
                profileUser && username !== profileUser && (
                    <div className = "bg-theme_dark-alternateBright w-full h-full relative fixed top-0 text-center p-3">
                        <p className = "text-theme_border font-bold text-3xl ">
                            Oops! <span className = "text-theme_dark-highlight"> {profileUser} </span> is not allowed to 
                            access profile of <span className = "text-theme_dark-highlight"> {username} </span>
                        </p>.
                        <img src = {notAllowed} alt = "" className = "w-1/2 h-1/2 p-4"/>
                    </div>
                )
            }
           
            
        </div>
    );
}

export default MyPosts;