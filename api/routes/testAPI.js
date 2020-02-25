const express = require("express");
const router = express.Router();

let todo = {
  title: "First todo title",
  todos: [
    {
      completed: false,
      content: "valami"
    },
    {
      completed: true,
      content: "alma"
    },
    {
      completed: false,
      content: "körte"
    }
  ]
}

router.get("/", (req, res, next) => {
  res.send(todo)
});

module.exports = router;