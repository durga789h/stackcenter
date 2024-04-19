import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import {toast} from "react-toastify";

function Adminhome() {
  const { createHomeData, homedata, gethome } = useAuth();
  
  const [formData, setFormData] = useState({
    title: 'asdsad',
    description: 'asdasdasdasd',
    image: null, // Updated state to store file object
    uploadedAt: "asdasdasdasd",
  });

  useEffect(() => {
    gethome();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    // If it's a file input, store the file object, otherwise store the value
    const newValue = name === "image" ? files[0] : value;
    setFormData({...formData, [name]: newValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('title', formData.title);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('image', formData.image); // Append file object
      formDataToSend.append('uploadedAt', formData.uploadedAt);

      await createHomeData(formDataToSend);
      toast.success("update home data is successful")
      // Reset form data after submission
      setFormData({
        title: '',
        description: '',
        image: null,
        uploadedAt: "",
      });
    } catch (error) {
      console.error('Error creating home data:', error);
      toast.error("update is failed");
    }
  };
  
  
  return (
    <>
      <img src={formData.image} alt="" />
      <div className='flex flex-row'>
        <div>
          <img  src="http://stackcentre.in/img/about.jpg" alt="img" />
        </div>
        <div>
          <h3>EDIT/CREATE Home DATA</h3>
          <form onSubmit={handleSubmit} className='leading-normal space-y-4' >
            <input  class="block w-ful px-4 py-2 border rounded-md" type="text" name="title" value={formData.title} placeholder="Title" onChange={handleChange} />
            <textarea  class="border text-red-500 rounded-md"  style={{borderColor:" #33ff55 "}} name="description" rows={10} cols={54} value={formData.description} placeholder="Description" onChange={handleChange} />
            <input  class="block w-full px-4 py-2 border rounded-md" type="file" accept=".jpg" name="image" onChange={handleChange} />
            <input  class="block w-full px-4 py-2 border rounded-md" type="text" name="uploadedAt" value={formData.uploadedAt} placeholder="Uploaded At" onChange={handleChange} />
            <button className='bg-lime-500 p-3 rounded-md mt-2 text-white' type="submit" >Save</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Adminhome;
