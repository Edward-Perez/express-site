const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const index = require('./routes/index.js');

// Set view engine
app.set('view engine', 'pug');
// Static method to serve static files
app.use('/static', express.static('public'));
// Use routes in index
app.use(index);

// Create error constructor
app.use( (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
// Display error 
app.use( (err, req, res, next) => {
    res.locals.error = err;
    console.error(`Error message "${err.message}" with status code "${err.status}."`);
    res.render('error');
});

// Create server
app.listen(port, () => {
    console.log(`listening on port number ${port}`);
})