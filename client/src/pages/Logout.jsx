import {  useEffect } from "react";

import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const { logoutfunc } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    logoutfunc();
    return navigate("/Home");
  }, [logoutfunc]);
};
export default Logout;
