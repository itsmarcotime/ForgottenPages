const router = require('express').Router();
const {User, Character} = require('../../models');
const { findAll } = require('../../models/Character');

router.get('/',(req,res) => {
    User.findAll({
        attributes: {exclude:['password']}
    }).then((dbUserData) => {res.json(dbUserData)})
    .catch((err) => {console.log(err); res.status(500).json(err)});
})

router.post('/',(req,res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }).then((dbUserData) => {res.json(dbUserData)})
    .catch((err) => {console.log(err); res.status(500).json(err)});

}) 

module.exports = router;