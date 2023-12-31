/* 
-----------------------------initial setup--------------------------
------------------------------------------------------------------------

1.visit: console.firebase.google.com
2.create a project (skips google analytics)
3. Register app (create config)
4.npm install firebase
5. add config file to your project
6 DANGER: do not publish or make firebase config to public by pushing those by github

--------------------------------Integration-------------------------
---------------------------------------------------------------------

7. go to docs > build > authentication >web>get started
8. export app from the firebase.config.js file: export default app
9.Login.jsx:import getAuth from firebase/auth
10. create const auth=getAuth(app)

---------------------------------Provider setup----------------------------
----------------------------------------------------------------------------

11. import googleAuthProvider and create a new provider
12.useSignINWithPopup and pass auth and provider
13 activate sign-in method (google, facebook, github,etc...)

----------------------------------------more auth provider---------------
--------------------------------------------------------------------------

1.activate the auth provider (create app,provide, redirect url,client id, client secret)
*/