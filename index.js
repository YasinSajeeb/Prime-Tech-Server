const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const categories = require('./Data/categories.json');

app.get('/', (req, res) =>{
    res.send('Wow!!Courses api running');
});

app.get('/courses-categories', (req, res) =>{
    res.send(categories)
})

app.listen(port, () => {
    console.log('Prime Tech server running on port', port);
})