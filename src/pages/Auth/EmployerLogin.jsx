import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EmployerLogin = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP LOGIN CHECK (replace with API later)
    if (formData.email && formData.password) {
      navigate("/auth/recruiter/account");
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="bg-sky-50 min-h-[80vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden">

        {/* LEFT INFO PANEL */}
        <div className="bg-gradient-to-b from-sky-500 to-blue-700 text-white p-10 hidden md:block">
          <h2 className="text-3xl font-bold mb-4">
            Create. Harness. <br /> Achieve. Lead.
          </h2>

          <p className="mb-6">
            CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
          </p>

          <ul className="space-y-3 text-sm">
            <li>⭐ Database offers pre-interviewed and AI-assessed candidates</li>
            <li>⭐ Assessment includes video, coding, and AI-powered evaluations</li>
            <li>⭐ Events focus on diversity, women empowerment, and immediate joiners</li>
            <li>⭐ Engage delivers top-rated candidates through impactful hackathons</li>
          </ul>

          <p className="mt-6 font-semibold">
            Start your journey today and watch your team thrive!
          </p>
        </div>

        {/* RIGHT LOGIN FORM */}
        <div className="p-10 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">Welcome Back!</h1>
          <p className="text-gray-600 mb-6">For Employer</p>
          <h1 className="text-xl font-semibold mb-6">Your next great hire is just a login away!</h1>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full border px-4 py-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="text-right">
              <button
                type="button"
                className="text-blue-600 text-sm hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            {/* SIGN IN BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
            >
              Sign In
            </button>

            {/* SIGN UP */}
            <p className="text-center text-sm mt-4">
              Not on Curatal?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/auth/recruiter/signup")}
              >
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
