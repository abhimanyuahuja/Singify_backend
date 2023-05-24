import express from "express";
import { PORT } from "./config/serverConfig.js";
import { connect } from "./config/database.js";
import bodyParser from "body-parser";
import apiRoutes from "./routes/index.js";

const app = express();

const setupAndStartServer = async () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log("server started at port", PORT);
  });
  await connect();
  console.log("connected to database");
};

setupAndStartServer();
