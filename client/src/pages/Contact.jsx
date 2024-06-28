import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Contact.module.css";
import img from "../images/support.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../store/auth";

const Contact = () => {
  const { userData } = useAuth();

  const navigate = useNavigate();

  // contact variable to store the values of contact form
  const [contact, setcontact] = useState({
    username: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setcontact({
      ...contact,
      username: userData.username || "",
      email: userData.email || "",
    });
  }, [userData]);

  // changename function
  const changename = (e) => {
    setcontact({
      ...contact,
      username: e.target.value,
    });
  };
  // changeemail function
  const changeemail = (e) => {
    setcontact({
      ...contact,
      email: e.target.value,
    });
  };
  // changemessage function
  const changemessage = (e) => {
    setcontact({
      ...contact,
      message: e.target.value,
    });
  };

  // handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact);

    //--------------------------
    try {
      const response = await fetch("http://localhost:3000/contact", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        body: JSON.stringify(contact),
      });

      console.log(response);

      const result = await response.json();
      console.log(result);

      if (response.ok) {
        alert("message sent successful");
        setcontact({
          ...contact,
          message: "",
        });
      } else {
        alert("failed");
      }
      navigate("/Contact");
    } catch (err) {
      console.log(err);
      alert("failed , server error");
    }
    //--------------------------
  };

  return (
    <>
      <div style={{ display: "flex" }}>
        <div className={`container ${styles.left}`}>
          <img src={img} style={{ height: "100%", width: "100%" }} />
        </div>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.heading}>Contact Us</h1>
          <form method="post" onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group mb-3">
              <label htmlFor="name">Name</label>
              <input
                value={contact.username}
                type="text"
                className={`form-control ${styles.formControl}`}
                id="name"
                name="name"
                placeholder="Enter your name"
                required
                onChange={(e) => changename(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className={`form-control ${styles.formControl}`}
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                value={contact.email}
                onChange={(e) => changeemail(e)}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="message">Message</label>
              <textarea
                className={`form-control ${styles.formControl}`}
                id="message"
                name="message"
                rows="5"
                placeholder="Enter your message"
                required
                value={contact.message}
                onChange={(e) => changemessage(e)}
              ></textarea>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${styles.btnPrimary}`}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <br />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14286.926707367684!2d80.29240299590732!3d26.464376789962643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c380abb2834b7%3A0xdbd843aead3703a9!2sShastri%20Nagar%2C%20Kanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1718204874001!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <br />
    </>
  );
};

export default Contact;
