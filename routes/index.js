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

module.exports = router;