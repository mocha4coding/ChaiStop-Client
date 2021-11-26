
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from "@heroicons/react/solid";
import axios from "axios";
import {useContext} from 'react';
import RootCommentContext from "./RootCommentContext";

function Voting(props)
{


    const buttonClassName =  "mt-2 mx-1 h-6 w-6 bg-theme_dark text-theme_dark-brighter rounded-full hover:text-theme_dark-highlight";



    


    return(
    <div className = {'inline flex ' }>
       
        {/* Upvote */}
        <ArrowCircleUpIcon className ={buttonClassName}
                onClick = {() => {}}/>
        
        {/* Number of Votes */}
        <span className = {'my-1 py-2 text-xs font-bold'}>0</span>

        {/* DownVote */}
        <ArrowCircleDownIcon className = {buttonClassName}
          onClick = {() => {}}/>

       
    </div>
    );
}

export default Voting;