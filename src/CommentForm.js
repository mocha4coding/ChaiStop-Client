import {useContext, useState} from "react";
import ThreadTextEditor from "./ThreadTextEditor";
import UserContext from "./UserContext"
import AuthButton from "./AuthButton";
import axios from "axios";
import AuthModalContext from "./AuthModalContext";


function CommentForm(props){
    const user = useContext(UserContext);
    const authModalContext = useContext(AuthModalContext);

    const [CommentBody, setCommentBody] = useState('');

    function postComment(e){
        e.preventDefault();
        const data = {body:CommentBody, parentId:props.parentId, rootId:props.rootId};
        axios.post("https://chaiserver.herokuapp.com/postcomment", data,{withCredentials: true} )
        .then(response => {
            setCommentBody('');
            if(props.onSubmit){
                props.onSubmit();
            }
        }).catch(error => {
            if(error.response.status === 401){
                authModalContext.setShow('login');
            }
        });
    }
    return(
    <div>
        {
            props.showAuthor && (
                <p className = {'text-theme_dark-brighter text-sm mb-2'}> Comment as :<span class = "text-theme_border opacity-50 font-bold text-sm">{user.username} </span></p>
            )
        }
        
        <form onSubmit = {(e) => postComment(e)}>
            
            <ThreadTextEditor 
                onChange = {e => setCommentBody(e.target.value)}
                value = {CommentBody}
                placeholder = {'Type your comment here...'}
                className = {"bg-theme_border"}/>
            <div className = {'text-right'}>
              
                {!!props.onCancel && (
                    <AuthButton outline 
                                className = "mr-1"
                                onClick = {e => props.onCancel()}
                    >
                        <span className = "text-theme_dark">    Cancel </span>
                    </AuthButton>
                )

                }
                <AuthButton 
                   className = "mb-1 mr-1">
                    Comment
                </AuthButton>
            </div>
        </form>
    </div>);
}

export default CommentForm;