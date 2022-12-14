const router = require('express').Router();

const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard-routes.js');
const homeRoutes = require('./home-routes.js');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/', homeRoutes);


router.use((req,res,next)=> {res.status(404).render("404", {
    loggedIn: true
})});



module.exports = router;