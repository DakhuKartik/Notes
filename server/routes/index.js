const express = require('express')
const router = express.Router();

const mainControllers = require('../controllers/mainControllers');

// app routes
router.get('/',mainControllers.homepage);
router.get('/about',mainControllers.about);


module.exports = router;