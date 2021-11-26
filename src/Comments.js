import TimeAgo from 'timeago-react';
import { ChatAltIcon } from "@heroicons/react/solid";
import { useState , useContext} from 'react';
import CommentForm from './CommentForm';
import RootCommentContext from './RootCommentContext';
import Voting from './Voting';

function Comments(props) {

    const [showCommentForm, setShowCommentForm] = useState(false);
  
    const comments = props.comments.filter(comment => props.parentId === comment.parentId);
    const rootCommentInfo = useContext(RootCommentContext);

    return (
      <div className = {'w-full bg-theme_dark-alternateBright'}>
          {comments.map(comment =>{
            const replies = props.comments.filter(reply => reply.parentId === comment._id );
            return(


                <div className = "mb-2">

                    <div className = "flex">
                        <div className = {'bg-theme_dark-highlight w-8 h-8 rounded-full my-auto'}/>
                        <div className = {' my-auto py-1 ml-1.5 text-theme_border opacity-70'}>
                            Posted by <span className = 'font-bold text-theme_border opacity-90'>{comment.author} </span> 
                            <TimeAgo datetime = {comment.postedAt}/>
                        </div>
                    </div>

                    <div className = "border-l-2 border-theme_dark-highlight mt-1 ml-4 p-3">
                        <div className = "px-2 text-sm leading-6 text-white opacity-70">
                            {comment.body}
                        </div>
                        <div>
                            <div className = "flex">
                                {/* <Voting postId = {comment._id}/> */}
                                <button className = "flex hover:text-theme_dark-highlight "
                                        onClick = {() => setShowCommentForm(comment._id)}
                                >
                                    
                                    <ChatAltIcon className = "mt-2 h-6 w-6  mx-1  "/> 
                                    <span className = "my-1 py-2 text-xs">Reply</span>
                                </button>
                            </div>
                            {
                                comment._id === showCommentForm && (
                                    <CommentForm 
                                                showAuthor = {false}
                                                rootId = {props.rootId}
                                                onSubmit = {() => {
                                                                    
                                                                    setShowCommentForm(false);
                                                                    rootCommentInfo.refreshComments(); 
                                                                  }
                                                            }
                                                parentId = {comment._id} 
                                                onCancel = {e => setShowCommentForm(false)}
                                    />
                                )
                            }
                            {replies.length > 0 && (
                                <Comments comments={props.comments} parentId={comment._id} rootId={props.rootId} />
                            )}

                        </div>
                        
                    </div>
                </div>

                );
            })}
          

          
      </div>
    );
  }
  
  export default Comments;