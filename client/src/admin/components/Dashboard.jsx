// src/components/Dashboard.js
import React from "react";
import styles from "./Dashboard.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegChartBar, FaRegCalendarAlt, FaRegFileAlt } from "react-icons/fa";

const Dashboard = () => {
  return (
    <>
      <div className={`container ${styles.container}`}>
        <h1 className={styles.header}>Admin Dashboard</h1>
        <div className={`card ${styles.card}`}>
          <div className="card-body">
            <FaRegChartBar className={styles.icon} />
            <h5 className="card-title">Statistics Overview</h5>
            <p className={`card-text ${styles.paragraph}`}>
              This section provides an overview of the latest statistics and
              metrics.
            </p>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className="card-body">
            <FaRegCalendarAlt className={styles.icon} />
            <h5 className="card-title">Upcoming Events</h5>
            <p className={`card-text ${styles.paragraph}`}>
              Stay updated with the latest events and meetings scheduled for the
              upcoming weeks.
            </p>
          </div>
        </div>
        <div className={`card ${styles.card}`}>
          <div className="card-body">
            <FaRegFileAlt className={styles.icon} />
            <h5 className="card-title">Recent Reports</h5>
            <p className={`card-text ${styles.paragraph}`}>
              Access the most recent reports and documents related to your
              projects and tasks.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
