import UserContext from "./UserContext";
import { useState, useContext, useEffect } from "react";

import AuthInput from "./AuthInput";
import AuthButton from "./AuthButton";
import axios from "axios";

import FemaleAvatar from './female_avatar.svg';

import notAllowed from './notAllowed.svg';
import noData from './noData.svg';


function UserProfile(props)
{
    const user = useContext(UserContext);
    const username = props.match.params.username; 
   console.log('username is ' + username);
    const [email, setEmail] = useState(user.email);
    const [name, setName] = useState(user.name);
   
    const [school, setSchool] = useState(user.school);
    const [department, setDepartment] = useState(user.department);
    const [biography, setBiography] = useState(user.biography);
    const [profileShow, setProfileShow] = useState(true);
    const [messageBody, setMessageBody] = useState('');
    const profileUser = user.username;
    console.log('profileuser is ' + profileUser);



    useEffect(() => {
       
        
        axios.get('https://chai-stop-server.herokuapp.com/profile', {withCredentials:true})
             .then((response) => {
                console.log(response.data);
                setBiography(response.data.biography);
                setDepartment(response.data.department);
                setSchool(response.data.school);
                setEmail(response.data.email);
                setName(response.data.name);
              });
    
      }, []);


      function updateProfile(){
          setProfileShow(false);
      }
      function saveProfile(e){
        e.preventDefault();
        console.log('updated ' + name);
        console.log('updated ' + email);
        console.log('updated ' + school);
        console.log('updated ' + department);
        console.log('updated ' + biography);
        const data = {name, email, school, department,biography, username};
        axios.put('https://chai-stop-server.herokuapp.com/update', data, {withCredentials:true})
        .then(() => {

            setMessageBody('Your profile has been updated successfully');
            // <Redirect to={"/profile/" + username} />
            // user.setUser({username});
            // user.setName({name});
            // user.setEmail({email});
            // user.setSchool({school});
            // user.setDepartment({department});
            // user.setBiography({biography});
            setProfileShow(true);

          });
         
    }






    return(
    <div className = {'bg-theme_dark-alternateBright w-screen h-screen '}>


        {username === profileUser && profileShow &&
        (
          
        <div className = " p-4 text-theme_border ">
            {/* Welcome to your profile {username}! */}
            
            <div className = "bg-theme_dark-alternateBright border-2 border-theme_dark rounded-md bg-white w-1/2 shadow-md p-4 mx-auto mb-3 h-full">
                {/* <div className = "border border-theme_dark rounded-md px-10 mx-7 shadow-md"> */}
                    <h1 className = "text-theme_dark-highlight mt-2 text-2xl font-bold text-center mb-2">{username}</h1>
                    <div className = "flex justify-center">
                        <img src = {FemaleAvatar} alt = "" className = "w-2/5 h-2/5 "/>
                    </div>
                    <div className = "my-3 p-3 border-t-2 ">
                        <p className = "text-sm leading-6 text-white opacity-70"><span className = "font-bold">Name :       </span> {name}</p>
                        <p className = "text-sm leading-6 text-white opacity-70"><span className = "font-bold">Email :      </span> {email}</p>
                        <p className = "text-sm leading-6 text-white opacity-70"><span className = "font-bold">School :     </span> {school}</p>
                        <p className = "text-sm leading-6 text-white opacity-70"><span className = "font-bold">Department : </span> {department}</p>
                        <p className = "text-sm leading-6 text-white opacity-70 italic mt-2"> {biography}</p>
                    </div>
           
                {/* </div> */}
                <div className = "mb-3">
                {/* <Link to = {"/profile/" +username + "/update"}> */}
                <AuthButton solid className = "w-1/2 mx-auto my-2 text-center mx-auto block mb-3" onClick = {updateProfile}>Update Profile</AuthButton>
                {/* </Link> */}
                </div>
            </div>
            
        </div>
        )}
        {username === profileUser && profileShow === false && (
        <>
         <div className = " p-4 text-theme_border ">
           
            
           <div className = "bg-theme_dark-alternateBright border-2 border-theme_dark rounded-md bg-white w-1/2 shadow-md p-4">
               <div className = "text-theme_dark-highlight font-boldt text-2xl opacity-100">{messageBody}</div>
               <p className = "mb-3 font-bold text-2xl text-white opacity-70">Update your profile {username}!</p>
               <label className="mb-5"> 
                   Name
                   <AuthInput type = "text" 
                              className = "mb-2 w-1/2 bg-gray-400 text-theme_dark  " 
                              value = {name} 
                              onChange = {e => setName(e.target.value)} />
               </label>
               <label className="mb-5"> 
                   Email
                   <AuthInput type = "email" 
                              className = "mb-2 w-1/2 bg-gray-400 text-theme_dark  " 
                              value = {email} 
                              onChange = {e => setEmail(e.target.value)} />
               </label>
               <label className="mb-5"> 
                   School
                   <AuthInput type = "school" 
                              className = "mb-2 w-1/2 bg-gray-400 text-theme_dark  " 
                              value = {school} 
                              onChange = {e => setSchool(e.target.value)} />
               </label>
               <label className="mb-5"> 
                   Department
                   <AuthInput type = "text" 
                              className = "mb-2 w-1/2 bg-gray-400 text-theme_dark  " 
                              value = {department} 
                              onChange = {e => setDepartment(e.target.value)} />
               </label>
               <label className="mb-5"> 
                   Your Bio
                   <AuthInput type = "text" 
                              className = "mb-2 w-1/2 bg-gray-400 text-theme_dark  " 
                              value = {biography} 
                              onChange = {e => setBiography(e.target.value)} />
               </label>

               <AuthButton solid className = "w-1/2 mx-auto my-2" onClick = {e => saveProfile(e)}>Save</AuthButton>
           </div>
           
       </div>
        
        
        
        
        
        
        
        
        
        
        
        </>  
         )}


        {
            !profileUser && (
                
                <div className = "bg-theme_dark-alternateBright w-full h-full relative fixed top-0 text-center p-3">
                <p className = "text-theme_border font-bold text-3xl ">
                    Please log in to edit your profile.
                </p>
                <img src = {noData} alt = "" className = "w-4/6 h-4/6 p-4"/>
                </div>
            )
        }
        {
            profileUser && username !== profileUser && (
                <div className = "bg-theme_dark-alternateBright w-full h-full relative fixed top-0 text-center p-3">
                    <p className = "text-theme_border font-bold text-3xl ">
                        Oops! <span className = "text-theme_dark-highlight"> {profileUser} </span> is not allowed to 
                        access profile of <span className = "text-theme_dark-highlight"> {username} </span>
                    </p>.
                    <img src = {notAllowed} alt = "" className = "w-1/2 h-1/2 p-4"/>
                </div>
            )
        }
       
    </div>);
}

export default UserProfile;