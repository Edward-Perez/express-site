let router = require("express").Router();

router.get("/", (req, res, next) => {
  const { projects } = require("../data.json");
  if (projects) {
    return res.render("index", { projects: projects });
  } else {
    const err = new Error("Unable to retrieve the projects");
    err.status = 500;
    next(err);
  }
});

module.exports = router;
