// src/components/UpdateUserForm.js
import React, { useEffect, useState } from "react";
import { FaUserEdit, FaEnvelope, FaMobileAlt } from "react-icons/fa";
import styles from "./UpdateUser.module.css";
import { useParams } from "react-router-dom";

import { useAuth } from "../../store/auth";
import { useAdmin } from "../store/admin-store";

const UpdateUserForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // get token
  const { token } = useAuth();
  const { fetchUsers } = useAdmin();

  // get user id with params
  const { id } = useParams();

  // fetch user deatils with this id
  const getUserById = async () => {
    try {
      const res = await fetch(`http://localhost:3000/users/getuser/${id}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res.ok) {
        const result = await res.json();
        setUsername(result.username);
        setEmail(result.email);
        setMobile(result.phone);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserById();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic

    // collect data of the form
    const formdata = {
      username,
      email,
      phone: mobile,
    };

    // update request
    const res = await fetch(`http://localhost:3000/users/update/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formdata),
    });

    if (res.ok) {
      fetchUsers();
      alert("updated successfully");
    } else {
      alert("not updated");
    }
    getUserById();
  };

  return (
    <div className={`container ${styles.updateUserFormContainer}`}>
      <h2 className={styles.heading}>Update User</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <br />
        <div className="form-group">
          <label htmlFor="username">
            <FaUserEdit className={styles.icon} /> Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope className={styles.icon} /> Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <br />
        <div className="form-group">
          <label htmlFor="mobile">
            <FaMobileAlt className={styles.icon} /> Mobile
          </label>
          <input
            type="tel"
            className="form-control"
            id="mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <br />
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateUserForm;
