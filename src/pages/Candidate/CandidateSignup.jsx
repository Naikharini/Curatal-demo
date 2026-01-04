import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./CandidateSignup.css";

const CandidateSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    gender: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please accept Privacy Policy & Terms");
      return;
    }

    navigate("/auth/candidate/login");
  };

  return (
    <div className="bg-sky-50 min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT FORM */}
        <div className="p-10">
          <h1 class="mb-2 text-header text-center font-bold text-heading">Welcome to Curatal</h1>
         <h3 className="mb-2 text-lg text-center text-heading font-bold ">For Candidate</h3>
          <h5 className="mb-5 text-xs text-center text-[rgba(0, 0, 0, 0.75)]  font-normal ">Your dream job is just a few clicks away</h5>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* EMAIL */}
            <input
              name="email"
              type="email"
              placeholder="name@xyz.com"
              className="border px-4 py-3 rounded w-full"
              onChange={handleChange}
            />

            {/* PHONE */}
            <div className="flex gap-2">
              <select className="border px-3 py-3 rounded bg-white">
                <option>IN +91</option>
              </select>
              <input
                name="phone"
                placeholder="Mobile number"
                className="border px-4 py-3 rounded w-full"
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border px-4 py-3 rounded w-full"
                onChange={handleChange}
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {/* GENDER */}
            <div>
              <p className="font-medium mb-2">Select Gender</p>
              <div className="flex gap-6">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    onChange={handleChange}
                  />
                  Male
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    onChange={handleChange}
                  />
                  Female
                </label>
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="gender"
                    value="NA"
                    onChange={handleChange}
                  />
                  Prefer Not To Share
                </label>
              </div>
            </div>

            {/* TERMS */}
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
              />
              <span>
                By Signing Up, I agree to Curatal’s{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Privacy Policy
                </span>{" "}
                and{" "}
                <span className="text-blue-600 underline cursor-pointer">
                  Terms of Service
                </span>{" "}
                and agree to receive WhatsApp notifications.
              </span>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700"
            >
              Sign Up
            </button>

            {/* DIVIDER */}
            <div className="cs-divider">Or Continue with</div>

            {/* SOCIAL */}
            <div className="flex justify-center gap-4">
              <button className="border rounded p-2">in</button>
              <button className="border rounded p-2">G</button>
            </div>

            {/* LOGIN */}
            <p className="text-center text-sm mt-4">
              If you have an existing account,{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/auth/candidate/login")}
              >
                Sign In
              </span>
            </p>
          </form>
        </div>

        {/* RIGHT INFO PANEL */}
        <div className="bg-gradient-to-b from-sky-500 to-blue-700 text-white p-10 hidden md:block">
          <h2 className="text-3xl font-bold mb-6">
            Create. Harness. <br /> Achieve. Lead.
          </h2>

          <p className="mb-6">
            CHAL Curatal and take the leap towards your dream career!
          </p>

          <ul className="space-y-3">
                                <li className="flex gap-2"><FaCheckCircle /> Build a standout resume with customizable templates</li>
                                <li className="flex gap-2"><FaCheckCircle /> Get matched with jobs tailored to your skills</li>
                                <li className="flex gap-2"><FaCheckCircle /> Know your worth with the Salary Predictor</li>
                                <li className="flex gap-2"><FaCheckCircle /> Ace interviews with expert-led mock sessions</li>
                                <li className="flex gap-2"><FaCheckCircle /> Get assessed, receive personalized insights, and grow with Curatal</li>
                              </ul>
          

          <p className="mt-6 font-semibold">
            Start your journey today and watch your career thrive!
          </p>
        </div>

      </div>
    </div>
  );
};

export default CandidateSignup;
