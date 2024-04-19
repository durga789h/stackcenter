import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Uploadlist = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/videos');
        console.log(response)
        setVideos(response.data.videos);
        setLoading(false);
        setError(null);
      } catch (error) {
        console.error('Error fetching videos:', error);
        setError('Error fetching videos');
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);
  console.log(videos)

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const latestvideoData = videos && videos.length > 0 ? videos.slice(-1) : [];
  console.log(latestvideoData)

  return (
    <div className='text-black'>
      <h1>Upload List</h1>
      <ul style={{ listStyle: "none", marginLeft: "-90px" }}>
        {latestvideoData.map(video => (
          <li key={video._id} className='ml-40'>
            <video controls width="90%">
             <source src={`https://www.pexels.com/download/video/2253585/`} type="video/mp4"/>

             {/* <source src={`http://localhost:5000/${video.filename}`} type="video/mp4" />*/}
              Your browser does not support the video tag.
            </video>
            <p>{video.originalname}</p>
            <p>{video.filename}|</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Uploadlist;
