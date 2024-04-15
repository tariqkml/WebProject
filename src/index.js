const hbs = require('hbs'); // For creating partials 
const path = require('path');
const express = require('express');
const app = express();

/**
|--------------------------------------------------
| Serving Static website
|--------------------------------------------------
*/
// const staticPath = path.join(__dirname, '../public');
// console.log(path.join(__dirname, '../public'));

//builtin middleware
// app.use(express.static(staticPath));

/**
|--------------------------------------------------
| Using template engines with Express - Add Dynamic Content in ExpressJS
|--------------------------------------------------
*/
const templatePath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath); // For creating partials 

app.get('/', (req, res) => {
    res.render('index', {
        firstName: 'Tariq Kamal',
        lastName: 'Plz like and subscribe my channel'
    });
})

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/about/*', (req, res) => {
    res.render('404', {
        errorcomment: "Oops this about page doesn't exist...., Addition error comment content"
    });
})

app.get('*', (req, res) => {
    res.render('404', {
        errorcomment: "Oops this page doesn't exist...."
    });
})

// app.get('/', (req, res) => {
//     res.send('Hello World from the ExpressJS...')
// })

// app.get('/about', (req, res) => {
//     res.send('Hello World from the aboutUs page...')
// })

app.listen(8000, () => {
    console.log('Listening at the port no. 8000');
})