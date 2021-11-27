import Thread from "./Thread";
import CommentForm from "./CommentForm";
import RootCommentContext from "./RootCommentContext";
import {useState, useEffect} from 'react';
import Comments from "./Comments";
import axios from "axios";



function Comment(props){

    //states
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
   


    function refreshComments(){
        axios.get('https://chaiserver.herokuapp.com/comments/root/' + props.id)
        .then(response => {
            setComments(response.data);
          
            
        });
       
    };

 
    useEffect(() => {

        if(props.comment){
            setPost(props.post);
        }
        else{
            axios.get('https://chaiserver.herokuapp.com/postthread/' + props.id)
            .then(response => {
                setPost(response.data);
                
                
            });
    
            refreshComments();
        }
       

        
       
    },[props.id, props.comment]);



    return(
    
    <div className = "bg-theme_dark-alternateBright">
        {post && (
               <Thread {...post} open={true}/>
                   
           )}
         {!!post && !!post._id && (
                            <>

                            {/* Comment form to post new comments */}
                            <hr className = "border-theme_dark-alternateBright my-4"/>
                            <CommentForm onSubmit = {() => refreshComments()}
                                         rootId = {post._id} 
                                         parentId = {post._id}
                                         showAuthor = {true}/>


                            


                            {/* Replies of comments to comments or the main post. This portion is respondible for rendedring the threading.
                                Each comment has a parent id and a root id. The parent id is the comment/post to which it is a reply. Root_id is 
                                the original post.
                            
                            */}
                            <hr className = "border-theme_dark-brighter my-4"/>
                            {/* <RootCommentContext.Provider value = {{refreshComments, refreshVotes, commentsTotals,userVotes}}> */}
                                               
                            <div className = "theme_dark-alternateBright">
                            <RootCommentContext.Provider value = {{refreshComments}}>
                                <Comments parentId = {post._id} 
                                          rootId = {post._id} 
                                          comments={comments} />
                            </RootCommentContext.Provider>
                            </div>
                            </>
                        )
        }
    </div>
    );
}

export default Comment;