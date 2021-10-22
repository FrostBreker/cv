const express = require("express");
const path = require("path");
const cors = require('cors');
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const PORT = process.env.PORT;

const app = express();

//cors
const corsOptions = {
  origin: `${process.env.CLIENT_URL}`,
  credentials: true,
  allowedHeaders: ["sessionId", "Content-Type"],
  exposedHeaders: ["sessionId"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  preflightContinue: false,
};
app.use(cors(corsOptions));

//parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//Optimized version
app.use(express.static("client/build"));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});