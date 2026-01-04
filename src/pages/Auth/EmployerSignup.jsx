import React, { useState } from "react";
import { FaEye, FaEyeSlash,FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./EmployerSignup.css";

const EmployerSignup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    password: "",
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

    // TEMP success flow (replace with API later)
    navigate("/auth/recruiter/login");
  };

  return (
    <div className="bg-sky-50 min-h-[85vh] flex items-center justify-center px-6">
      <div className="max-w-6xl w-full bg-white rounded-2xl shadow-lg grid md:grid-cols-2 overflow-hidden">

        {/* LEFT FORM */}
        <div className="p-10">
          <h1 className="text-2xl font-bold mb-2">Welcome to Curatal</h1>
          <p className="text-gray-600 mb-6">For Employer</p>
          <h3 className="text-gray-600 mb-6">Find top talent in just a few clicks!</h3>

          <p className="text-red-500 text-sm mb-4">
            * All fields are mandatory
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* NAME */}
            <div className="grid grid-cols-2 gap-4">
              <input
                name="firstName"
                placeholder="First Name"
                className="border px-4 py-2 rounded w-full"
                onChange={handleChange}
              />
              <input
                name="lastName"
                placeholder="Last Name"
                className="border px-4 py-2 rounded w-full"
                onChange={handleChange}
              />
            </div>

            {/* COMPANY */}
            <input
              name="company"
              placeholder="Company Name"
              className="border px-4 py-2 rounded w-full"
              onChange={handleChange}
            />

            {/* EMAIL */}
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              className="border px-4 py-2 rounded w-full"
              onChange={handleChange}
            />

            {/* PHONE */}
            <div className="flex gap-2">
              <select className="border px-3 py-2 rounded">
                <option>🇮🇳 +91</option>
              </select>
              <input
                name="phone"
                placeholder="Mobile Number"
                className="border px-4 py-2 rounded w-full"
                onChange={handleChange}
              />
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="border px-4 py-2 rounded w-full"
                onChange={handleChange}
              />
              <span
                className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
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
                </span>
              </span>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 mt-4"
            >
              Sign Up
            </button>

            {/* LOGIN LINK */}
            <p className="text-center text-sm mt-4">
              Already have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer hover:underline"
                onClick={() => navigate("/auth/recruiter/login")}
              >
                Sign In
              </span>
            </p>
          </form>
        </div>

        {/* RIGHT INFO PANEL */}
        <div className="bg-gradient-to-b from-sky-500 to-blue-700 text-white p-10 hidden md:block">
          <h2 className="text-3xl font-bold mb-4">
            Create. Harness. <br /> Achieve. Lead.
          </h2>

          <p className="mb-6">
            CHAL Curatal to streamline your tech hiring and get top-tier talent fast.
          </p>

         <ul>
                     <li><FaCheckCircle />Database offers pre-interviewed and AI-assessed candidates</li>
                     <li><FaCheckCircle /> Assessment includes video, coding, and AI-powered evaluations</li>
                     <li><FaCheckCircle /> Events focus on diversity, women empowerment, and immediate joiners</li>
                     <li><FaCheckCircle /> Engage delivers top-rated candidates through impactful hackathons</li>
                   </ul>
         
          <p className="mt-6 font-semibold">
            Start your journey today and watch your team thrive!
          </p>
        </div>

      </div>
    </div>
  );
};

export default EmployerSignup;
