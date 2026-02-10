const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  eval(req.query.q);   // 🔥 Guaranteed CodeQL alert<h1>test
  res.send("ok");
});

app.listen(3000);
//fix this issue
