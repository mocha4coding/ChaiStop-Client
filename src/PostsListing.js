import Thread from "./Thread";
import {useState, useEffect} from 'react';
import axios from 'axios';


function PostsListing(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
           
        axios.get('http://localhost:4000/postthread', {withCredentials:true})
        .then(response => setPosts(response.data));
    
      }, []);
    return(
        <div>
          
          {posts.map(post => (
            //  {/*Post */}
            <Thread {...post}/>
            
          ))}
        
           
        </div>
    );
}

export default PostsListing;