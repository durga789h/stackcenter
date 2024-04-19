import React, { useEffect } from 'react';
import { useAuth } from '../store/auth';

function About() {
  const { getabout, aboutdata } = useAuth();

  useEffect(() => {
    getabout();
  }, [getabout]);

  const latestAboutData = aboutdata && aboutdata.length > 0 ? aboutdata[aboutdata.length - 1] : null;

  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 bg-white'>
        <div >
          <img className='w-full' src="images/about.jpg" alt="img" />
        </div>
        <div id='bit3'>
          
          {latestAboutData ? (
            <div key={latestAboutData._id} className='mt-[-50px]'>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{latestAboutData.title}</h1>
              <p className="mt-4">{latestAboutData.description}</p>
              <div className="mt-4">
                <ul className="list-disc ml-6">
                  <li>{latestAboutData.para1}</li>
                  <li>{latestAboutData.para2}</li>
                  <li>{latestAboutData.para3}</li>
                </ul>
                <ul className="list-disc ml-6 mt-2">
                  <li>{latestAboutData.para4}</li>
                  <li>{latestAboutData.para5}</li>
                  <li>{latestAboutData.para6}</li>
                </ul>
              </div>
              <div className="text-center md:text-left mt-4"><button className='button'>Read More</button></div>
            </div>
          ) : (
            <p className="mt-4 text-center md:text-left">No about data available</p>
          )}
        </div>
      </div>
    </>
  );
}

export { About };
