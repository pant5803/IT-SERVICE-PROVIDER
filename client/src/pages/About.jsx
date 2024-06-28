import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./About.module.css";
import img from "../images/about.png";

import { useAuth } from "../store/auth";

const About = () => {
  const { userData } = useAuth();
  return (
    <div className={`${styles.outer}`}>
      <div className={`${styles.left}`}>
        <img src={img} style={{ height: "100%", width: "100%" }} />
      </div>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.heading}>About Us</h1>
        <h2 className={styles.paragraph}>
          Welcome , {userData.username ? userData.username : "to our website"}
        </h2>

        <p className={styles.paragraph}>
          We are a leading company in the tech industry, committed to providing
          top-notch services to our clients. Our team of dedicated professionals
          works around the clock to ensure customer satisfaction and innovative
          solutions.
        </p>
        <ul className="list-group">
          <li className={`list-group-item ${styles.listGroupItem}`}>
            Innovative Solutions
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            Customer Focused
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            24/7 Support
          </li>
          <li className={`list-group-item ${styles.listGroupItem}`}>
            Professional Team
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
