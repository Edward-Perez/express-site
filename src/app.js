import express from 'express';
import path from 'path';
import pugFile from './pugFile'
import httpRequestObj from './helpers/httpRequestObj'
import handleError from './helpers/handleError'

const app = express();
const port = process.env.port || 3000;

// Pug Template
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Static files
app.use('/static', express.static(path.join(__dirname, '/public')));

// Routes
app.get('/about', controller);
app.get('/project/:id', controller);
app.get('/', controller);
app.use((req, res, next) => { 
  throw handleError(new Error('Not Found'), 404)
});

function controller(req, res, next) {
  const reqObject = httpRequestObj(req);
  const page = pugFile(reqObject);
  if(page.error) {
    throw page.error
  } else {
    return res.render(page.pugFile, page)
  }
} 

app.use((err, req, res, next) => {
  console.error(`Error message "${err.message}" with status code "${err.status}."`);
  res.render('error', err); 
}); 

app.listen(port, console.log(`listening on port number ${port}`));