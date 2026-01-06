import React, { useState } from "react";
import { FaEye, FaEyeSlash,FaCheckCircle } from "react-icons/fa";
import "./CandidateLogin.css";
import { useNavigate } from "react-router-dom";

const CandidateLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-page">
      <div className="login-card">

        {/* LEFT INFO PANEL */}
        <div className="login-left">
          <h2>
            Create. Harness.
            <br />
            Achieve. Lead.
          </h2>

          <p className="left-sub">
            CHAL Curatal and take the leap towards your dream career!
          </p>

          <ul className="space-y-3">
                      <li className="flex gap-2"><FaCheckCircle /> Build a standout resume with customizable templates</li>
                      <li className="flex gap-2"><FaCheckCircle /> Get matched with jobs tailored to your skills</li>
                      <li className="flex gap-2"><FaCheckCircle /> Know your worth with the Salary Predictor</li>
                      <li className="flex gap-2"><FaCheckCircle /> Ace interviews with expert-led mock sessions</li>
                      <li className="flex gap-2"><FaCheckCircle /> Get assessed, receive personalized insights, and grow with Curatal</li>
                    </ul>

          <p className="left-footer">
            Start your journey today and watch your team thrive!
          </p>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="login-right">
          <h1 class="mb-2 text-header text-center text-heading font-bold ">Welcome Back!</h1>
          <h3 class="mb-2 text-lg text-center text-heading font-bold ">For Candidate</h3>
          <h5 class="mb-5 text-xs text-center text-[rgba(0, 0, 0, 0.75)]  font-normal ">Your next opportunity is just a login away!</h5>

          <input
            type="email"
            placeholder="Email address"
            className="input"
          />

          <div className="password-box">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="input"
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <div className="forgot">Forgot Password?</div>

          <button className="signin-btn">Sign In</button>

          <div className="divider">
            <span></span>
            <p>Or Continue with</p>
            <span></span>
          </div>

          <div className="social">
            <div className="icon  linkedin">in</div>
            <div className="icon google">G</div>
          </div>

          <p className="signup-text">
          
              <p className="signup-text">
              Not on Curatal?{" "}
              <span onClick={() => navigate("/auth/recruiter/signup")}>
                Sign Up
              </span>
            </p>
    
              
          </p>
        </div>

      </div>
    </div>
  );
};

export default CandidateLogin;
