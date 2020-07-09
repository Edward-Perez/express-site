let router = require("express").Router();

router.param("id", (req, res, next, id) => {
  const { projects } = require("../data.json");
  if (projects[id]) {
    req.project = projects[id];
    next();
  } else {
    const err = new Error("Project not found");
    err.status = 404;
    next(err);
  }
});

router.get("/:id", (req, res) => {
  res.render("project", req.project);
});

module.exports = router;
