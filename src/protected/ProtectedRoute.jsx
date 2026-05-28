import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const student = JSON.parse(localStorage.getItem("student"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  const recruiter = JSON.parse(localStorage.getItem("recruiter"));

  if (role === "student" && student) {
    return children;
  }

  if (role === "admin" && admin) {
    return children;
  }

  if (role === "recruiter" && recruiter) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default ProtectedRoute;