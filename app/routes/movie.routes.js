module.exports = (app) => {
  const Movie = require("../controllers/movie.controller.js");
  const middle = require("../middleware/middleware");
  var router = require("express").Router();

  
  // Create a new Movie
  router.post("/", Movie.create);

  // Retrieve all Movie
  router.get("/", Movie.findAll);

  router.get("/cookie",middle,function (req, res) {
    res.json({ message: "welcome." });

    console.log("done",req.cookies.emp);
    
  });

 

  // Retrieve a single Movie with id
  router.get("/:id", Movie.findOne);

  // Update a Movie with id
  router.put("/:id",Movie.update);

  // Delete a Movie with id
  router.delete("/:id", Movie.delete);

  // Create a new Movie
  router.delete("/",middle, Movie.deleteAll);

  app.use("/api/movies", router);
};
