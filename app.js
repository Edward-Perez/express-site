const express = require('express');
const app = express();
const port = 3000;
const index = require('./routes/index.js');

app.set('view engine', 'pug');
app.use('/static', express.static('public'));
app.use(index);



app.listen(port, () => {
    console.log(`listening on ${port}`);
})