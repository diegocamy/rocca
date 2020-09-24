import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import "./App.css";

function App() {
  const loginWithGoogle = async (response) => {
    const tokenId = await response.tokenId;
    await axios.post("http://localhost:5000/api/user/login", {
      token: tokenId,
    });
  };

  return (
    <div className='App'>
      <h1>Hola</h1>
      <GoogleLogin
        clientId='451674024694-bfafj7tgrl2085up4tv67losvv6gb3et.apps.googleusercontent.com'
        buttonText='Entrar'
        onSuccess={loginWithGoogle}
        onFailure={loginWithGoogle}
      />
    </div>
  );
}

export default App;
