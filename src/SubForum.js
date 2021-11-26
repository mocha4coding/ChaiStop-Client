import ForumHeader from './ForumHeader';
import PostThread from './PostThread';
import PostsListing from './PostsListing';
import {useContext} from 'react';
import UserContext from './UserContext';
import HomePage from './HomePage';

//board
function SubForum(){ 

    const user = useContext(UserContext);
   
    const username = user.username; //the user who is logged in

    return(
    <>
        {username && (
            <>
              <ForumHeader/> {/*BoardHeader */}
            <PostThread/> {/*PostForm */}
            <PostsListing/>

            </>
        )}
        {
            !username && (
                <HomePage/>
            )
        }
      

    </>);
}
export default SubForum;