# Just Tech News
* Object-Relational Mapping (ORM)
* Model-View-Controller (MVC)

## Description
This app shows the tech news posted by users. Users can login to create/edit/delete posts, as well as make new comments and upvotes to current posts. 

## Installation
```
npm init -y
npm install express sequelize mysql2 dotenv
mysql -u root -p
npm i jest -D   
npm i express-session connect-session-sequelize
source db/schema.sql
quit
npm run seed 
npm start
```

## Application deployed on Heroku
* [Heroku link](https://enigmatic-depths-94059.herokuapp.com/)
* Deploy with seeds to heroku:
```
heroku create
git push heroku main
heroku run node seeds/index.js 
```
