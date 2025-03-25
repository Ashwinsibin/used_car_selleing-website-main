import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";  // Import GoogleLogin
import { jwtDecode } from "jwt-decode";  // To decode the token
import "./Login.css";
import { FcGoogle } from "react-icons/fc";  // Google icon

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here (can be updated for backend integration)
    alert("Logged in successfully!");
    navigate("/");
  };

  const handleGoogleLogin = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log("Google Login Success:", decoded);
    alert(`Welcome, ${decoded.name}!`);
    navigate("/");
  };;
  const handleGoogleLoginError = () => {
    console.log("Google Login Failed");
    alert("Google login failed. Please try again!");
  };


  return (
    <div className="login-container">
      <h2>Login to Your Account</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="login-button">Login</button>

        <div className="divider">
          <span>or</span>
        </div>

 {/* Google Login Button */}
 <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={handleGoogleLoginError}
          render={(renderProps) => (
            <button
              type="button"
              className="google-button"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <FcGoogle size={20} style={{ marginRight: "8px" }} />
              Continue with Google
            </button>
          )}
        />


        {/* Sign-up Link */}
        <p className="signup-text">
          Don't have an account? <a onClick={()=>{navigate('/Signup')}}>Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
