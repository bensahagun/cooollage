import React from 'react';

export default function Badge({ to, src }) {
  const url = to ? to.replace('git+', '') : '';

  return (
    <button
      className='h-10 w-10 absolute top-0 right-0 bg-white p-3 outline-none focus:outline-none'
      onClick={() => window.open(url)}>
      <img src={src} alt='Github' />
    </button>
  );
}
