const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());


const courses = require('./Data/courses.json');

app.get('/', (req, res) =>{
    res.send('Wow!!Courses api running');
});

app.get('/courses', (req, res) =>{
    res.send(courses);
})

app.get('/courses/:id', (req, res) =>{
    const id = req.params.id;
    const course = courses.find(course => course.id===id);
    res.send(course);
})

app.listen(port, () => {
    console.log(`Prime Tech server running on port, ${port}`);
})