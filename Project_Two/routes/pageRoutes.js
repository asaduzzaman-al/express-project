const express = require('express');
const path = require('path');
const { showHomepage, showAboutpage, showDestinationpage, showHotelpage, shoBlogpage, shoContactpage, showHotelorder } = require('../controllers/pageControllers');

// initt router
const router = express.Router();

// Home Page routes
router.get('/', showHomepage);
// About Page routes
router.get('/about', showAboutpage);
// Destination Page routes
router.get('/destination', showDestinationpage);
// hotel Page routes
router.get('/hotel', showHotelpage);
// Blog Page routes
router.get('/blog', shoBlogpage);
// Contact Page routes
router.get('/contact', shoContactpage);
//Hotel order routes
router.post('/hotel-order', showHotelorder);

// export router
module.exports=router;