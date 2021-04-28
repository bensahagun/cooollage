import React from 'react';

export default function Search({ children, ...rest }) {
  return (
    <section id='search' className='py-1'>
      {children}
    </section>
  );
}

Search.Tags = function SearchTags({ children, ...rest }) {
  return (
    <div className='py-1 px-2 mx-auto w-full md:py-5 md:px-10' {...rest}>
      <label className='text-white self-center mr-2'>Popular tags:</label>
      {children}
    </div>
  );
};

Search.Text = function SearchText({ children, ...rest }) {
  return (
    <div className='py-5 px-10' {...rest}>
      <h3 className='text-white text-2xl text-shadow-sm font-semibold'>
        <i className='text-xl'>or</i> Use your own keyword
      </h3>
      {children}
    </div>
  );
};
