import { Routes, Route, Navigate } from "react-router-dom";
import AuthHome from "../pages/Home/AuthHome";
import EmployerAccount from "../pages/Auth/EmployerAccount";
import EmployerLogin from "../pages/Auth/EmployerLogin";
import EmployerSignup from "../pages/Auth/EmployerSignup";
import AuthLayout from "../layouts/AuthLayout";  
import { FaUser, FaUserPlus } from "react-icons/fa";     
//  for Candidatate

import CandidateHome from "../pages/Candidate/CandidateHome";
import CandidateLogin from "../pages/Candidate/CandidateLogin";
import CandidateSignup from "../pages/Candidate/CandidateSignup";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Auth pages wrapped in layout */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to="recruiter/account" replace />} />
        <Route path="home" element={<AuthHome />} />
        <Route path="recruiter/account" element={<EmployerAccount />} />
        <Route path="recruiter/login" element={<EmployerLogin />} />
        <Route path="recruiter/signup" element={<EmployerSignup />} />


        {/* Candidate Routes */}       
       <Route path="candidate/home" element={<CandidateHome />} />
        <Route path="candidate/login" element={<CandidateLogin />} />
        <Route path="candidate/signup" element={<CandidateSignup />} /> 
      </Route>

      {/* Default landing page */}
      <Route path="/" element={<AuthHome />} />

      {/* Catch-all */}
      {/* <Route path="*" element={<Navigate to="/" replace />} /> */}
    </Routes>
  );
};

export default AppRoutes;
