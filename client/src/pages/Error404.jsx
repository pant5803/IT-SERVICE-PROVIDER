import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Error404.module.css';

const Error404 = () => {
  return (
    <div className={`container ${styles.container}`}>
      <FaExclamationTriangle className={styles.icon} />
      <h1 className={styles.heading}>404</h1>
      <p className={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>
        Go Back Home
      </Link>
    </div>
  );
};

export default Error404;
