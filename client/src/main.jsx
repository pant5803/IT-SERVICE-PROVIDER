import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Service from "./pages/Service.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Error404 from "./pages/Error404.jsx";
import Logout from "./pages/Logout.jsx";

import { AuthProvider } from "./store/auth.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ToastifyCustom.css"; // Import custom CSS

import AdminPanel from "./admin/components/AdminPanel.jsx";
import Dashboard from "./admin/components/Dashboard.jsx";
import AllContacts from "./admin/pages/AllContacts.jsx";
import AllServices from "./admin/pages/AllServices.jsx";
import AllUsers from "./admin/pages/AllUsers.jsx";
import UpdateUserForm from "./admin/pages/UpdateUser.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Service",
        element: <Service />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      { path: "/Logout", element: <Logout /> },
    ],
  },
  ,
  { path: "/Logout", element: <Logout /> },
  {
    path: "/admin",
    element: <AdminPanel />,

    children: [
      { path: "/admin/users", element: <AllUsers /> },
      { path: "/admin/contacts", element: <AllContacts /> },
      { path: "/admin/services", element: <AllServices /> },
      { path: "/admin/dashboard", element: <Dashboard /> },
      { path: "/admin/updateuser/:id", element: <UpdateUserForm /> },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

//----------------------------

//---------------------------
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
  </React.StrictMode>
);
