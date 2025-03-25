import React, { useState } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.password) newErrors.password = "Password is required.";
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted:", formData);
      alert("Signup Successful!");
      setFormData({ email: "", password: "", confirmPassword: "" });
      setErrors({});
    }
  };

  const handleGoogleSignup = () => {
    alert("Google signup not implemented yet!");
    // Here, you would integrate Google authentication
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        {/* Email */}
        <div className="input-group">
          <AiOutlineMail className="icon" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {errors.email && <p className="error">{errors.email}</p>}

        {/* Password */}
        <div className="input-group">
          <AiOutlineLock className="icon" />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {errors.password && <p className="error">{errors.password}</p>}

        {/* Confirm Password */}
        <div className="input-group">
          <AiOutlineLock className="icon" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        {/* Submit Button */}
        <button type="submit" className="signup-button">
          Sign Up
        </button>

        <div className="divider">
          <span>or</span>
        </div>

        {/* Google Signup Button */}
        <button type="button" className="google-button" onClick={handleGoogleSignup}>
          <FcGoogle size={20} style={{ marginRight: "8px" }} />
          Continue with Google
        </button>

        {/* Login Link */}
        <p className="login-text">
          Already have an account? <a onClick={() => navigate("/login")}>Log in</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
