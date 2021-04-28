import React from 'react';
import Loading from '../loading.svg';

export default function Cards({ children, ...rest }) {
  return (
    <section id='canvas' className='w-full relative ring-4 ring-white h-600px overflow-hidden bg-white ' {...rest}>
      {children}
    </section>
  );
}

Cards.Images = function CardsImages({ children, ...rest }) {
  return (
    <div className='frame' id='frame' {...rest}>
      {children}
    </div>
  );
};

Cards.Image = function CardsImage({ src, alt, ...rest }) {
  return (
    <div className='grid-item inline-block w-1/3  md:w-1/4 lg:w-1/5 border-2 border-white' {...rest}>
      <img className='block border-none' src={src} alt={alt} />
    </div>
  );
};

Cards.Placeholder = function CardsPlaceholder({ isDemoMode, children, ...rest }) {
  return isDemoMode ? (
    <div
      className='absolute bg-white opacity-70 z-10 top-0 left-0 h-full w-full flex justify-center content-center'
      {...rest}>
      <h2 className='text-2xl md:text-4xl text-gray-700 self-center text-center'>
        Start creating your own by typing your own keyword!
      </h2>
    </div>
  ) : null;
};

Cards.Loading = function CardsLoading({ isLoading, children, ...rest }) {
  return isLoading ? (
    <div
      className='absolute bg-gradient-to-r from-green-400 to-blue-500bg-opacity-90 z-10 top-0 left-0 h-full w-full flex justify-center content-center '
      {...rest}>
      <img className='w-24 h-24 self-center' src={Loading} alt='Loading' />
    </div>
  ) : null;
};
