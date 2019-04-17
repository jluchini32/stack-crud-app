const express = require('express');
const router  = express.Router();
const Sushi  = require('../models/sushi');

//index route
router.get('/', (req, res) =>{
Sushi.find({}, (error, createASushi) => {

    if(error){
    res.send(error);
    } else {
        res.render('index.ejs', {sushi: createASushi});
    }
})
});


//create route
router.post('/', (req, res) => {
console.log(req.body,"<-- req.body will have the contents of the form");

if(req.body.isRaw === 'on'){
    req.body.isRaw = true;
} else{
    req.body.isRaw = false
}

Sushi.create(req.body, (err, createASushi) => {
    if(err){
        res.send(err);
    } else {
        res.redirect('/sushi');
    }
});
});

//new route
router.get('/new', (req, res) => {
    res.render('new.ejs');
   });
module.exports = router; 