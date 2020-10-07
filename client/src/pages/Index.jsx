import React from "react";
import axios from "axios";
import GoogleLogin from "react-google-login";
import Logo from "../assets/roccaa.png";

const Index = ({ history }) => {
  const loginWithGoogle = async (response) => {
    const tokenId = await response.tokenId;
    const { data: token_response } = await axios.post(
      "http://localhost:5000/api/user/login",
      {
        token: tokenId,
      }
    );

    //SAVE RECEIVED TOKEN ON LOCALSTORAGE AND REDIRECT TO DASHBOARD
    if (token_response) {
      localStorage.setItem("jwt", JSON.stringify(token_response));
      history.push("/dashboard");
    }
  };

  return (
    <div className='bg-light text-center row' style={{ height: "100vh" }}>
      <div className='my-auto ' style={{ height: "fit-content" }}>
        <img src={Logo} alt='logo' className='mt-5 mx-auto img-fluid px-3' />
        <br />
        <p style={{ fontSize: "1.3rem" }} className='mb-3 p-3 text-center'>
          Lleva el control de cuánto has gastado en tus vehículos!
        </p>
        <GoogleLogin
          clientId='451674024694-bfafj7tgrl2085up4tv67losvv6gb3et.apps.googleusercontent.com'
          buttonText='Entrar'
          render={(renderProps) => (
            <button
              className='btn btn-primary'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <i className='fab fa-google mr-3'></i>
              Ingresar con Google
            </button>
          )}
          onSuccess={loginWithGoogle}
          onFailure={() => console.log("ERROR")}
        />
      </div>
    </div>
  );
};

export default Index;
