import Thread from "./Thread";
import CommentForm from "./CommentForm";
import RootCommentContext from "./RootCommentContext";
import {useState, useEffect} from 'react';
import Comments from "./Comments";
import axios from "axios";



function Comment(props){

    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [commentsTotals, setCommentsTotals] = useState(null);
    const [userVotes, setUserVotes] = useState(null);


    function refreshComments(){
        axios.get('http://localhost:4000/comments/root/' + props.id)
        .then(response => {
            setComments(response.data);
          
            
        });
       
    };

    // function refreshVotes(){
    //     const commentsIds = [post._id, ...comments.map(c => c._id) ];
    //     axios.post('http://localhost:4000/votes', {postsIds: commentsIds}, {withCredentials: true})
    //         .then(response => {
    //             setCommentsTotals(response.data.postsTotals);
    //             setUserVotes(response.data.userVotes);
    //         })

    // }

    useEffect(() => {

        if(props.comment){
            setPost(props.post);
        }
        else{
            axios.get('http://localhost:4000/postthread/' + props.id)
            .then(response => {
                setPost(response.data);
                
                
            });
    
            refreshComments();
        }
       

        
       
    },[props.id, props.comment]);



    // axios.get('http://localhost:4000/postthread/' + props.id)
    // .then(response => {
    //     setPost(response.data);
        
        
    // });

    // refreshComments();








    // useEffect(() => {
    //     refreshVotes();
    // }, [comments.length]);
    return(
    
    <div className = "bg-theme_dark-alternateBright">
        {post && (
               <Thread {...post} open={true}/>
                   
           )}
         {!!post && !!post._id && (
                            <>
                            <hr className = "border-theme_dark-alternateBright my-4"/>
                            <CommentForm onSubmit = {() => refreshComments()}
                                         rootId = {post._id} 
                                         parentId = {post._id}
                                         showAuthor = {true}/>



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