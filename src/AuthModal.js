import AuthInput from "./AuthInput";
import AuthButton from './AuthButton';
import {useState, useContext} from 'react';
import axios from "axios";
import AuthModalContext from "./AuthModalContext";
import ClickOutHandler from 'react-clickout-handler';
import UserContext from "./UserContext";

function AuthModal(props){
    const [modalType, setModalType] = useState('login');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    const [errorBody, setErrorBody] = useState('')
    const modalContext = useContext(AuthModalContext);
    const user = useContext(UserContext);

    const visibleClass = modalContext.show !== false ? 'block' : 'hidden';

    if(modalContext.show && modalContext.show !== modalType) {
        setModalType(modalContext.show);
    }

    function register(e){
       
        e.preventDefault();
        const data = {email, username, password};
        if(password.length < 8 )
        {
            setErrorBody('Password should be atleast 8 characters long');
        }
        else
        {
        axios.post('http://localhost:4000/register', data, {withCredentials:true})
        .then((response) => {
            
           
            user.setUser({username});
            modalContext.setShow(false);
            setEmail('');
            setPassword('');
            setUsername('');
          })
          .catch((error) =>{
            
             setErrorBody('Username already exists.Try a different one.');
          });
        }
    }

    function login() {
        
        const data = {username,password};
        axios.post('http://localhost:4000/login', data, {withCredentials:true})
        .then(() => {
            modalContext.setShow(false);
            user.setUser({username})
          })
        .catch((error) =>{
           
            setErrorBody('Incorrect username or password');
         });
        ;
      }
    
    return (
        <div className = {"w-screen h-screen  fixed top-0 bottom-0 left-0 z-20 flex " + visibleClass} style = {{backgroundColor:'rgba(0,0,0,0.95)'}}>
           <ClickOutHandler onClickOut={() => modalContext.setShow(false)}>

           
                <div className = "w-4/5 sm:w-1/3  border border-theme_dark rounded-md bg-white p-5 text-theme_dark  mx-auto self-center align-middle">

                
                        <div className = ""><span className = "text-red-700">{errorBody}</span></div>
               
                {modalType === 'login' && (
                
                    <div>
                        <h1 className = "text-2xl mb-3" > Login</h1>
                    </div>)
                }
                {modalType === 'register' && (
                
                    <div>
                        <h1 className = "text-2xl mb-3"> Register</h1>
                        <label>
                            Email
                            <AuthInput type = "email" className = "mb-2 w-full " placeholder = "email (Eg: abc@xyz.com)" value = {email} onChange = {e => setEmail(e.target.value)} />
                        </label>
                    </div>)
                }
                <label>
                Username
                <AuthInput type = "text" className = "mb-2 w-full " placeholder = "username (Eg: MOni_4)" value = {username} onChange = {e => setUsername(e.target.value)} />
                </label>

                <label>
                Password
                <AuthInput type = "password" className = "mb-4 w-full " placeholder = "password (Eg: xyz1234)" value = {password} onChange = {e => setPassword(e.target.value)} />
                </label>


                {modalType === 'login' && (
                
                    <div>
                        <AuthButton outline className = "w-full " onClick = {() => login()}>Log In</AuthButton>
                        <div>
                            Don't have an account? <button className = "font-bold" onClick={() => {modalContext.setShow('register'); setErrorBody('');}}>Sign Up</button>
                        </div>
                    </div>)
                }
                {modalType === 'register' && (
                
                    <div>
                        <AuthButton outline className = "w-full " onClick = {e => register(e)}>Sign Up</AuthButton>
                        <div>
                            Already have an account? <button className = "font-bold" onClick={() => {modalContext.setShow('login'); setErrorBody(''); }}>Log In</button>
                        </div>
                    </div>)
                }
                </div>
            </ClickOutHandler>
        </div>
    );
}
export default AuthModal;