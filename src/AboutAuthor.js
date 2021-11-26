
import FemaleAvatar from './female_avatar.svg';

import { useState,  useEffect } from "react";



import axios from "axios";


function AboutAuthor(props)
{
    const username = props.author;
    console.log(username);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
   
    const [school, setSchool] = useState('');
    const [department, setDepartment] = useState('');
    const [biography, setBiography] = useState('');
    useEffect(() => {
       
        console.log(username);
        axios.get('http://localhost:4000/author' ,{
                 params: {
                        username: username
                              }
                            })       
              .then((response) => {
                

                //  console.log(response.data);
                //  console.log(response.data.biography);

                {response && 
                
                    setBiography(response.data.biography);
                    setDepartment(response.data.department);
                    setSchool(response.data.school);
                    setEmail(response.data.email);
                    setName(response.data.name);
                }
                
              });
    
      }, [username,name,email,school,department,biography]);
       
      
     


    return(
        <>
        <div className = "border border-theme_dark rounded-md px-10 mx-7 shadow-md">
            {/* <h1 className = "text-theme_dark-highlight mt-2 text-2xl font-bold text-center mb-2">About {user}</h1>
            <div className = "flex justify-center">
                <img src = {FemaleAvatar} alt = "" className = "w-2/5 h-2/5 "/>
            </div>
            <div className = "my-3 p-3 border-t-2 ">
                <p className = "text-sm leading-6 text-white opacity-70"> Hello I am xyz from abcd. I like to do this and that</p>
                <p className = "text-sm leading-6 text-white opacity-70 italic"> Currently studying xyz and abcs at efgh</p>
            </div> */}
              <h1 className = "text-theme_dark-highlight mt-2 text-2xl font-bold text-center mb-2">About {username}</h1>
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
           
        </div>
        </>
    )
}

export default AboutAuthor;