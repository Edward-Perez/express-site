const express = require('express');
const app = express();
const port = 3000;

app.use('static', express.static('public'));
app.set('view engine', 'pug');

app.get('/', (req, res, next) => {
    res.render('layout');
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})