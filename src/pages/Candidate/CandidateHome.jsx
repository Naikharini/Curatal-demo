import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaUserPlus, FaUser } from "react-icons/fa";
import "./CandidateHome.css";
const CandidateHome = () => {
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
            CHAL Curatal and take the leap towards your dream career!
          </p>
          <ul>
            <li><FaCheckCircle /> Build a standout resume with customizable templates</li>
            <li><FaCheckCircle /> Get matched with jobs tailored to your skills</li>
            <li><FaCheckCircle /> Know your worth with the Salary Predictor</li>
            <li><FaCheckCircle /> Ace interviews with expert-led mock sessions</li>
            <li><FaCheckCircle /> Get assessed, receive personalized insights, and grow with Curatal</li>
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
              <h6 class="MuiTypography-root MuiTypography-subtitle1 desc css-1g1l3fn max-w-[350px]">Sign in to access your candidate account and  continue your journey.</h6>
            </div>

             <div onClick={() => navigate("/auth/candidate/login")} className="flex flex-col bg-[#0077b6] p-2 rounded-md width-[150px] text-white cursor-pointer justify-center items-center">
                          <FaUser />
                          Sign In
                        </div>
          </div>
          <div className="auth-card light">
            <div>
             <h6 class="MuiTypography-root MuiTypography-subtitle1 title css-13t71z3">New Here?</h6>
              <h6 class="MuiTypography-root MuiTypography-subtitle1 desc css-1g1l3fn max-w-[350px]">Create an account to explore exclusive candidate features and opportunities.</h6>
            </div>
            
            <div onClick={() => navigate("/auth/candidate/signup")} className="flex flex-col bg-[#0077b6] p-2 rounded-md width-[150px] text-white cursor-pointer justify-center items-center">
              <FaUserPlus />
              Sign Up
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CandidateHome;
 


