require("dotenv").config({ path: ".env.local" });
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const database = require("./src/configs/db.config");
const config = require("./src/configs/setup.config");
const routes = require("./src/routes");
const populateDatabse = require("./src/utils/populateDatabase");

const app = express();

app.use(cors(config.corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

function listen() {
  app.listen(3333);

  console.log("Server started on port " + 3333);
}

const mongoDB = process.env.MONGO_URI || "mongodb://mongo:27017/mydatabase";

mongoose.connect(mongoDB, { retryWrites: true, w: "majority" });

mongoose.connection.on("open", async () => {
  console.log("Connected to database");
  listen();

  await populateDatabse();
  console.log("Database successfully populated");
});
