import React from "react";
import { FaUserPlus, FaUser, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const AuthHome = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-sky-50 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CARD */}
        <div className="bg-gradient-to-b from-sky-500 to-blue-700 text-white rounded-2xl p-10 shadow-lg">
          <h2 className="text-3xl font-bold mb-4">
            Create. Harness. <br /> Achieve. Lead.
          </h2>
          <p className="mb-6">
            CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> Database offers pre-interviewed and AI-assessed candidates</li>
            <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> Assessment includes video, coding, and AI-powered evaluations</li>
            <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> Events focus on diversity, women empowerment, and immediate joiners</li>
            <li className="flex gap-2 items-start"><FaCheckCircle className="mt-1" /> Engage delivers top-rated candidates through impactful hackathons</li>
          </ul>
          <p className="mt-6 font-semibold">Start your journey today and watch your team thrive!</p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-3xl font-bold mb-8">Welcome to Curatal!</h1>

          <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl p-6 mb-6 flex justify-between items-center shadow-md">
            <div>
              <h3 className="text-lg font-semibold">Let's Dive Back In!</h3>
              <p className="text-sm">Sign in to access your employer account and continue your journey.</p>
            </div>
            <button className="bg-blue-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
              onClick={() => navigate("/auth/recruiter/login")}>
              <FaUser /> Sign In
            </button>
          </div>

          <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl p-6 flex justify-between items-center shadow-md">
            <div>
              <h3 className="text-lg font-semibold">New Here?</h3>
              <p className="text-sm">Create an account to post jobs, manage applications, and hire top talent.</p>
            </div>
            <button className="bg-blue-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2"
              onClick={() => navigate("/auth/recruiter/signup")}>
              <FaUserPlus /> Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthHome;
