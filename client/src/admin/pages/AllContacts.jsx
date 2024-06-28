import styles from "./AllContacts.module.css";
import { useAdmin } from "../store/admin-store";
import { FaEdit, FaTrash } from "react-icons/fa";

const AllContacts = () => {
  const { contactsData, deletecontact } = useAdmin();
  return (
    <>
      <div className={styles.AllContacts}>
        <div className={`container ${styles.userTableContainer}`}>
          <h2 className={styles.heading}>All Contacts</h2>
          <table className={`table table-dark table-hover ${styles.table}`}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th style={{ textAlign: "center" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {contactsData.map((item, index) => (
                <tr key={index}>
                  <td>{item._id}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td style={{ maxWidth: "8rem" }}>{item.message}</td>

                  <td
                    onClick={() => deletecontact(item._id)}
                    style={{ textAlign: "center" }}
                  >
                    <FaTrash className={styles.icon} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default AllContacts;
