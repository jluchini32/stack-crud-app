const express = require('express');
const router  = express.Router();
const Sushi  = require('../models/sushi');




//new route
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

router.get('/new', (req, res) => {
    res.render('new.ejs');
   });
module.exports = router; 