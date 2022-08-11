const router = require('express').Router();
const {User, Character} = require('../models');

router.get('/', (req, res) => {
    console.log(session);
    res.render("homepage",{
        
    })
})

router.get('/logout',(req,res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;