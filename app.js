const express = require('express');
const app = express();
const data = require('./data/data.json')
const port = process.env.PORT || 3000;

app.set('appData', data)
//static assets
app.use(express.static('public'))

//templates
app.set('view engine', 'ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/albums'))





app.listen(port, () => {

    console.log(`running on port ${port}`);
})