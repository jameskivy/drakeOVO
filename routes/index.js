let express = require('express');
let router = express.Router();

router.get('/', (req, res) => {



    res.render('index', {
        pageTitle: "Drake Albums",
        pageId: "Home",
    })
})

module.exports = router;