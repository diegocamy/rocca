const { OAuth2Client } = require("google-auth-library");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
require("dotenv").config();

//GOOGLE OAUTH2 CONFIG
const googleOauth = new OAuth2Client();

module.exports = {
  loginController: async (req, res, next) => {
    try {
      const { token } = req.body;
      const {
        payload: { email, email_verified, name },
      } = await googleOauth.verifyIdToken({
        idToken: token,
        audience:
          "451674024694-bfafj7tgrl2085up4tv67losvv6gb3et.apps.googleusercontent.com",
      });

      if (email_verified) {
        //CHECK IF USER EXISTS IN DB
        const foundUser = await User.findOne({ email });

        if (foundUser) {
          //IF USER IS FOUND, RETURN JWT WITH USER DATA
          const jwt_token = jwt.sign(
            { id: foundUser._id, nombre: foundUser.nombre },
            process.env.JWT_SECRET,
            { expiresIn: "1 day" }
          );

          return res.send(jwt_token);
        } else {
          //CREATE A NEW USER ACCOUNT AND RETURN JWT WITH NEW USER DATA
          const newUser = new User({
            email: email,
            nombre: name,
          });

          await newUser.save();

          const jwt_token = jwt.sign(
            { id: newUser._id, nombre: newUser.nombre },
            process.env.JWT_SECRET,
            { expiresIn: "1 day" }
          );
          return res.send(jwt_token);
        }
      }
    } catch (error) {
      next(error);
    }
  },
};
