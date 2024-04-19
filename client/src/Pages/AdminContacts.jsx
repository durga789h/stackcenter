import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import '../Pages/allpage.css';
import { toast } from "react-toastify";

export function AdminContacts() {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/admin/contacts', {
        method: 'GET',
        headers: {
          Authorization: authorizationToken,
        }
      });
      const data = await response.json();
      console.log("contact data:", data);
      if (response.ok) {
        setContactData(data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: authorizationToken,
        }
      });
      if (response.ok) {
        getContactsData();
        toast.success("Deleted contact successfully");
      } else {
        toast.error("Failed to delete contact");
      }

    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getContactsData();
  }, [])

  return (
    <div>
      <h1>Admin Contact Panel</h1>
      <table className="table border border-orange-400 text-center ml-56 mt-5">
        <thead>
          <tr className="border border-orange-400">
            <th className="border border-orange-400">Username</th>
            <th className="border border-orange-400">Email</th>
            <th className="border border-orange-400">Subject</th>
            <th className="border border-orange-400">Message</th>
            <th className="border border-orange-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {contactData.map((contact, index) => (
            <tr key={index} className="border border-orange-400">
              <td className="border border-orange-400 p-2">{contact.username}</td>
              <td className="border border-orange-400 p-2">{contact.email}</td>
              <td className="border border-orange-400 p-2">{contact.subject}</td>
              <td className="border border-orange-400 p-2">{contact.message}</td>
              <td>
                <button className="bg-blue-500 p-2 rounded-md text-white" onClick={() => deleteContactById(contact._id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
