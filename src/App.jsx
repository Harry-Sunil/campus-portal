import React from "react";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import ProtectedRoute from "./protected/ProtectedRoute";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentDashboard from "./student/StudentDashboard";
import Jobs from "./student/Jobs";
import Applications from "./student/Applications";
import Profile from "./student/Profile";

import AdminDashboard from "./admin/AdminDashboard";
import ManageJobs from "./admin/ManageJobs";
import StudentsList from "./admin/StudentsList";
import AdminApplications from "./admin/AdminApplications";
import RecruitersList from "./admin/RecruitersList";

import RecruiterDashboard from "./recruiter/RecruiterDashboard";
import PostJob from "./recruiter/PostJob";
import Applicants from "./recruiter/Applicants";
import BlacklistedCompanies from "./student/BlacklistedCompanies";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />

          {/* Student Protected Routes */}
          <Route
            path="/student"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/jobs"
            element={
              <ProtectedRoute role="student">
                <Jobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/applications"
            element={
              <ProtectedRoute role="student">
                <Applications />
              </ProtectedRoute>
            }
          />

          <Route
            path="/profile"
            element={
              <ProtectedRoute role="student">
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* Admin Protected Routes */}
          <Route
            path="/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/manage-jobs"
            element={
              <ProtectedRoute role="admin">
                <ManageJobs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/students-list"
            element={
              <ProtectedRoute role="admin">
                <StudentsList />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin-applications"
            element={
              <ProtectedRoute role="admin">
                <AdminApplications />
              </ProtectedRoute>
            }
          />

          <Route
            path="/recruiters-list"
            element={
              <ProtectedRoute role="admin">
                <RecruitersList />
              </ProtectedRoute>
            }
          />

          {/* Recruiter Protected Routes */}
          <Route
            path="/recruiter"
            element={
              <ProtectedRoute role="recruiter">
                <RecruiterDashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/post-job"
            element={
              <ProtectedRoute role="recruiter">
                <PostJob />
              </ProtectedRoute>
            }
          />

          <Route
            path="/applicants"
            element={
              <ProtectedRoute role="recruiter">
                <Applicants />
              </ProtectedRoute>
            }
          />
          <Route
  path="/blacklisted-companies"
  element={
    <ProtectedRoute role="student">
      <BlacklistedCompanies />
    </ProtectedRoute>
  }
/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App; 

