var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/gigs", function(req, res) {
    db.gigs.findAll({}).then(function(data) {
      res.json(data);
    });
  });

  app.get("/api/taker", function(req, res) {
    db.taker.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new gig...
  app.post("/api/gigs", function(req, res) {
    db.gigs.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/takers", function(req, res) {
    db.takers.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  // Delete by id
 app.delete("/api/gig/:id", function (req, res) {
    db.gigs.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

    
};
