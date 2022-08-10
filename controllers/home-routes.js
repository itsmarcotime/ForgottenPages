const router = require('express').Router();
const {User, Character} = require('../models');

router.get('/', (req, res) => {
    res.render("homepage")
})



module.exports = router;