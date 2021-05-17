const express = require('express');
const router = express.Router();
const db = require('../config/connection');
const Trails = require('../models/Trails');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

// Get Trails List
router.get('/', (req, res) => 
Trails.findAll()
.then(trails => {
    res.render('trails', {
        trails
    });
})
.catch(err => console.log(err)));

//display add blog form
router.get('/add', (req, res) => res.render('add'));

//Route to add trail
router.post('/add', (req, res) => {

let { id, nayme, location, length, blog } = req.body;
let errors = [];

//validate fields
if(!nayme) {
    errors.push({ text: 'please insert a name'});
}
if(!location) {
    errors.push({ text: 'please insert a location'});
}
if(!length) {
    errors.push({ text: 'please insert a trail length'});
}
if(!blog) {
    errors.push({ text: 'please enter a blog post'});
}

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
Trails.create({
    id,
    nayme,
    location,
    length,
    blog
})

.then(trails => res.redirect('/trails'))
.catch(err => console.log(err));
}   
});

//search for trips
router.get('/search', (req, res) => {
    const { term } = req.query;

    Trails.findAll({ where: { location: { [Op.like]: '%' + term + '%' }}})
    .then(trails => res.render('trails', { trails }))
    .catch(err => console.log(err));
});

module.exports = router;