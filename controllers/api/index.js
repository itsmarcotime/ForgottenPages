const router = require('express').Router();

// create references to routes
const userRoutes = require('./user-routes.js');
const characterRoutes = require('./character-routes.js');

router.use('/users', userRoutes);
router.use('/characters', characterRoutes);

module.exports = router;