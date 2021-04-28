import React from 'react';

export default function Share({ handleDownload }) {
  return (
    <div className='flex mt-8 justify-center text-center content-center items-center'>
      <h3 className='font-serif text-white text-shadow text-4xl mr-7'>Share it!</h3>
      <button
        onClick={() => handleDownload()}
        className='text-white bg-gray-700 border-white py-3 px-10 rounded-sm font-medium mr-2'>
        Download
      </button>
    </div>
  );
}
