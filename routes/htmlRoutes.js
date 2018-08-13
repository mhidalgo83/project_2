var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/jobsAvailable", function (req, res) {
    db.gigs.findAll({}).then(function (data) {
      res.render("jobsAvailable", {
        jobs: data
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function (dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });



  //Sign-in page...
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  //Provider form
  app.get("/gig", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/gig.html"));
  });

  //Taker form...
  app.get("/taker", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/taker.html"));
  });

  //Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
