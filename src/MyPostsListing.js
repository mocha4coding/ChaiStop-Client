import Thread from "./Thread";
import {useState, useEffect} from 'react';
import axios from 'axios';


function MyPostsListing(props){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const username = props.username;
        
        axios.get('http://localhost:4000/userposts' , 
              {
                params: {
                  username: username
                }
                
              })
              .then((response) => {
                setPosts(response.data);
                console.log(response.data);
              });
    
      }, []);
    return(
        <div>
          
          {posts.map(post => (
            //  {/*Post */}
            <Thread {...post} />
            
          ))}
        
           
        </div>
    );
}

export default MyPostsListing;