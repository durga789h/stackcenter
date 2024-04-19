import { useEffect, useState } from "react";
import { ImUsers } from "react-icons/im";
import { useAuth } from "../store/auth";
import '../Pages/allpage.css';
import { Link } from "react-router-dom";
import '../Pages/allpage.css'

export function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();

  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
console.log(response)
      if(response.ok){
        const data=await response.json();
        console.log('user data',data);
        setUsers(data)
      }
    } catch (error) {
      console.error("Error fetching users data:", error.message);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, []); // Dependency array is empty, so this effect will run once when the component mounts

const deleteUser=async(id)=>{
  try {
    const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: authorizationToken,
    },
  });
  console.log(response);

  if(response.ok){
    const data=await response.json();
    console.log(`user after delete:${data}`);
    getAllUsersData(data);
  }
    
  } catch (error) {
    console.log(error)
    
  }
  

}
  return (
    <div className="pad">
      <h1 style={{ textDecoration: "underline" }}>
        <ImUsers /> admin users
      </h1>
      <div>
        <table className="center">
          <thead className="boder">
            <tr>
              <th>name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Update</th>
              <th >Delete</th>
            </tr>
          </thead>
          <tbody>
          {users.map((user,index) =>{
            return (
            <tr key={index}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td className="green"><Link className="green1" to={`/admin/users/${user._id}/edit`}>Edit</Link></td>
              <td className="red"><span className="red1" onClick={()=>deleteUser(user._id)}>delete</span></td>
            </tr>
            )
          }
          )}
          
          </tbody>
        </table>
      </div>
    
    </div>
  );
}
