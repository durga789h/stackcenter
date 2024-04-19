import React, { useEffect } from 'react';
import { useAuth } from '../store/auth';
import { Link } from 'react-router-dom';

function Home() {
  const { gethome, homedata } = useAuth();

  useEffect(() => {
    gethome();
  },[]);

  const text = {
    marginTop: "28px",
  };

  // Get the last item in the homedata array
  const latestHomeData = homedata && homedata.length > 0 ? homedata.slice(-1) : [];
console.log(latestHomeData)
  return (
    <div>
      <div>
        <h3 className='text-red-500'>Home</h3>

        {
          latestHomeData.map((item, index) => {
            return (
              <div key={index}>
                <h1 className='text-lime-500'>{item.title}</h1>
                <p className='mb-3 text-orange-500'>{item.description}</p>
                <div className='flex justify-center item-center'>
               {/*<img src={`http://localhost:5000/${item.filePath.replace(/\\/g, '/')}`} alt="img" width={500} /> */}
                    
               <img src={`http://localhost:5000/${item.filePath}`} alt="img" width={500}/>
                </div>
                <p>{item.uploadedAt}</p>
                <div style={text}><button className='p-3' style={{ color: 'white', backgroundColor: 'rgba(4, 26, 87, 0.911)' }}><Link to='/courses'  style={{color:"white",textDecoration:"none"}}>Read More</Link></button></div>
              </div>
            )
          })
        }


        
      </div>
    </div>
  );
}

export { Home };
