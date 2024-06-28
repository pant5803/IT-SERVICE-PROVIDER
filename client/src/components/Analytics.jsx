import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Analytics.module.css";

const Analytics = () => {
  return (
    <div className={`container text-center ${styles.container}`}>
      <h2 className="mb-4">Our Achievements</h2>
      <div className="row">
        <div className="col-md-3">
          <div
            className={`card shadow-sm p-3 mb-5 bg-white rounded ${styles.card}`}
          >
            <div className="card-body">
              <h3 className={`card-title ${styles.cardTitle}`}>50+</h3>
              <p className={`card-text ${styles.cardText}`}>
                Registered Companies
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`card shadow-sm p-3 mb-5 bg-white rounded ${styles.card}`}
          >
            <div className="card-body">
              <h3 className={`card-title ${styles.cardTitle}`}>1,00,000+</h3>
              <p className={`card-text ${styles.cardText}`}>Happy Clients</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`card shadow-sm p-3 mb-5 bg-white rounded ${styles.card}`}
          >
            <div className="card-body">
              <h3 className={`card-title ${styles.cardTitle}`}>500+</h3>
              <p className={`card-text ${styles.cardText}`}>
                Software Developers
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div
            className={`card shadow-sm p-3 mb-5 bg-white rounded ${styles.card}`}
          >
            <div className="card-body">
              <h3 className={`card-title ${styles.cardTitle}`}>24/7</h3>
              <p className={`card-text ${styles.cardText}`}>Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
