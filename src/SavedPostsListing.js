import Thread from "./Thread";
import {useState, useEffect} from 'react';
import axios from 'axios';


function SavedPostsListing(props){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const username = props.username;
        
        axios.get('http://localhost:4000/savedpost' ,{
                 params: {
                        username: username
                              }
                            })
              .then((response) => {
                setPosts(response.data);
                // console.log(response);
              });
    
      }, []);
    return(
        <div>
          
          {posts.map(post => (
            //  {/*Post */}
            <Thread {...post.postId} />
            
          ))}
        
           
        </div>
    );
}

export default SavedPostsListing;