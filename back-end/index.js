const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const allowedRegistrationFields = ["email", "password"];

function validate(data) {
  if (Object.keys(data).length === allowedRegistrationFields.length) {
    return allowedRegistrationFields.every((field) => !!data[field]);
  }
}

app.post("/register", function (req, res, next) {
  const body = req.body;

  if (validate(body)) {
    res.status(200).end();
  } else {
    res.status(400).end();
  }
});

app.listen(9999, function () {
  console.log("Aplikacja działa");
});
