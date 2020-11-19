import React from "react";
import Auth from "../../services/Auth";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import logo from "../../assets/logo.png";

function LoginPage() {
  const login = async (loginData) => {
    const loginSuccess = await Auth.login(loginData);
    if (!loginSuccess) {
      alert("Invalid credentials");
    }
  };

  const register = async (registrationData) => {
    const registerSuccess = await Auth.register(registrationData);
    if (!registerSuccess) {
      alert("Couldn't register check credentials and try again");
    }
  };

  return (
    <div className="container">
      <div className="login-header">
        <img className="logo" src={logo} alt="Blue logo with words FoodFeed" />
        <h1>Good Food - Good Mood!</h1>
      </div>

      <div className="forms">
        <div className="login-form">
          <LoginForm onSubmit={login} />
        </div>

        <div className="register-form">
          <RegisterForm onSubmit={register} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
