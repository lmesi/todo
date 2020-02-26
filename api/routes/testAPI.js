const express = require("express");
const router = express.Router();
const fs = require('fs');
let todo;
fs.readFile('./data.json', 'utf8', function (err, data) {
  if (err) throw err;
  try {
    todo = JSON.parse(data);
  } catch (e) {
    console.error( e );
  }
});

router.get("/", (req, res, next) => {
  res.send(JSON.stringify(todo));
});

module.exports = router;