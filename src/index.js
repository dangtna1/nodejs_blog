const express = require('express');
const {engine} = require("express-handlebars");
const path = require('path');

const route = require('./routes');

const app = express();
const port = 3000;


//static files and scss
app.use(express.static(path.join(__dirname, 'public')));

//HTTP logger
const morgan = require('morgan');

//midleware body-parser for form using post method
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());


//template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(path.join(__dirname, 'resources/views'));

// app.get('/', (req, res) => {
//     app.use(morgan('combined'));
//     res.render('home');
// })

// app.get('/news', (req, res) => {
//     app.use(morgan('combined'));
//     console.log(req.query);
//     res.render('news');
// })

// app.get('/search', (req, res) => {
//     app.use(morgan('combined'));
//     res.render('search');
// })

// app.post('/search', (req, res) => {
//     app.use(morgan('combined'));
//     res.send('');
//     console.log(req.body);
// })

//init route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})