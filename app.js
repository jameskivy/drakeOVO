const express = require('express');
const app = express();
const data = require('.data/data.json')
const port = 3000;

//static assets
app.use(express.static('public'))

//templates
app.set('view engine', 'ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))

//views
app.use(require('./views/index'))
app.use(require('./views/albums'))





app.listen(port, () => {

    console.log(`running on port ${port}`);
})