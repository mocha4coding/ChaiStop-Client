![Slide1](https://user-images.githubusercontent.com/48448060/143718690-2c27d066-6470-41e1-88d5-8e0187f2635b.JPG)


# Contents
1. About the project
2. Project Links
3. Features
4. Project Structure


# About the project
I built this as project as my entry for Microsoft Engage FTE-2021. This is basically an online community for students. During the pandemic, the one thing we miss is hanging out with friends at chai-stalls where we used to have countless discussions on literally anything related to our college life , be it a college fest, normal academic doubts or may be just getting to know our batchmates . We all had our favourite chai-stalls close to our campuses. It is not possible to replicate those moments we create in a real life chai-stop virtually. But this community can act as an equally favorite socializing hub in the digital world.

# Project Links
This repo is the frontend code of the project. You can access the backend code [here](https://github.com/mocha4coding/ChaiStop-server).
The entire project is live hosted [https://chai-stop.herokuapp.com/](https://chai-stop.herokuapp.com/). The website is not fully responsive yet. Hence please avoid accessing the website on small screens. You can watch the demo video of the project [here](https://vimeo.com/650750647). 

# Features

![Slide2](https://user-images.githubusercontent.com/48448060/143734397-eae4ead5-0031-45fe-afc9-0ac310fb78a9.JPG)
![Slide3](https://user-images.githubusercontent.com/48448060/143734399-e0e007f6-60d8-4e1b-8891-cef7769b9e0c.JPG)
![Slide4](https://user-images.githubusercontent.com/48448060/143734400-7557cd0c-430f-4be5-be6c-0f655b15f9b1.JPG)
![Slide5](https://user-images.githubusercontent.com/48448060/143734401-3945f0d1-57ba-4b52-8c1c-3316a9aecd9b.JPG)
![Slide6](https://user-images.githubusercontent.com/48448060/143734402-5a5d1b9a-ed34-43dd-b489-b1e3c5164e2b.JPG)
![Slide7](https://user-images.githubusercontent.com/48448060/143734404-6971d9e9-ee52-42ca-8cc9-f1ca56168e45.JPG)
![Slide8](https://user-images.githubusercontent.com/48448060/143734405-b9c21537-de94-4bb8-886f-b10da5984134.JPG)
![Slide9](https://user-images.githubusercontent.com/48448060/143734407-63076820-c7a9-4269-aa99-00a2bb78b850.JPG)
![Slide10](https://user-images.githubusercontent.com/48448060/143734408-060c691e-3599-4f52-bc40-4bc09fcfedce.JPG)
![Slide11](https://user-images.githubusercontent.com/48448060/143734409-288c28ba-21ae-45d1-b014-64c4f6d62d4c.JPG)
![Slide12](https://user-images.githubusercontent.com/48448060/143734410-ba0516f3-56d1-48f3-ab72-ae3231d01f2f.JPG)
![Slide13](https://user-images.githubusercontent.com/48448060/143734411-7f20f19d-3861-4c03-a984-35c34444c67a.JPG)
![Slide14](https://user-images.githubusercontent.com/48448060/143734412-7e6ee99f-52e5-4f89-a424-5f7c2cdc396e.JPG)
![Slide15](https://user-images.githubusercontent.com/48448060/143734413-a1f604b2-7885-4a6f-9e62-23b3c4d2d70d.JPG)
![Slide16](https://user-images.githubusercontent.com/48448060/143734415-c7d1ad70-e2e9-4b1e-9ee0-3760dc9f18ce.JPG)
![Slide17](https://user-images.githubusercontent.com/48448060/143734416-eb7a04a3-3d43-419c-8ede-b1da2bd840c5.JPG)
![Slide18](https://user-images.githubusercontent.com/48448060/143734417-30a13d5b-72b1-481e-b877-abc03b5bad19.JPG)
![Slide19](https://user-images.githubusercontent.com/48448060/143734418-5816ce73-266e-41ca-85f4-b869cf88d52c.JPG)
![Slide20](https://user-images.githubusercontent.com/48448060/143734420-cb96202b-680b-4aa9-b407-d1a917115185.JPG)
![Slide21](https://user-images.githubusercontent.com/48448060/143734421-849c241d-e677-4ea7-9378-e935153646e6.JPG)
![Slide22](https://user-images.githubusercontent.com/48448060/143734422-29686888-d38e-48fc-a3a2-763bd87fbf9c.JPG)
![Slide23](https://user-images.githubusercontent.com/48448060/143734423-7911b04f-d566-4c8b-a381-64e50e648a7e.JPG)
![Slide24](https://user-images.githubusercontent.com/48448060/143734424-53b7f051-575d-4a98-9317-46c901d9e038.JPG)

# Project Structure

### Components involved in authentication:
* AuthModal.js : Handles the authentication box that pops up on clicking login/sign up button in header and also in other instances.
* AuthModalContext.js


### Components involved in thread creation:
* PostThread.js : The Post thread bar in forum dashboard which on click triggers the createThreadModal
* CreateThreadModal.js : Handles the thread creation pop up
* CreateThreadModalContext.js

### Components involved in displaying posts(threads)
* PostModal.js : As a pop up 
* PostsListing.js : Lists the posts in popup and in homepage [after logging in].
* PostContent.js : Displays the post body contents (author, title, thread body, post creation timing)
* ThreadContent.js : Handles how the post will be displayed when in pop up and when opened seperately in a new tab.
* ThreadPage.js : Involved in displaying thread contents when opened seprately in a new tab and not as a pop up.
* SavedPosts.js : Can be accessed only when the user is logged in. Handles the posts saved by user.
* SavedPostsListing.js : Lists the posts saved by the user
* MyPosts.js : Can be accessed only when the user is logged in. Handles the posts written by user.
* MyPostsListing.js: Lists the posts written by the user

### Components responsible for commenting and threading in comments section
* Comment.js : Renders each comment
* Comments.js : Renders the string of comments, the threading of comments.
* CommentForm.js : For composing the comment.






