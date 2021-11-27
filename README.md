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
The entire project is live hosted [https://chai-stop.herokuapp.com/](https://chai-stop.herokuapp.com/). The website is not fully responsive yet. Hence please avoid accessing the website on small screens. You can watch the demo video of the project [here](https://drive.google.com/file/d/1Mf4VL4bycc4LKFekrYYhKHkAq6AseYRh/view?usp=sharing). 

# Features

![Slide2](https://user-images.githubusercontent.com/48448060/143718720-5e7d017e-c951-4453-af3b-daff2bbec159.JPG)
![Slide3](https://user-images.githubusercontent.com/48448060/143718722-c9b3901d-fbf3-40e1-9779-06b6394b7b46.JPG)
![Slide4](https://user-images.githubusercontent.com/48448060/143718723-f9822e0f-4ee9-406e-a47b-a4b03199929d.JPG)
![Slide5](https://user-images.githubusercontent.com/48448060/143718724-e9b9a7fe-ae8b-4f23-aef9-0d9308189445.JPG)
![Slide6](https://user-images.githubusercontent.com/48448060/143718725-36bca2c6-b63e-4326-94be-9b7f8399e6a3.JPG)
![Slide7](https://user-images.githubusercontent.com/48448060/143718726-2bac4e1f-d8f7-4c04-9114-5565198298d8.JPG)
![Slide8](https://user-images.githubusercontent.com/48448060/143718727-03f77127-377f-47f1-b0d5-dc2431d7adc2.JPG)
![Slide9](https://user-images.githubusercontent.com/48448060/143718728-21f368ea-bb97-491f-bb3e-6d30f6581b6f.JPG)
![Slide10](https://user-images.githubusercontent.com/48448060/143718730-e6cad98b-cdff-4a4b-865d-a7eafe39f194.JPG)
![Slide11](https://user-images.githubusercontent.com/48448060/143718731-e4ad1ce8-7c9f-4e3e-86bd-0413ac681fb1.JPG)
![Slide12](https://user-images.githubusercontent.com/48448060/143718732-87753bf6-4290-420f-a67c-37e7ee387594.JPG)
![Slide13](https://user-images.githubusercontent.com/48448060/143718733-1faf84c7-707c-4ae2-a244-d5f05dcc3428.JPG)
![Slide14](https://user-images.githubusercontent.com/48448060/143718734-5a0441b8-3fa9-4bdb-8ff4-035ce6249ba0.JPG)
![Slide15](https://user-images.githubusercontent.com/48448060/143718736-a9e43051-b053-4e79-9281-2e25bdbd2f87.JPG)
![Slide16](https://user-images.githubusercontent.com/48448060/143718740-a149f3b9-72a4-446e-b76d-d972cc068f25.JPG)
![Slide17](https://user-images.githubusercontent.com/48448060/143718741-3beedad3-850e-46cd-894c-3e6e2d422c68.JPG)
![Slide18](https://user-images.githubusercontent.com/48448060/143718742-1ca6b753-4e03-4c28-8dd6-5614d3a3cbcb.JPG)
![Slide19](https://user-images.githubusercontent.com/48448060/143718744-1b73a674-8e30-401a-a017-b868ad3b8214.JPG)
![Slide20](https://user-images.githubusercontent.com/48448060/143718745-b557d6fe-bfa6-44e7-82a4-80f992c645aa.JPG)
![Slide21](https://user-images.githubusercontent.com/48448060/143718747-3c47125e-37f5-4f70-9b1a-fff070e93d1c.JPG)
![Slide22](https://user-images.githubusercontent.com/48448060/143718748-bd9ff2bb-9daa-4e04-b72a-7d0ad6af7107.JPG)
![Slide23](https://user-images.githubusercontent.com/48448060/143718749-27b0b3c4-f83e-46b7-87e4-f33036edd021.JPG)
![Slide24](https://user-images.githubusercontent.com/48448060/143718750-998e4aa5-af5d-4e28-ac1a-48fbac17928b.JPG)

# Project Structure

### Components involved in authentication:
AuthModal.js : Handles the authentication box that pops up on clicking login/sign up button in header and also in other instances.
AuthModalContext.js


### Components involved in thread creation:
PostThread.js : The Post thread bar in forum dashboard which on click triggers the createThreadModal
CreateThreadModal.js : Handles the thread creation pop up
CreateThreadModalContext.js

### Components involved in displaying posts(threads)
PostModal.js : As a pop up 
PostsListing.js : Lists the posts in popup and in homepage [after logging in].
PostContent.js : Displays the post body contents (author, title, thread body, post creation timing)
ThreadContent.js : Handles how the post will be displayed when in pop up and when opened seperately in a new tab.
ThreadPage.js : Involved in displaying thread contents when opened seprately in a new tab and not as a pop up.
SavedPosts.js : Can be accessed only when the user is logged in. Handles the posts saved by user.
SavedPostsListing.js : Lists the posts saved by the user
MyPosts.js : Can be accessed only when the user is logged in. Handles the posts written by user.
MyPostsListing.js: Lists the posts written by the user

### Components responsible for commenting and threading in comments section
Comment.js : Renders each comment
Comments.js : Renders the string of comments, the threading of comments.
CommentForm.js : For composing the comment.






