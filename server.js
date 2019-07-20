const express = require('express'); // importing express library 
const app = express();  //call express variable
const path = require('path');
const port = 3000; 

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + 'static/index.html'));
}); //app is where you define end points

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // start up the application