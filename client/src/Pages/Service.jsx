import React, { useEffect, useState } from 'react';

export default function Service() {
  const [services, setServices] = useState([]);

  const getServices = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/data/service', {
        method: 'GET',
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
      }
    } catch (error) {
      console.error(`Error fetching services: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <h1>It's service page</h1>
      <div className='flex flex-row flex-wrap justify-center'>
        {services.map((value) => (
          <div key={value.srno} className='w-1/3 p-4'>
            <div className='border border-orange-500 p-4'>
              <img
                src="https://merientinfotech.com/wp-content/uploads/2019/12/basic-computer-training-banner-1200x800.jpg"
                alt="computer course image"
                className='w-full h-auto mb-4'
              />
              <p className='font-bold'>{value.service}</p>
              <p>{value.description}</p>
              <p className='font-bold'>Price: {value.price}</p>
              <p>Provider: {value.provider}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
