import { BookmarkIcon } from "@heroicons/react/solid";
import TimeAgo from "timeago-react";
import UserContext from "./UserContext";
import { useState ,useContext} from "react";
import axios from "axios";
function PostContent(props)
{
  const user = useContext(UserContext);
  const [bookMarkClass, setBookMarkClass] = useState(" text-theme_border"); 
  function savePost()
  {
      console.log(props);
      const data = {postId: props._id, username : user.username};
      axios.post('https://chai-stop-server.herokuapp.com/bookmarks', data, {withCredentials:true})
      .then(() => {
        // user.setUser({username});
        // user.setEmail({email});
        // user.setSchool({school});
        // user.setDepartment({department});
        
      });
      setBookMarkClass("text-theme_dark-highlight ");
  }
  return(
    <div>
      <div className = "flex">
      <h5 >
         
            <div className = "flex text-theme_border text-xs opacity-50"> 
                  Posted by {props.author}
                   <TimeAgo datetime = {props.postedAt}/>
                 
            </div>

      </h5>
      {user.username && (
          <BookmarkIcon className = {bookMarkClass + " w-7 h-5 ml-auto "} onClick = {() => savePost()}/> 
      )}
      
      </div>
      <h2 className = "font-bold text-xl mb-3 text-white opacity-80 ">{props.title}</h2>
      <div className = "text-sm leading-6 text-white opacity-70">
        <p>
          {props.body}
        </p>
      </div>
    </div>
  );
}


export default PostContent;