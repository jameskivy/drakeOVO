const express = require('express');
const router = express.Router();


router.get('/albums', (req, res) => {

    let data = req.app.get("appData");
    let myHTML = "";
    console.log(data);



    res.render('albums', {
        pageTitle: "View All Albums",
        pageId: 'Albums',
        albums: data.albums
    })
})

module.exports = router;