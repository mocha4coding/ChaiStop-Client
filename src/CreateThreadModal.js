//PostFormModal

//Modal To create threads in a subforum


import ClickOutHandler from "react-clickout-handler";
import AuthButton from "./AuthButton";
import ThreadTextEditor from "./ThreadTextEditor";

import {useState, useContext} from 'react';
import CreateThreadModalContext from "./CreateThreadModalContext";
import { Redirect } from 'react-router-dom';


import {XIcon} from '@heroicons/react/outline';
import axios from "axios";
import AuthModalContext from "./AuthModalContext";

function CreateThreadModal(){

    const modalContext = useContext(CreateThreadModalContext);
    const authModalContext = useContext(AuthModalContext);


    const visibleClass =  modalContext.show !== false ? 'block' : 'hidden';

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [newPostId, setNewPostId] = useState(null);

    //triggered when post button is hit. The contents of the thread are saved into database.
    function createThread(){
        const data = {title, body};
        axios.post('https://chaiserver.herokuapp.com/postthread', data, {withCredentials : true})
            .then(response => {
               
                setNewPostId(response.data._id);
            })
            .catch(error => {
                if(error.response.status === 401){
                    authModalContext.setShow('login');
                }
            });
    }

    //if a new post is created we rediect to its url
    if(newPostId){
        return (<Redirect to = {'/posts/' + newPostId} />);
        
    }
    return(
        <div>
             <div className = {"w-screen h-screen fixed top-0 bottom-0 left-0 z-10 flex " + visibleClass} style = {{backgroundColor:'rgba(0,0,0,0.8)'}}>
             <ClickOutHandler onClickOut={() => {}}>
             {/* <ClickOutHandler onClickOut={() => {modalContext.setShow(false)}}> */}

                
                    <div className = "w-4/5 md:w-2/4  border border-theme_dark rounded-md bg-white p-5 text-theme_dark  mx-auto self-center align-middle">


                        <div className = {'text-right'}>
                            <button onClick={() => {modalContext.setShow(false)}}>
                          
                                <XIcon solid className = {'bg-theme_dark-highlight border border-theme_dark-highlight rounded-md text-theme_dark h-7 w-7 align-right'}/>
                            </button>
                        </div>


                        {/* Thread title */}
                        <h1 className = "text-2xl mb-3" >Create a post:</h1>
                        <input 
                            className = {"border-2  w-full border-theme_dark-brighter bg-theme_brighter rounded-md p-2 my-2 block "} 
                            placeholder = {'Thread Title'} 
                            value = {title}
                            onChange = {e => setTitle(e.target.value)}
                        />


                        {/* Thread Body */}
                        <ThreadTextEditor 
                            value = {body}
                            onChange = {e => setBody(e.target.value)}
                            placeholder = {'Thread Contents(required)'}
                        />


                        {/* Cancel and post buttons */}
                        <div className = {'text-right'}>
                            
                            <AuthButton outline className = {'mr-1'} 
                                        onClick={() => {modalContext.setShow(false)}}
                            >
                                Cancel
                            </AuthButton>

                            
                            <AuthButton
                                onClick = {() => createThread()}
                            >
                                Post
                            </AuthButton>

                        </div>
                        
                    </div>
                </ClickOutHandler>
             </div>
        </div>
    );
}

export default CreateThreadModal;