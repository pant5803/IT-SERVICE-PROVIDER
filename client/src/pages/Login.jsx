import css from "./Login.module.css";
import loginImage from "../images/login.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { useAuth } from "../store/auth";

const Login = () => {
  const { storeToken, settoken } = useAuth();

  const navigate = useNavigate();
  let [user, setuser] = useState({ email: "", password: "" });

  let email_inp = document.getElementById("email");
  let password_inp = document.getElementById("password");

  const changeEmail = (e) => {
    const userobj = {
      ...user,
      email: e.target.value,
    };
    setuser(userobj);
  };

  const changePassword = (e) => {
    const userobj = {
      ...user,
      password: e.target.value,
    };
    setuser(userobj);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("http://localhost:3000/login", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(user),
      });

      console.log(response);
      //--------------------------------------------------

      if (response.ok) {
        const result = await response.json();
        // STORE TOKEN IN LOCAL STORAGE OF BROWSER
        storeToken(result.token);
        // set token value
        settoken(localStorage.getItem("token"));
        console.log(result);
        email_inp.value = "";
        password_inp.value = "";
        // alert("user login successful");

        toast.success("user login successful", {
          position: "top-right", // Use string directly
          className: "toast-success",
          autoClose: 3000, // 3 seconds
        });
      } else {
        // STORE TOKEN IN LOCAL STORAGE OF BROWSER
        storeToken("");
        // set token value
        settoken(localStorage.getItem("token"));

        // alert("login failed");

        toast.error("Login failed", {
          position: "top-right", // Use string directly
          className: "toast-error",
          autoClose: 3000, // 3 seconds
        });
      }
      navigate("/Home");
    } catch (err) {
      console.log(err);
      // alert("login failed , server error");
      toast.error("login failed , server error", {
        position: "top-right", // Use string directly
        className: "toast-error",
        autoClose: 3000, // 3 seconds
      });
    }
  }

  return (
    <>
      <div className={css.main}>
        <div className={css.left}>
          <img
            src={loginImage}
            style={{ width: "70%", height: "90%", marginTop: "2.5rem" }}
            alt="image"
          />
        </div>
        <div className={css.right}>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className={`form-container ${css.toshit1}`}>
                  <h2 className="text-center mb-4">User Login</h2>
                  <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className={`form-control ${css.toshit2}`}
                        id="email"
                        placeholder="Enter email"
                        required
                        onChange={(e) => changeEmail(e)}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        className={`form-control ${css.toshit2}`}
                        id="password"
                        placeholder="Password"
                        required
                        onChange={(e) => changePassword(e)}
                      />
                    </div>
                    <br />
                    <button
                      type="submit"
                      className={`btn btn-primary btn-block ${css.toshit3}`}
                    >
                      Register
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
