const express = require("express");
const path = require("path");
const app = express();

// Pug Template
app.set("view engine", "pug");

// Static files
app.use("/static", express.static(path.join(__dirname, "/public")));

// Routes
app.use(require("./routes"));

// Catch 404 errors
app.use((req, res, next) => {
  const err = new Error("Page not Found");
  err.status = 404;
  next(err);
});

// Error Handler
app.use((err, req, res, next) => {
  const errObject = {
    status: err.status || 500,
    message: err.message || "Server Issue",
  };
  res.render("error", errObject);
});

const server = app.listen(process.env.port || 3000, () => {
  console.log(`listening on port number ${server.address().port}`);
});
