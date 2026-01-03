import { useNavigate } from "react-router-dom";
import { FaCheckCircle, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const CandidateHome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#f5fbff] p-10 rounded-2xl w-full max-w-6xl grid md:grid-cols-2 gap-10">

      {/* LEFT BLUE CARD */}
      <div className="bg-gradient-to-b from-sky-500 to-blue-700 text-white rounded-2xl p-10">
        <h2 className="text-3xl font-bold mb-4">
          Create. Harness. <br /> Achieve. Lead.
        </h2>

        <p className="mb-6">
          CHAL Curatal and take the leap towards your dream career!
        </p>

        <ul className="space-y-4 text-sm">
          <li className="flex gap-2">
            <FaCheckCircle /> Build a standout resume with customizable templates
          </li>
          <li className="flex gap-2">
            <FaCheckCircle /> Get matched with jobs tailored to your skills
          </li>
          <li className="flex gap-2">
            <FaCheckCircle /> Know your worth with the Salary Predictor
          </li>
          <li className="flex gap-2">
            <FaCheckCircle /> Ace interviews with expert-led mock sessions
          </li>
          <li className="flex gap-2">
            <FaCheckCircle /> Get assessed and receive personalized insights
          </li>
        </ul>

        <p className="mt-6 font-semibold">
          Start your journey today and watch your career thrive!
        </p>
      </div>

      {/* RIGHT SIDE */}
      <div>
        <h1 className="text-3xl font-bold mb-8">
          Welcome to Curatal!
        </h1>

        {/* SIGN IN */}
        <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl p-6 mb-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Let's Dive Back In!</h3>
            <p className="text-sm">
              Sign in to access your candidate account.
            </p>
          </div>
          <button
            onClick={() => navigate("/auth/candidate/login")}
            className="bg-blue-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
          >
            <FaSignInAlt /> Sign In
          </button>
        </div>

        {/* SIGN UP */}
        <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl p-6 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Or Continue with</h3>
          
            <h3 className="text-lg font-semibold">New Here?</h3>
            <p className="text-sm">
              Create your account and explore opportunities.
            </p>
          </div>
          <button
            onClick={() => navigate("/auth/candidate/signup")}
            className="bg-blue-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
          >
            <FaUserPlus /> Sign Up
          </button>
        </div>
      </div>

    </div>
  );
};

export default CandidateHome;
