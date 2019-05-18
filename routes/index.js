const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// Routes to "index" page
router.get('/', (req, res, next) => {
    res.locals.projects = projects;
    res.render('index');
});

// Routes to "about" page
router.get('/about', (req, res, next) => {
    res.render('about');
});

// Routes to a "project" page, if not project "id" variable is present redirect to index page 
router.get('/project/:id', (req, res, next) => {
    const id = req.params;
    res.locals.projects = projects;
    if(id.id < projects.length) {
        res.render('project', id);
    } else {
        res.redirect('/');
    }
});

module.exports = router;