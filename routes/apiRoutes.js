var db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/gigs", function (req, res) {
    db.Gig.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/taker", function (req, res) {
    db.Taker.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new gig...
  app.post("/api/gigs", function (req, res) {
    db.Gig.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/gigs/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Gig.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Taker]
    }).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/takers/:id", function (req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Taker.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post("/api/takers", function (req, res) {
    db.Taker.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  app.delete("/api/gigs/:id", function (req, res) {
    db.Gig.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};
