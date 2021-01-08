const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use("/public", express.static(path.join(__dirname, "static")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static", "index.html"));
});

//GET Method
app.get("/get", (req, res) => {
  res.json(req.query);
});
app.get("/get/:name", (req, res) => {
  res.json(req.params);
});

//POST Method
app.post("/post", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

//Listen to the port
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
