var db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.gigs.findAll({}).then(function (data) {
      res.render("jobsAvailable", {
        jobs: data
      });
    });
  });
  // Load index page
  app.get("/jobsAvailable", function (req, res) {
    db.Gig.findAll({}).then(function (data) {
      res.render("jobsAvailable", {
        jobs: data
      });
    });
  });

  app.get("/taker", function (req, res) {
    db.Gig.findAll({}).then(function (data) {
      res.render("taker", {
        jobs: data
      });
    });
  });

  // Loads jobDescription page based on id from jobsAvailable page

  app.get("/jobsAvailable/:id", function (req, res) {
    console.log(req.params.id);
    db.Gig.findOne({
      where: { id: req.params.id }, include: [db.Taker]
    }).then(function (data) {
      res.render("jobDescription", {
        job: data
      });
      console.log(data.id);
    });
  });



  //Sign-in page...
  // app.get("/", function (req, res) {
  //   res.sendFile(path.join(__dirname, "../public/index.html"));
  // });

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
