const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('Wow!!Courses api running');
});

app.listen(port, () => {
    console.log('Prime Tech server running on port', port);
})