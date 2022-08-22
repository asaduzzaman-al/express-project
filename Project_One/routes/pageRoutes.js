const express =require('express');
const path = require('path');
const { showHomepage, showMenupage, showBlogpage, showLocationpage, showReservationpage, showStaffpage, showNewspage, showGallerypage, showRevorder } = require('../controllers/pageControllers');

// init router
const router = express.Router();

// Home Page routes
router.get('/', showHomepage);
// Menu Page routes
router.get('/menu', showMenupage);
// Locations Page routes
router.get('/location', showLocationpage);
router.get('/blog', showBlogpage);
// Blog Page routes
router.get('/reservation', showReservationpage);
router.get('/staff', showStaffpage);
// News Page routes
router.get('/news', showNewspage);
// rev-order Page routes
router.post('/rev-order', showRevorder);
// export routes
module.exports=router;