import React from 'react';
import Uploadlist from './Uploadlist';
import { Link } from "react-router-dom";


export default function Courses() {
  return (
    <div>
      <div className="text-black w-full  p-4 text-center">
        <div>
          <h3 className="text-lg font-semibold">CATEGORIES</h3>
          <h1 className="text-3xl font-bold">Courses Categories</h1>
        </div>
        <div >
        <Uploadlist/>
        </div>

        <div className='flex flex-col justify-center '>
      
          <div>
          <img src="https://imageio.forbes.com/specials-images/imageserve/615a844b0e678d9d11c5fc26/The-5-Biggest-Data-Science-Trends-In-2022/960x0.jpg?format=jpg&width=1440" alt="img" className='w-full'/>
        <span >Data Science & AI</span>
        </div>
        <div>
          <img src="https://t3.ftcdn.net/jpg/02/14/87/96/240_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg" alt="img" className='w-full' />
          <span>Web Development</span>
          </div>
         
        
        <div>
          <img src="https://sasanadigital.com/wp-content/uploads/2022/11/13-12-_-IH-Digital-Marketing.webp" alt="img" className='w-full' />
          <span>digital marketing</span>
        </div>
        <div>
          <img  src="https://attitudeblog.devprolive.in/wp-content/uploads/2023/08/graphics-designing.jpg" alt="img" className='w-full' />
          <span>graphics design</span>
        </div>
        </div>
    
      </div>
    </div>
  );
}
