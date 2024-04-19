import React, { useState, useEffect } from 'react';
import { useAuth } from '../store/auth';
import {toast} from "react-toastify";

function Adminabout() {
  const { createAboutData, aboutdata, getabout } = useAuth();
  
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    para1: '',
    para2: '',
    para3: '',
    para4: '',
    para5: '',
    para6: '',
  });

  useEffect(() => {
    getabout();
  }, [getabout]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Check if about data already exists
      if (aboutdata.length > 0) {
        // If data exists, update it
        await updateAboutData();
      } else {
        // If data doesn't exist, create new data
        await createAboutData(formData);
      }
      // Reset form data after submission
      setFormData({
        title: '',
        description: '',
        para1: '',
        para2: '',
        para3: '',
        para4: '',
        para5: '',
        para6: '',
      });
      toast.success("about page update successfull")
    } catch (error) {
      console.error('Error creating/updating about data:', error);
      toast.error("update failed for about updation");
    }
  };

  const updateAboutData = async () => {
    try {
      const updatedData = { ...aboutdata[0], ...formData };
      await createAboutData(updatedData);
    } catch (error) {
      console.error('Error updating about data:', error);
    }
  };

  return (
    <div className='container mx-auto'>
      <div className='flex justify-center'>
        <div className='flex flex-col items-center'>
          <img className='h-auto w-full md:max-w-xs lg:max-w-sm xl:max-w-md mb-6' src="http://stackcentre.in/img/about.jpg" alt="img" />
          <div className='w-full max-w-md'>
            <h3 className='text-center text-lg font-bold mb-4'>EDIT/CREATE ABOUT DATA</h3>
            <form onSubmit={handleSubmit} className='space-y-4'>
              <input className='input' type="text" name="title" value={formData.title} placeholder="Title" onChange={handleChange} />
              <textarea style={{borderColor:"#33ff55 "}} className='input border rounded-md' name="description" rows={10} cols={40} value={formData.description} placeholder="Description" onChange={handleChange} />
              {[1, 2, 3, 4, 5, 6].map((index) => (
                <input key={index} className='input' type="text" name={`para${index}`} value={formData[`para${index}`]} placeholder={`Para ${index}`} onChange={handleChange} />
              ))}
              <button type="submit" className='button'>Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adminabout;
