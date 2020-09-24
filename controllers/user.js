const { OAuth2Client } = require("google-auth-library");

//GOOGLE OAUTH2 CONFIG
const googleOauth = new OAuth2Client();

module.exports = {
  loginController: async (req, res, next) => {
    try {
      const { token } = req.body;
      const {
        payload: { email, email_verified },
      } = await googleOauth.verifyIdToken({
        idToken: token,
        audience:
          "451674024694-bfafj7tgrl2085up4tv67losvv6gb3et.apps.googleusercontent.com",
      });

      if (email_verified) {
        console.log("verified, ", email);
      }
    } catch (error) {
      next(error);
    }
  },
};
