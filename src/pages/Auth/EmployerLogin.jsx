import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./EmployerLogin.css";

const EmployerLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT PANEL */}
        <div className="login-left">
          <h2>
            Create. Harness. <br />
            Achieve. Lead.
          </h2>

          <p className="left-desc">
            CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
          </p>

          <ul>
            <li><FaCheckCircle />Database offers pre-interviewed and AI-assessed candidates</li>
            <li><FaCheckCircle /> Assessment includes video, coding, and AI-powered evaluations</li>
            <li><FaCheckCircle /> Events focus on diversity, women empowerment, and immediate joiners</li>
            <li><FaCheckCircle /> Engage delivers top-rated candidates through impactful hackathons</li>
          </ul>

          <p className="left-footer">
            Start your journey today and watch your team thrive!
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="login-right">
          <h1>Welcome Back!</h1>
          <p className="sub-title">For Employer</p>
          <h6>Your next great hire is just a login away!</h6>

          <form>
            <input
              type="email"
              placeholder="Email address"
            />

            <div className="password-field">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              <span onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="forgot">
              <span>Forgot Password?</span>
            </div>

            <button type="button" className="login-btn">
              Sign In
            </button>

            <p className="signup-text">
              Not on Curatal?{" "}
              <span onClick={() => navigate("/auth/recruiter/signup")}>
                Sign Up
              </span>
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};

export default EmployerLogin;