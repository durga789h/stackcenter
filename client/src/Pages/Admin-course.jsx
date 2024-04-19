import React from 'react';
import VideoUploadForm from '../component/UploadForm';

export default function Admincourse() {
  return (
    <div  className='flex flex-row justify-center item-center'>
      <div className='md:w-1/2 mx-auto mb-8 md:mb-0'>
        <div className='card border-2 border-black'>
          <div >
            <VideoUploadForm />
          </div>
        </div>
      </div>
      <div className='md:w-1/2'></div>
    </div>
  );
}
