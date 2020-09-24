const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
require("dotenv").config();

//ROUTE IMPORTS
const userRoute = require("./routes/user");

//MONGO DB CONNECTION
mongoose.connect(
  process.env.DB_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db!")
);

const PORT = process.env.PORT || 5000;

//MIDDLEWARES
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//ROUTES
app.use("/api/user", userRoute);

//ERROR HANDLER
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status);

  res.json({
    status,
    message: err.message,
    stack: err.stack,
  });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
