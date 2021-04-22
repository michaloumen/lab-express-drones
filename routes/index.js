const express = require("express");
const app = express();
app.use(express.static("public"));
const router = express.Router();
const { Schema, model } = require("mongoose");

/* GET home page */
router.get("/", (req, res, next) => res.render("index", { title: "Drnz" }));

module.exports = router;
