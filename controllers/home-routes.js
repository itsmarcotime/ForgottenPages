const router = require('express').Router();
const {User, Character} = require('../models');

router.get('/', (req, res) => {
    console.log(req.session);
    
    res.render("homepage", { loggedIn: req.session.loggedIn });
})

router.get('/add-character', (req, res) => {
    
    res.render("new-character",
    { loggedIn: req.session.loggedIn});
})

router.post("/logout", (req, res) => {
	console.log(req.session);
	if (req.session.loggedIn) {
		req.session.destroy(() => {
			res.status(204).end();
		});
	} else {
		res.status(404).end();
	}
});

module.exports = router;