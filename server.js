const express = require("express");
const path = require("path");

const app = express();

//Optimized version
app.use(express.static("client/build"));
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// server
app.listen(5000, () => {
  console.log(`Listening on port 5000`);
});