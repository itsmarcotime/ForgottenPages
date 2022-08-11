const router = require('express').Router();
const {User, Character} = require('../models');

router.get('/', (req, res) => {
    
    res.render("homepage");
})

router.get('/add-character', (req, res) => {
    
    res.render("new-character");
})

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;