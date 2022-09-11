const express = require("express");
const app = express();
const port = 3000;
const name = require("./name.json");

app.get("/",(req, res) => {
    res.send("hello world");
});

app.get("/name", (req, res) => {
    res.json(name)
     });

app.listen(port, () => {
    console.log( ` app listening at http://localhost:${port}`)
  })
