import React from 'react';

export default function Header({ children, ...rest }) {
  return (
    <>
      <header className='text-center w-full px-3 md:w-4/5 md:px-0 mx-auto my-10 z-1 relative' {...rest}>
        {children}
      </header>
    </>
  );
}

Header.Title = function HeaderTitle({ children, ...rest }) {
  return (
    <section id='header-title' {...rest}>
      {children}
    </section>
  );
};
