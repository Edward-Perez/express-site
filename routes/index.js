let router = require("express").Router();

router.use("/", require("./home"));
router.use("/project", require("./project"));
router.use("/about", require("./about"));

module.exports = router;
