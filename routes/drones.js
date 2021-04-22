const express = require("express");
const droneModel = require("../models/droneModel");

// require the Drone model here ???

const router = express.Router();

router.get("/drones", async (req, res, next) => {
  droneModel
    .find()
    .then((drones) => {
      console.log({ drones });
      res.render("drones/list", { drones }); //é do .the (drones)
    })
    .catch((erro) => console.log(erro));
});

router.get("/drones/create-form", (req, res, next) => {
  res.render("drones/create-form");
});

router.post("/drones/create-form", (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    next(error);
    return error;
  }
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post("/drones/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
