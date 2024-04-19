import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const VideoUploadForm = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('video', selectedFile);

      try {
        const response = await axios.post('http://localhost:5000/videos/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
        toast("video upload successfully")
        // Handle success
      } catch (error) {
        console.error('Error uploading video:', error);
        // Handle error
      }
    }
  };

  return (
    <div className='flex justify-center p-2 mr-2'>
      <input type="file" onChange={handleFileChange} />
      <button className='bg-blue-500 rounded-md text-white p-3 mt-3 mb-3' onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default VideoUploadForm;
