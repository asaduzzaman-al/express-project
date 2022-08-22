const express = require('express');
const path = require('path');
const { showHomepage, showAboutpage, showDestinationpage, showHotelpage, shoBlogpage, shoContactpage, showHotelorder } = require('../controllers/pageControllers');

// initt router
const router = express.Router();

// Home Page routes
router.get('/', showHomepage);
router.get('/about', showAboutpage);
router.get('/destination', showDestinationpage);
router.get('/hotel', showHotelpage);
router.get('/blog', shoBlogpage);
router.get('/contact', shoContactpage);
router.post('/hotel-order', showHotelorder);

// export router
module.exports=router;