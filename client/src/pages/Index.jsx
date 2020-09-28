import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";

const Index = () => {
  const loginWithGoogle = async (response) => {
    const tokenId = await response.tokenId;
    const { data: token_response } = await axios.post(
      "http://localhost:5000/api/user/login",
      {
        token: tokenId,
      }
    );

    console.log(token_response);
  };
  return (
    <div>
      <GoogleLogin
        clientId='451674024694-bfafj7tgrl2085up4tv67losvv6gb3et.apps.googleusercontent.com'
        buttonText='Entrar'
        onSuccess={loginWithGoogle}
        onFailure={loginWithGoogle}
      />
    </div>
  );
};

export default Index;
