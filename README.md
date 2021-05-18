# takeAhike

##TakeAHike:  
A Full stack web application that serves as a personal hub for all things hiking. Allowing you to keep track of dream hikes, past hikes, connect and exchange information with other hikers, search for new hikes and add them all to your personal account page.

Direct link to app:  
https://p2v2takeahike.herokuapp.com/

Home page  
[Screenshot1](images/Screen Shot 2021-05-17 at 6.22.08 PM.png)

Result:  
In this application we utilized the National Parks API to implement a search for hiking trails. Ultimately, TakeAHike allows the user to keep a list of hikes they want to take. Once the hike is selected, a brief description of the hike including; name, location, style of hike, contact number, operating hours, pictures and entrance fees.

General info  



Technologies used:  
(new technology)

Font Awesome  

Express.js (Server framework)  

Handlebars (Templating engine)  

Heroku (Cloud platform)  

MySQL (RDBMS)  

Node.js (Javascript environment)  

Sequelize (ORM)  

Body Parser  

Dotenv  

Bcrypt  

Body-Parser  

Getting Started  
Prerequisites  
MySQL  
Node.js  

Installing  
If you would like the view the site from a user's point of view, you have the option of viewing the site on Heroku. It is located at <"https://p2v2takeahike.herokuapp.com/">.  

If you would like to run the application locally, please ensure that you have the prerequisites installed, then take the following steps:  
  
Clone this repository to your local machine with git clone <repo-url>.  
Install NPM dependencies by running npm install in the project directory.  
If you use a MySQL username other than root or have a MySQL password, open config/config.json and update these values.  
Log into MySQL Workbench with mysql -u root (substitute your username and add -p <your password> if needed).
Run CREATE DATABASE trails_db;  
Ensure that you are in the root project directory, then run npm start.  
The application will be running at localhost:3000/  
  
Authors  
Sean Bannon, Alexandra Grassl, Andrew Friedman  
  
License  
This project is licensed under the MIT License - see the LICENSE file for details.
