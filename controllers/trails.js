const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Trails = require('../models/Trails');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const withAuth = require('../utils/auth');
const User = require('../models/User');

// Get Trails List
router.get('/', (req, res) => 
Trails.findAll()
.then(trails => {
    res.render('trails', {
        trails
    });
})
.catch(err => console.log(err)));

//display add trial form
router.get('/add', (req, res) => res.render('add'));

//Route to add trail
router.post('/add', (req, res) => {

let { id, location, length, blog } = req.body.data;
let nayme = req.body.data.name
let errors = [];

//validate fields
if(!nayme) {
    errors.push({ text: 'please insert a name'});
}
if(!location) {
    errors.push({ text: 'please insert a location'});
}
if(!length) {
    errors.push({ text: 'please insert a distance'});
}
if(!length) {
    errors.push({ text: 'please insert a blog post'});
}

console.log("this is it", req.body)

//check for errors
if(errors.length > 0) {
    res.render('add', {
        errors,
        nayme,
        location,
        length,
        blog
    });
} else{
//insert into table
console.log(id, nayme, location)
Trails.create({
    id,
    nayme,
    location,
    length,
    blog
})


.then(trails => res.redirect('/'))
.catch(err => console.log(err));
}   
});

//search for trips
router.get('/', (req, res) => {
    const { term } = req.query;

    Trails.findAll({ where: { location: { [Op.like]: '%' + term + '%' }}})
    .then(trails => res.render('trails', { trails }))
    .catch(err => console.log(err));
});

router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router;