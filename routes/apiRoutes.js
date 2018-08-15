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

  //sign in page
  app.post("/api/users", function (req,res) {
    db.users.create(req.body).then(function(data) {
      res.json(data);
  })

  app.get("/api/users", function (req,res){
    db.users.findAll({
      where: {
        username: req.params.username
      }
    }).then(function(data){
      res.json(data);
    });
  });

  // Delete an example by id
  app.delete("/api/provider/:id", function(req, res) {
    db.provider.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

    // Delete an example by id
    app.delete("/api/taker/:id", function(req, res) {
      db.taker.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
        res.json(dbExample);
      });
    });
};
