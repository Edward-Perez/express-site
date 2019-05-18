const express = require('express');
const app = express();
const port = 3000;
const index = require('./routes/index.js');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use(index);

app.use( (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
app.use( (err, req, res, next) => {
    res.locals.error = err;
    console.error(`There is a ${err.status} error.`);
    res.render('error');
});


app.listen(port, () => {
    console.log(`listening on ${port}`);
})