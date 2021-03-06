//CommentPage.js
import { useParams } from 'react-router-dom';

import {useState, useEffect} from 'react';

import axios from 'axios';

import Comment from './Comment';
import AboutAuthor from './AboutAuthor';
function ThreadPage(){
    const {id} = useParams(); //The thread id
    //console.log(id);
    const [post, setPost] = useState({});
    useEffect(() =>{

        axios.get('https://chaiserver.herokuapp.com/postthread/' + id)
        .then(response => setPost(response.data));

        console.log( post.author);
    },[id]);

    
    // w-screen h-screen relative fixed top-0 bottom-0 left-0
    return(
        <>
        <div className = "bg-theme_dark-alternateBright w-screen relative fixed top-0 bottom-0 left-0 p-11">
          
           <div className = "flex">

                {/* The comment form and comment listings  */}
                <div className = " bg-theme_dark-alternateBright flex-1">
                     <Comment id = {id}/>
                </div>

                {/* The about author section */}
                <div className = "max-w-xl">
                    <AboutAuthor author = {post.author}/>
                </div>
           </div>
           
        </div>
       
        </>
    );
}

export default ThreadPage;