import React from 'react';

export default function Images({ children, ...rest }) {
  return (
    <div className='frame' id='frame' {...rest}>
      {children}
    </div>
  );
}

Images.item = function ImagesItem({ src, alt, ...rest }) {
  return (
    <div className='grid-item inline-block w-1/3  md:w-1/4 lg:w-1/5 border-2 border-white' {...rest}>
      <img className='block border-none' src={src} alt={alt} />
    </div>
  );
};
