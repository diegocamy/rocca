const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { OAuth2Client } = require("google-auth-library");
const cors = require("cors");
const app = express();
require("dotenv").config();

//GOOGLE OAUTH2 CONFIG
const googleOauth = new OAuth2Client();

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
app.get("/", (req, res) => res.send("HOLA"));
app.post("/api/login", async (req, res, next) => {
  const { token } = req.body;
  const {
    payload: { email_verified, email },
  } = await googleOauth.verifyIdToken({
    idToken: token,
    audience:
      "451674024694-bfafj7tgrl2085up4tv67losvv6gb3et.apps.googleusercontent.com",
  });
  if (email_verified) {
    console.log("verified");
    //check db for user
  }
});

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
