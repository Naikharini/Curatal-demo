import React from "react";
import { FaUserPlus, FaSignInAlt, FaCheckCircle } from "react-icons/fa";

const AuthHome = () => {
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
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="mt-1" />
              Pre-interviewed & AI-assessed candidates
            </li>
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="mt-1" />
              Video, coding & AI-powered evaluations
            </li>
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="mt-1" />
              Diversity & immediate joiners focus
            </li>
            <li className="flex gap-2 items-start">
              <FaCheckCircle className="mt-1" />
              Hackathons to engage top talent
            </li>
          </ul>

          <p className="mt-6 font-semibold">
            Start your journey today and watch your team thrive!
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div>
          <h1 className="text-3xl font-bold mb-8">Welcome to Curatal!</h1>

          {/* SIGN IN CARD */}
          <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl p-6 mb-6 flex justify-between items-center shadow-md">
            <div>
              <h3 className="text-lg font-semibold">Let's Dive Back In!</h3>
              <p className="text-sm">
                Sign in to access your employer account.
              </p>
            </div>
            <button className="bg-blue-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
              <FaSignInAlt /> Sign In
            </button>
          </div>

          {/* SIGN UP CARD */}
          <div className="bg-gradient-to-r from-sky-500 to-cyan-400 text-white rounded-xl p-6 flex justify-between items-center shadow-md">
            <div>
              <h3 className="text-lg font-semibold">New Here?</h3>
              <p className="text-sm">
                Create an account to post jobs & manage applications.
              </p>
            </div>
            <button className="bg-blue-700 px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
              <FaUserPlus /> Sign Up
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AuthHome;