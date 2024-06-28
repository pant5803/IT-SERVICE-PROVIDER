//------------------------------------------------------------------------------------
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // storeToken func
  const storeToken = (serverToken) => {
    return localStorage.setItem("token", serverToken);
  };

  // get token variable
  const [token, settoken] = useState(localStorage.getItem("token"));

  // to store userData
  const [userData, setUserData] = useState("");

  // to store services data
  const [services, setServices] = useState([]);

  // loading flag
  const [isloading, setisloading] = useState(true);

  // logout function
  const logoutfunc = () => {
    settoken("");
    setUserData("");
    localStorage.removeItem("token");
  };

  // create user function to fetch user data from backend
  const user = async () => {
    try {
      const res = await fetch("http://localhost:3000/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const resultant = await res.json();
        setUserData({
          username: resultant.msg.username,
          email: resultant.msg.email,
          phone: resultant.msg.phone,
          isAdmin: resultant.msg.isAdmin,
          _id: resultant.msg._id,
        });
        // load ho gya
        setisloading(false);
      } else {
        // load ho gya : user data nhi mila lekin loading complete ho gai hai
        setisloading(false);
      }
    } catch (error) {
      setUserData({
        username: "",
        email: "",
        phone: "",
        isAdmin: false,
        _id: "",
      });
      // loading ho gai : bhale error aaya ho
      setisloading(false);
      console.error("uanble to get user details");
    }
  };
  useEffect(() => {
    user();
  }, [token]);

  // functions to fetch services data
  const servicesfunc = async () => {
    try {
      const res = await fetch("http://localhost:3000/services", {
        method: "GET",
      });

      if (res.ok) {
        const result = await res.json();
        setServices(result.msg);
        // console.log(result.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    servicesfunc();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        storeToken,
        token,
        settoken,
        user,
        userData,
        setUserData,
        logoutfunc,
        services,
        isloading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
