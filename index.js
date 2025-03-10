const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const SignupModel = require("./Models/SignupModule");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    "mongodb+srv://220611s049:AOM1772Rs1wyjxUo@cluster0.5rnnv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/register"
  )
  .then(() => console.log("Database Connected"))
  .catch((err) => console.log("Database Error", err));

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  SignupModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("Login Success");
      } else {
        res.json("password incorrect");
      }
    } else {
      res.json("no user found");
    }
  });
});

app.post("/register", (req, res) => {
  SignupModel.create(req.body)
    .then((register) => res.json(register))
    .catch((err) => res.json(err));
});

app.listen(3001, () => {
  console.log("Server Running");
});
