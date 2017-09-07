
====================
Created and tested app in Google Crome browser:

Technologies used:
=================

react
react-router v4
redux
data stored in html5 localstorage.
bootstrap 

App defination:
===============
User can create signup by following 4 steps.
	> profile Details
	> Login Details
	> Image Upload
	> Show all filed details and finish it.
	after finishing user will redirect to home page.
user can login using created email and password.
user will redirect to Home page.
On Home page 
	Welcome message shown with first name and last name.
	user can view his profile.
	user can logout.

some features added:
===================

-if you enter home page without login , you will redirect to Login page.	
first of all user need to signup 
- where 4 steps user have to complet to signup.
login with email and password.
you will redirect to Home page.
Log out will redirect to login page.
show profile you can see all the user details.

technologies used to make Application:
======================================
state management - redux
component creation - react
some UI - bootstrap
others: html, css


some points note:
=================
> i didn't do redux validation because of time constrain but user can not be able to login with wrong email and password (message is not given but i prevented).
> user can not signup with blank fields.
>image upload and save in redux state but i stored image in html localstorage so, browser is become to heavy to response. 
you can check it in imageUpload.js file line number 53.
to uncomment line #53 and comment line #54.