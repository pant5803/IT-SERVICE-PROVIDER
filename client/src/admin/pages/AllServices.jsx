import styles from "./AllServices.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useAuth } from "../../store/auth";
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

const AllServices = () => {
  const { services } = useAuth();
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
  return (
    <>
      <div className={styles.AllServices}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.header}>All Services</h1>
          <div className="row">
            {services.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div className={`card ${styles.card}`}>
                  <div className="card-body">
                    {renderIcon(`${item.service}`)}
                    <h5 className="card-title">{item.service}</h5>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* <div className="col-md-4">
              <div className={`card ${styles.card}`}>
                <div className="card-body">
                  <FaLaptopCode className={styles.icon} />
                  <h5 className="card-title">Web Development</h5>
                  <p className="card-text">
                    Our web development team builds robust and scalable web
                    applications tailored to your needs.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default AllServices;
