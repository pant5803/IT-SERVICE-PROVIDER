import css from "./Register.module.css";
import signupImage from "../images/register.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import { useAuth } from "../store/auth";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const { storeToken, settoken } = useAuth();

  let [user, setuser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let password = document.getElementById("password");

  const changeusername = (e) => {
    const userobj = { ...user, username: e.target.value };
    setuser(userobj);
  };
  const changeemail = (e) => {
    const userobj = { ...user, email: e.target.value };
    setuser(userobj);
  };
  const changephone = (e) => {
    const userobj = { ...user, phone: e.target.value };
    setuser(userobj);
  };
  const changepassword = (e) => {
    const userobj = { ...user, password: e.target.value };
    setuser(userobj);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(user);

    try {
      const response1 = await fetch("http://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // passed user data in body
      });
      // what is response ?
      // console.log(response1);

      const result = await response1.json();
      // console.log(result);

      if (response1.ok) {
        username.value = "";
        email.value = "";
        phone.value = "";
        password.value = "";

        // store token
        storeToken(result.token);

        // set token
        settoken(localStorage.getItem("token"));

        toast.success(`User registered successfully`, {
          position: "top-right",
          className: "toast-success",
          autoClose: 3000,
        });

        navigate("/Home");
      } else {
        // alert(`${result.message} : ${result.details}`);
        toast.error(`${result.message} : ${result.details}`, {
          position: "top-right",
          className: "toast-error",
          autoClose: 3000,
        });
        // store token
        storeToken("");

        // set token
        settoken(localStorage.getItem("token"));
      }
    } catch (err) {
      console.log("error occured in user registration :- " + err);
      toast.error("error occured in user registration ", {
        position: "top-right",
        className: "toast-error",
        autoClose: 3000,
      });
    }
  }

  return (
    <>
      <div className={css.main}>
        <div className={css.left}>
          <img
            src={signupImage}
            style={{ width: "70%", height: "90%", marginTop: "2.5rem" }}
            alt="image"
          />
        </div>
        <div className={css.right}>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className={`form-container ${css.toshit1}`}>
                  <h2 className="text-center mb-4">User Registration</h2>
                  <form method="post" onSubmit={(e) => handleSubmit(e)}>
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        className={`form-control ${css.toshit2}`}
                        id="username"
                        placeholder="Enter username"
                        required
                        name="username"
                        onChange={(e) => changeusername(e)}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        className={`form-control ${css.toshit2}`}
                        id="email"
                        placeholder="Enter email"
                        required
                        name="email"
                        onChange={(e) => changeemail(e)}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="text"
                        className={`form-control ${css.toshit2}`}
                        id="phone"
                        placeholder="Enter phone number"
                        required
                        name="phone"
                        onChange={(e) => changephone(e)}
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
                        name="password"
                        onChange={(e) => changepassword(e)}
                      />
                    </div>
                    {/* <br />
                    <div className="form-group">
                      <label htmlFor="confirm-password">Confirm Password</label>
                      <input
                        type="password"
                        className={`form-control ${css.toshit2}`}
                        id="cpassword"
                        placeholder="Confirm Password"
                        required
                        name="cpassword"
                      />
                    </div> */}
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

export default Register;
