import styles from "./AllUsers.module.css";
import { useAdmin } from "../store/admin-store";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllUsers = () => {
  const { usersData, deleteuser } = useAdmin();
  const handleDelete = (id) => {
    deleteuser(id);
  };
  return (
    <>
      <div className={styles.AllUsers}>
        <div className={`container ${styles.userTableContainer}`}>
          <h2 className={styles.heading}>All Users</h2>
          <table className={`table table-dark table-hover ${styles.table}`}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>isAdmin</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData.map((user, index) => (
                <tr key={index}>
                  <td>{user._id}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  {user.isAdmin ? <td>YES</td> : <td>NO</td>}
                  <td>
                    <Link to={`/admin/updateuser/${user._id}`}>
                      <FaEdit className={styles.icon} />
                    </Link>
                  </td>
                  <td onClick={() => handleDelete(user._id)}>
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
export default AllUsers;
