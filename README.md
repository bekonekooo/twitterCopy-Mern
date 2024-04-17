Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:   npm run start npm install

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


-------------------------------------------------------------------------------------------------
Project Description:
I aim to make a twitter app clone that can login out sign in and post photos add friends delete friends and create a profile page for your posts.


Technologies that i will use:

1) Mongo dataBase
2) Express js
3) React 
4) Node js
        FRONTHAND
    I will use React as my framework
    React-Router for navigation
    Formik and Yup for form validation
    Redux-toolkit for state management
    Redux with Persistent for local storage
    React Dropzone for Image uploading
        BACKHAND
        Node js for execute javascript code outside of a web browser(Run time)
        Express js for backhand framework
        MangoDB for managing our database
        Json Web Token for authentication
        Multer for file upload
In order to use the app first you have to change " /.env" of the server side to your own mongodbName so your database will be connected.
MONGO_URL ="mongodb+srv://berkaasfayyaydin:bingo123@cluster0.otianyu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"  berkaasfayyaydin:bingo123@  change this part to your user name and password.

User                        |          Post                     |   Friend (sub doc)
_id=string                  |       _id=string                  |   _id=string 
firstName=string            |       firstName=string            |   firstName=string 
lastName=string             |       lastName=string             |    lastName=string  
email=string                |       email=string                |   picturePath=string Ref 
password=string             |       likes= obejct<string ref>   |    location=string  
picturePath=string Ref      |       picturePath=string Ref      |    occupation=string  
location=string             |       location=string             |
viewedProfile= Number       |       viewedProfile= Number       |
imperessions= number        |       imperessions= number        | 
occupation=string           |        occupation=string          | 
friends =Array of objects           comments=Array of strings


                    images path will be my string ref

 Authenticaiton and authorization

First i will create User model.After that i will handle register authorization.

Endpoints - Authentication

Posts Endpoints (posts.js):
GET /: Retrieve feed posts, requires JWT token for authentication.
GET /:userId/posts: Retrieve posts of a specific user by ID, requires JWT token for authentication.
PATCH /:id/like: Like or unlike a post by ID, requires JWT token for authentication.

Users Endpoints (users.js):
GET /:id: Retrieve user data by ID, requires JWT token for authentication.
GET /:id/friends: Retrieve user's friends, requires JWT token for authentication.
PATCH /:id/:friendId: Add or remove a friend for a user, requires JWT token for authentication.

Authentication Endpoints (auth.js):
POST /login: Authenticate user login.

Operations

Method: GET
Endpoint: /
Permissions: Requires JWT token for authentication.

Method: GET
Endpoint: /:userId/posts
Permissions: Requires JWT token for authentication.

Method: PATCH
Endpoint: /:id/like
Permissions: Requires JWT token for authentication.

Users Endpoints (users.js):
Method: GET
Endpoint: /:id
Permissions: Requires JWT token for authentication.

Method: GET
Endpoint: /:id/friends
Permissions: Requires JWT token for authentication.

Method: PATCH
Endpoint: /:id/:friendId
Permissions: Requires JWT token for authentication.

Authentication Endpoints (auth.js):

Method: POST
Endpoint: /login
Permissions: None


