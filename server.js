// Require modules
const express = require('express');
const path = require('path');
const elementsDb = require('./data/elements-db')


// Create the Express app
const app = express();


//Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// Mount middleware (app.use)

// Mount routes
app.get('/', (req, res) => {
    res.send('<h1>Hello there </h1>');
});

app.get('/elements', (req, res) => {
    res.render('elements/index', {elements: elementsDb.getAll()});
});

// Tell the app to listen on port 3000
app.listen(3000, function() {
    console.log('Listening on port 3000 for elements');
});
