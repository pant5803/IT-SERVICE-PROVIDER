//------------------------------------------------------------------------------------
import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
  const { token } = useAuth();

  // state variable to store allUsers data
  const [usersData, setUsersData] = useState([]);
  // state variable to store allContacts data
  const [contactsData, setContactsData] = useState([]);

  // to fetch all users data
  const fetchUsers = async () => {
    try {
      const res = await fetch("http://localhost:3000/getallusers", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        alert("unable to get user details");
        setUsersData([]);
      } else {
        const result = await res.json();
        console.log(result);
        setUsersData(result);
      }
    } catch (error) {
      setUsersData([]);
      alert("unable to get users");
    }
  };

  // to fetch all contacts data
  const fetchContacts = async () => {
    try {
      const res = await fetch("http://localhost:3000/getallcontacts", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!res.ok) {
        alert("unable to get Contacts details");
        setContactsData([]);
      } else {
        const result = await res.json();
        console.log(result);
        setContactsData(result);
      }
    } catch (error) {
      setContactsData([]);
      alert("unable to get Contacts Data");
    }
  };

  // function to delete a user
  const deleteuser = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/users/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchUsers();
        alert("user deleted");
      }
    } catch (error) {
      alert("unable to delete user");
      console.log(error);
    }
  };

  // function to delete a contact
  const deletecontact = async (id) => {
    try {
      const res = await fetch(`http://localhost:3000/contacts/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.ok) {
        fetchContacts();
        alert("contact deleted");
      }
    } catch (error) {
      alert("unable to delete contact");
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [token]);

  useEffect(() => {
    fetchUsers();
  }, [token]);

  return (
    <AdminContext.Provider
      value={{ usersData, contactsData, deleteuser, fetchUsers, deletecontact }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  const adminContextValue = useContext(AdminContext);
  if (!adminContextValue) {
    throw new Error("useAdmin used outside of the Provider");
  }
  return adminContextValue;
};
