var db = require("../models");

module.exports = function (app) {
  // Get all gigs
  app.get("/api/gigs", function (req, res) {
    db.Gig.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Create a new gig...
  app.post("/api/gigs", function (req, res) {
    db.Gig.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  //Pulls gig data with associated data
  app.get("/api/gigs/:id", function (req, res) {
    db.Gig.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Taker]
    }).then(function (data) {
      res.json(data);
    });
  });

  //Pulls taker info from database
  app.get("/api/takers/:id", function (req, res) {
    db.Taker.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (data) {
      res.json(data);
    });
  });

  //Creates takers for gigs
  app.post("/api/takers", function (req, res) {
    db.Taker.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  //Deletes gigs from database
  app.delete("/api/gigs/:id", function (req, res) {
    db.Gig.destroy({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};
