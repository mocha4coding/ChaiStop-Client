import SubForum from './SubForum'; //Board
import ThreadPage from './ThreadPage'; //CommentPage
import UserProfile from './UserProfile';//user profile page
import {useState, useEffect} from "react";
import {
    Switch, 
    Route,
    useLocation,
    
  } from 'react-router-dom';
import PostModal from './PostModal';
import SavedPosts from './SavedPosts';

import HomePage from './HomePage';
import MyPosts from './MyPosts';

function RoutingSwitch(){
    let location = useLocation();
    const [postOpen, setPostOpen] = useState(false);
    //console.log(location);    
    let postId = null;


    
    if(location.state && location.state.postId){
        location.pathname = '/';
        postId = location.state.postId;
    }
    

    if (location.state && location.state.postId) {
        location.pathname = '/';
        if (postOpen) {
        postId = location.state.postId;
        } else {
        location.state.postId = null;
        }

    }

    // If post is open we pass the post id
    useEffect(() => {
        setPostOpen(true);
      }, [postId]);
    

    //If post is closed we want the post id to be null
      useEffect(() => {
        postId = null;
      }, [postOpen]);


    return(

        <div>
            {postId && (
                    <div>

                        <PostModal id = {postId} open = {postOpen} onClickOut = {() => setPostOpen(false)}/>
                    </div>
                )}
            <Switch location = {location}>
                
                <Route exact path = "/" component ={SubForum} /> 
                <Route exact path = "/home" component = {HomePage}/> 
                <Route exact path = {"/posts/:id"} component = {ThreadPage}/> 
                <Route exact path = {"/profile/:username"} component = {UserProfile}/> 
             
                <Route exact path = {"/bookmarks/:username"} component = {SavedPosts}/>
                <Route exact path = {"/myposts/:username"} component = {MyPosts}/>
            </Switch>
        </div>
    );
}

export default RoutingSwitch;