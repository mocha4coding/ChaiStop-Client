//For rendering the contents of a post in a modal pop up


import axios from "axios";
import {useState, useEffect} from 'react';
import PostContent from "./PostContent";
import ClickOutHandler from "react-clickout-handler";
import {XIcon} from '@heroicons/react/outline';
import CommentForm from "./CommentForm";
import Comments from "./Comments";

import RootCommentContext from './RootCommentContext';
import { comment } from "purgecss/node_modules/postcss";
import Comment from "./Comment";
function PostModal(props)
{
    
   

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const visibleClass = props.open ? 'block' : 'hidden';

    function refreshComments(){
        axios.get('https://chaiserver.herokuapp.com/comments/root/' + props.id)
        .then(response => {
            setComments(response.data);
            
            
        });
       
    }

    useEffect(() => {

        axios.get('https://chaiserver.herokuapp.com/postthread/' + props.id)
        .then(response => {
            setPost(response.data);
            
            
        });

        refreshComments();
        
    },[props.id]);


    function close(){
        setPost({});
        props.onClickOut();
    }
    return(
        
        <div className = {"w-screen h-screen fixed top-0 bottom-0 left-0 z-20 flex " + visibleClass} style = {{backgroundColor:'rgba(0,0,0,0.8)'}}>
       
       <ClickOutHandler onClickOut = {() => {}}>
             <div className = "w-4/5 bg-theme_dark-alternateBright  border border-theme_dark rounded-md bg-white p-4 pt-1   text-theme_dark  mx-auto self-center align-middle">
                    <div className = {'text-right'}>
                            <button onClick={() => {close()}} className = {'mr-0'}>
                          
                                <XIcon solid className = {'bg-theme_dark-highlight border border-theme_dark-highlight rounded-md text-theme_dark h-5 w-5 align-right '}/>
                            </button>
                    </div>
                 <div className = "p-2 border-2 border-theme_dark-highlight rounded-md">
                
                    
                    <div
                        className = "block overflow-scroll " 
                        style = {{maxHeight : "calc(100vh - 10rem)"}}>
                        {/* <PostContent open = {true} {...post}/> */}

                        {/* {!!post && !!post._id && (
                            <>
                            <hr className = "border-theme_dark-alternateBright my-4"/>
                            <CommentForm onSubmit = {() => refreshComments()}rootId = {post._id} parentId = {post._id} showAuthor = {true}/>



                            <hr className = "border-theme_dark-alternateBright my-4"/>
                            <RootCommentContext.Provider value = {{refreshComments}}>
                                <Comments parentId = {post._id} rootId = {post._id} comments={comments} />
                            </RootCommentContext.Provider>

                            </>
                        )} */}
                        <Comment post = {post} id = {props.id}/>



                        
                    </div>
                
                 </div>
                 
                 
             </div>
        </ClickOutHandler>
        </div>
        
        
    );
}


export default PostModal;