import React from "react";
import curatalLogo from "../../assets/curatalLogo.jpg";
import chalcuratal from "../../assets/chalcuratal.jpg";
import { useLocation, useNavigate } from "react-router-dom";
 
const BaseNavbarMenu = [
  { id: 1, title: "Find Talent", path: "/" },
 
  {
    id: 2,
    title: "Solutions",
    dropdown: "mega",
    sections: [
      {
        heading: "Database",
        items: [
          " Pre-Interviewed Candidates",
          "AI-Interviewed Candidates",
          "Un-Interviewed Candidates",
        ],
      },
      {
        heading: "Assessment",
        items: ["Video Interviews", "Coding Assessment", "AI Assessment"],
      },
      {
        heading: "Events",
        items: [
          "Diversity Hiring",
          "Recruiting Events",
          "Early Joiner Events",
          "Women in Digital",
        ],
      },
      {
        heading: "Engage",
        items: ["Hackathon", "Talent Pipe", "Club 50"],
      },
    ],
  },
 
  {
    id: 3,
    title: "Affiliates",
    dropdown: "simple",
    items: [
      "Interviewers",
      "Mentors",
      "Resume Writers",
      "Coaching",
      "Upskilling",
      "Partners",
    ],
  },
 
  {
    id: 4,
    title: "Sign In",
    dropdown: "simple",
    items: [
      "Employer",
      "Candidate",
      "Interviewers",
      "Curatal Users",
      "Coach",
      "Mentor",
    ],
  },
];
 
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
 
  // Toggle CTA between candidates and employers based on current route
  const isCandidateRoute = location.pathname?.includes("/candidate");
  const NavbarMenu = [
    ...BaseNavbarMenu,
    {
      id: 5,
      title: isCandidateRoute ? "For Employers" : "For Candidates",
      path: isCandidateRoute
        ? "/auth/recruiter/account"
        : "/auth/candidate/home",
    },
  ];
  return (
    <nav className="w-full bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={curatalLogo}
            alt="Curatal Logo"
            className="h-10 object-contain"
          />
        </div>
 
        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-blue-900 font-medium relative">
          {NavbarMenu.map((menu) => (
            <li
              key={menu.id}
              className="relative group cursor-pointer"
              onClick={menu.path ? () => navigate(menu.path) : undefined}
            >
              <span className="hover:text-blue-600 transition">
                {menu.title}
              </span>
 
              {/* SIMPLE DROPDOWN */}
              {menu.dropdown === "simple" && (
                <div className="absolute left-0 top-10 hidden group-hover:block bg-white shadow-lg rounded-lg py-3 w-56 z-50">
                  <ul className="text-sm text-gray-700">
                    {menu.items.map((item, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-blue-50 hover:text-blue-600 flex items-center gap-2"
                      >
                        <span className="text-black">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
 
              {/* MEGA DROPDOWN */}
              {menu.dropdown === "mega" && (
                <div className="absolute left-[-200px] top-10 hidden group-hover:block bg-white shadow-xl rounded-xl p-6 w-[700px] z-50">
                  <div className="grid grid-cols-4 gap-6">
                    {menu.sections.map((section, index) => (
                      <div key={index}>
                        <h4 className="font-semibold text-blue-900 mb-3">
                          {section.heading}
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-2">
                          {section.items.map((item, idx) => (
                            <li
                              key={idx}
                              className="hover:text-blue-600 cursor-pointer"
                            >
                              <span className="text-black">•</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
 
        {/* Right Section */}
        <div className="flex items-center gap-2">
          <img
            src={chalcuratal}
            alt="Chal Curatal"
            className="h-10 object-contain"
          />
        </div>
      </div>
    </nav>
  );
};
 
export default Navbar;
 