const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Welcome to my Home page...')
})

app.get('/about', (req, res) => {
    res.send('Welcome to my aboutUs page...')
})

app.get('/contact', (req, res) => {
    res.send('Welcome to my Contact page...')
})

app.listen(port, () => {
    console.log(`Listening to my port no. ${port}`);
})