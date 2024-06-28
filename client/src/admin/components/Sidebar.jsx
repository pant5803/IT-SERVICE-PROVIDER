// src/components/Sidebar.js
import React from "react";
import {
  FaHome,
  FaUsers,
  FaAddressBook,
  FaServicestack,
  FaCog,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <h2 className={styles.logo}>AdminPanel</h2>
      <ul className={styles.navList}>
        <li>
          <FaHome className={styles.icon} />
          <Link to="/admin/dashboard">Dashboard</Link>
        </li>
        <li>
          <FaUsers className={styles.icon} />
          <Link to="/admin/users">All Users</Link>
        </li>
        <li>
          <FaAddressBook className={styles.icon} />
          <Link to="/admin/contacts">All Contacts</Link>
        </li>
        <li>
          <FaServicestack className={styles.icon} />
          <Link to="/admin/services">All Services</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
