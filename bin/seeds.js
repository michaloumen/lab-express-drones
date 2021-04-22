// Iteration #1
const mongoose = require("mongoose");
const droneModel = require("../models/droneModel");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );

    droneModel
      .insertMany(drones)
      .then((insertedDrones) => {
        console.log(`Inserted ${insertedDrones.length} drones!!!`);
        mongoose.connection.close();
      })
      .catch((error) => console.log(error));
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
