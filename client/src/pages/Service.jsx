import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Service.module.css";
import {
  FaChartLine,
  FaCloud,
  FaShieldAlt,
  FaHandshake,
  FaBullhorn,
  FaPenNib,
  FaSearch,
  FaPalette,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";

import { useAuth } from "../store/auth";

const Service = () => {
  const renderIcon = (service) => {
    if (service == "Mobile App Development") {
      return <FaMobileAlt className={styles.icon} />;
    }
    if (service == "Web Development") {
      return <FaLaptopCode className={styles.icon} />;
    }
    if (service == "Graphic Design") {
      return <FaPalette className={styles.icon} />;
    }
    if (service == "SEO Services") {
      return <FaSearch className={styles.icon} />;
    }
    if (service == "Content Writing") {
      return <FaPenNib className={styles.icon} />;
    }
    if (service == "Digital Marketing") {
      return <FaBullhorn className={styles.icon} />;
    }
    if (service == "IT Consulting") {
      return <FaHandshake className={styles.icon} />;
    }
    if (service == "Cybersecurity") {
      return <FaShieldAlt className={styles.icon} />;
    }
    if (service == "Cloud Computing") {
      return <FaCloud className={styles.icon} />;
    }
    if (service == "Data Analytics") {
      return <FaChartLine className={styles.icon} />;
    }
  };
  const { services } = useAuth();

  return (
    <>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.heading}>Our Services</h1>
        <div className="row">
          {services.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div
                className={`card text-center shadow-sm p-3 mb-5 bg-white rounded ${styles.serviceCard}`}
                style={{ height: "auto" }}
              >
                {renderIcon(`${item.service}`)}
                {/* <img src={img} className={styles.serviceIcon} /> */}
                <h2 className={styles.serviceTitle}>{item.service}</h2>
                <h2 className={styles.serviceTitle}>Price : {item.price}</h2>
                <h2 className={styles.serviceTitle}>
                  Provider : {item.provider}
                </h2>
                <p className={styles.serviceDescription}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Service;
