import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import Button from "../component/Button";
import '../Pages/allpage.css';
import { toast } from "react-toastify";



export const AdminUpdate = () => {

  const contactButtonText = "UPDATE NOW";
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: ""
  });
  const params = useParams();
  const { authorizationToken } = useAuth();
  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({ ...data, [name]: value })

  }
  //to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/update/${params.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          Authorization: authorizationToken,
        },
        body: JSON.stringify(data),
      });
      console.log(response);
      if (response.ok) {
        toast.success("updated successfully");
      

      }
      else {
        toast.error(" not updated successfully");
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getSingleUserData();
  }, [])

  //get singleUser Data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/admin/users/${params.id}`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      console.log(response);

      if (response.ok) {
        const data = await response.json();
        console.log(`user single data:${data}`);
        setData(data);
        // getAllUsersData(data);
      }

    } catch (error) {
      console.log(error)

    }
  }

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h1 className='text-center text-xl text-orange-400 underline mt-[-1px]'>Update user Data</h1>
          <div className='mt-[-1px]'>
            <form className='bods p-3' onSubmit={handleSubmit}>
              <input className="downs" type="text" name='username' value={data.username} onChange={handleChange} id='username' placeholder='Name' />
              <input className='downs downs1' type="email" name='email' value={data.email} onChange={handleChange} id='email' placeholder='Email' />
              <input className='downs downs1' type="text" name='phone' value={data.phone} onChange={handleChange} id='phone' placeholder='Phone' />

              <Button buttonText={contactButtonText} className="mb-3" />

              {/* Replaced Button component with a button element */}
            </form>
            <div>
              <img src="https://thumbs.dreamstime.com/b/social-media-stay-connected-concept-people-using-81499037.jpg" alt="contact image" width={700} height={500} />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}