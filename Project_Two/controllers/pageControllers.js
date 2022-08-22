const path = require('path');

// Home page Controller
const showHomepage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
}
// About page Controller
const showAboutpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/about.html'));
}
// Destination page Controller
const showDestinationpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/destination.html'));
}
// Hotel page Controller
const showHotelpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/hotel.html'));
}
// Blog page Controller
const shoBlogpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/blog.html'));
}
// Contact page Controller
const shoContactpage = (req, res)=> {
    res.status(200).sendFile(path.join(__dirname, '../public/contact.html'));
}

// hotel Order page controller
const showHotelorder = (req, res) => {
    res.status(200).json(req.body);
}

// exports controllers
module.exports= {
    showHomepage,
    showAboutpage,
    showDestinationpage,
    showHotelpage,
    shoBlogpage,
    shoContactpage,
    showHotelorder
}