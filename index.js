const express = require("express");
const { auth } = require("./firebase");
const app = express();

app.use(express.static("public"));

app.use(express.json());

//ROUTES
const hamstersRoute = require("./routes/hamsters");
app.use("/hamsters", hamstersRoute);


app.listen(3000, () => {
  console.log("Server is up and running!");
});
