const express =require('express');
const path = require('path');
const { showHomepage, showMenupage, showBlogpage, showLocationpage, showReservationpage, showStaffpage, showNewspage, showGallerypage, showRevorder } = require('../controllers/pageControllers');

// init routes
const router = express.Router();

// Home Page routes
router.get('/', showHomepage);
router.get('/menu', showMenupage);
router.get('/location', showLocationpage);
router.get('/blog', showBlogpage);
router.get('/reservation', showReservationpage);
router.get('/staff', showStaffpage);
router.get('/news', showNewspage);
router.post('/rev-order', showRevorder);
// export routes
module.exports=router;