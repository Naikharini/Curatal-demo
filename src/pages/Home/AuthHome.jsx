import React from "react";
import { FaUserPlus, FaUser, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./AuthHome.css";

const AuthHome = () => {
  const navigate = useNavigate();

  return (
    <div className="AuthHome">
      <div className="auth-container">

        {/* LEFT PANEL */}
        <div className="left-panel">
          <h2>
            Create. Harness. <br /> Achieve. Lead.
          </h2>

          <p className="intro-text">
            CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
          </p>

          <ul>
            <li><FaCheckCircle /> Database offers pre-interviewed and AI-assessed candidates</li>
            <li><FaCheckCircle /> Assessment includes video, coding, and AI-powered evaluations</li>
            <li><FaCheckCircle /> Events focus on diversity, women empowerment, and immediate joiners</li>
            <li><FaCheckCircle /> Engage delivers top-rated candidates through impactful hackathons</li>
          </ul>

          <p className="footer-text">
            Start your journey today and watch your team thrive!
          </p>
        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <h1>Welcome to Curatal!</h1>

          <div className="auth-card">
            <div>
              <h3>Let’s Dive Back In!</h3>
              <p>Sign in to access your employer account.</p>
            </div>

            <button onClick={() => navigate("/auth/recruiter/login")}>
              <FaUser /> Sign In
            </button>
          </div>

          <div className="auth-card light">
            <div>
              <h3>New Here?</h3>
              <p>Create an account to post jobs and manage applications.</p>
            </div>

            <button onClick={() => navigate("/auth/recruiter/signup")}>
              <FaUserPlus /> Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthHome;
