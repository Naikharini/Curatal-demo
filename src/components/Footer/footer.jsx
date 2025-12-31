import React from "react";
import isoPortal1 from "../../assets/isoPortal1.png";
import isoPortal2 from "../../assets/isoPortal2.png";

import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-sky-50 text-gray-700 pt-12 relative">
      {/* ================= TOP SECTION ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Registered Office */}
        <div>
          <h3 className="font-semibold mb-3">Registered Office</h3>
          <p className="font-semibold">Progressive Video Pvt. Ltd</p>
          <p className="text-sm mt-2 leading-6">
            "Mandara", #29/32-1,<br />
            19th Cross, Krishnaya Layout,<br />
            Banashankari 3rd Stage,<br />
            Bengaluru - 560070
          </p>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">About Curatal</li>
            <li className="hover:text-blue-600 cursor-pointer">Our Journey</li>
            <li className="hover:text-blue-600 cursor-pointer">Leadership</li>
            <li className="hover:text-blue-600 cursor-pointer">Careers</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">Downloads</li>
            <li className="hover:text-blue-600 cursor-pointer">Blogs</li>
            <li className="hover:text-blue-600 cursor-pointer">Media</li>
            <li className="hover:text-blue-600 cursor-pointer">Events</li>
            <li className="hover:text-blue-600 cursor-pointer">CTRN</li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h3 className="font-semibold mb-3">Solutions</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-blue-600 cursor-pointer">
              For Employers
            </li>
            <li className="hover:text-blue-600 cursor-pointer">
              For Candidates
            </li>
          </ul>
        </div>
      </div>

      {/* ================= OFFICES ================= */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-sm">
        <div>
          <h3 className="font-semibold mb-2">
            Corporate Office – Bengaluru
          </h3>
          <p className="leading-6">
            Nexus, No.13 (Old No.614),<br />
            45th Cross, Marenahalli Road,<br />
            8th Block, Jayanagar,<br />
            Bengaluru - 560070
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Branch Office – Pune</h3>
          <p className="leading-6">
            91Springboard, Sky Loft,<br />
            Creaticity Mall,<br />
            Opp. Golf Course,<br />
            Pune - 411006
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Branch Office – Hyderabad</h3>
          <p className="leading-6">
            2nd Floor, 91Springboard,<br />
            HITEC City, Kondapur,<br />
            Hyderabad - 500081
          </p>
        </div>
      </div>

      {/* ================= CONTACT ================= */}
      <div className="max-w-7xl mx-auto px-6 mt-10 text-sm">
        <h3 className="font-semibold mb-2">Contact</h3>
        <p>📧 reach@curatal.com</p>
        <p className="mt-1">📞 +91 63645 21909</p>

        {/* ISO Logos */}
        <div className="flex items-center gap-4 mt-4">
          <img src={isoPortal1} alt="ISO 9001" className="h-12" />
          <img src={isoPortal2} alt="ISO 27001" className="h-12" />
        </div>
      </div>

      {/* ================= SOCIAL ICONS ================= */}
      <div className="flex justify-center gap-6 mt-10 text-xl text-blue-600">
        <FaWhatsapp className="cursor-pointer hover:scale-110 transition" />
        <FaLinkedin className="cursor-pointer hover:scale-110 transition" />
        <FaYoutube className="cursor-pointer hover:scale-110 transition" />
        <FaFacebook className="cursor-pointer hover:scale-110 transition" />
        <FaInstagram className="cursor-pointer hover:scale-110 transition" />
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t mt-10 py-4 text-center text-sm">
        <p>© 2025 Curatal. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-2">
          <span className="cursor-pointer hover:text-blue-600">
            Privacy Policy
          </span>
          <span className="cursor-pointer hover:text-blue-600">
            Terms & Conditions
          </span>
        </div>
      </div>

      {/* ================= SCROLL TO TOP ================= */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;
