const express = require('express');
const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({ extended: true }))

const fs = require('fs');

//import the contents of json file

const feedbackData = require('../data/feedback.json');

router.get('/feedback', (req, res) => {

    res.render('feedback', {
        pageTitle: "Feedback Forum",
    })
})


router.get('/api', (req, res) => {

    res.json(feedbackData)
})


router.post('/api', (req, res) => {

    //grab data from header (body parser)
    let { name, title, message } = req.body;
    console.log(req.body);


    //push it to the feedbackData object
    feedbackData.unshift(req.body)

    //save to feedback.json
    fs.writeFile('data/feedback.json', JSON.stringify(feedbackData), 'utf8', (err) => {

        if (err) {
            console.log(err);
        }

        console.log('feedback.json file has been updated');
    })

    res.json(feedbackData)
})


module.exports = router;