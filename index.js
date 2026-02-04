const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  console.log(req.query.q);   // Log query parameter instead of executing it
  res.send("ok");
});

app.listen(3000);
