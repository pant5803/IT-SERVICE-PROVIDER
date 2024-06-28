import { Outlet } from "react-router-dom";
import css from "./App.module.css";
import Navbar from "./components/Navbar";
import Footer from "./pages/Footer";

import { useEffect } from "react";

import { useAuth } from "./store/auth";

function App() {
  const { user, token } = useAuth();

  // call this user function inside useEffect hook
  useEffect(() => {
    user();
  }, [token]);

  return (
    <>
      <div className={css.appdiv}>
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
