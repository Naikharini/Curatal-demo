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
          <h1 class="MuiTypography-root MuiTypography-h1 text-center text-[24px] lg:text-4xl font-bold text-[rgba(0,0,0,1)] mb-[20px] css-7iv6c6">Welcome to Curatal!</h1>
          <div className="auth-card">
            <div>
             <h6 class="MuiTypography-root MuiTypography-subtitle1 title css-13t71z3">Let's Dive Back In!</h6>
              <h6 class="MuiTypography-root MuiTypography-subtitle1 desc css-1g1l3fn">Sign in to access your employer account and continue your journey.</h6>
            </div>
              <FaUser /> 
            <button onClick={() => navigate("/auth/recruiter/login")}>Sign In
              
            </button>
          </div>

          <div className="auth-card light">
            <div>
              <h6 class="MuiTypography-root MuiTypography-subtitle1 title css-13t71z3">New Here?</h6>
              <h6 class="MuiTypography-root MuiTypography-subtitle1 desc css-1g1l3fn">Create an account to post jobs, manage applications, and hire top talent.</h6>
            </div>
            <FaUserPlus />
            <button onClick={() => navigate("/auth/recruiter/signup")}>
               Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthHome;
