// src/components/AdminPanel.js
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import { Navigate, Outlet } from "react-router-dom";
import "../AdminPanel.module.css";

import { AdminProvider } from "../store/admin-store";

import { useAuth } from "../../store/auth";

const AdminPanel = () => {
  const { userData, isloading } = useAuth();

  if (isloading) {
    return <h1>LOADING ...</h1>;
  }

  if (!userData.isAdmin) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <AdminProvider>
        <Sidebar />
        <Outlet />
      </AdminProvider>
    </>
  );
};

export default AdminPanel;
