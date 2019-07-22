const express = require('express'); // importing express library 
const app = express(); //call express variable
const axios = require('axios')
const path = require('path');
const port = 3000;

app.use('/static', express.static('static'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/static/index.html'));
}); 

app.get('/api/character', function (req, res) { 
    // res.send(character)

    // Make a request for a user with a given ID
    axios.get('https://swapi.co/api/people/1')
        .then(function (response) {
            // handle success
            res.send(response.data)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            res.send('something went wrong!')
        })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`)); // start up the application