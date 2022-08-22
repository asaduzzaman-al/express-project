const path = require('path');

// Home Page Controllers
const showHomepage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}
// Menu Page Controllers
const showMenupage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/menu.html'));
}
// Home Page Controllers
const showLocationpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/location.html'));
}
// Blog Page Controllers
const showBlogpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/archive.html'));
}
// Reservation Page Controllers
const showReservationpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/reservation.html'));
}
// Staff Page Controllers
const showStaffpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/staff.html'));
}
// News Page Controllers
const showNewspage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/news.html'));
}
// Gallery Page Controllers
const showGallerypage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/gallery.html'));
}
// Revorder controllers
const showRevorder = (req, res) =>{
    res.status(200).json(req.body);
}

// export controllers
module.exports ={
    showHomepage,
    showMenupage,
    showLocationpage,
    showBlogpage,
    showReservationpage,
    showStaffpage,
    showNewspage,
    showGallerypage,
    showRevorder

}