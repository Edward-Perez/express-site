const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');


router.get('/', (req, res, next) => {
    res.locals.projects = projects;
    res.render('index');
});

router.get('/about', (req, res, next) => {
    res.render('about');
});

router.get('/project/:id', (req, res, next) => {
    const id = req.params;
    res.locals.projects = projects;
    if(id.id < projects.length) {
        res.render('project', id);
    } else {
        res.redirect('/');
    }
});

router.use( (req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
router.use( (err, req, res, next) => {
    res.locals.error = err;
    console.error(`There is a ${err.status} error.`);
    res.render('error');
});

module.exports = router;