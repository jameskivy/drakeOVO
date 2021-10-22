const express = require('express');
const router = express.Router();


router.get('/albums', (req, res) => {

    let data = req.app.get("appData");
    let myHTML = "";
    console.log(data);





    res.render('albums',{
        pageTitle: "Albums",
        pageId: 'Albums',
        albums: data.albums
    })
})

router.get('/albums/:albumID', (req, res) => {

    let data = req.app.get("appData");
    let myHTML = "";

    let albums = data.albums[req.params.albumID];


    res.render('albumIndi',{
        pageTitle: "Album",
        pageId: 'Albums',
        albums: albums
    })
})

module.exports = router;