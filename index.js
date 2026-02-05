const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("ok");
});

app.listen(3000);

