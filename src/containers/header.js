import React from 'react';
import Particles from 'react-particles-js';
import { Header, Search, Badge } from '../components/';

import particles from '../fixtures/particles.json';
import tags from '../fixtures/tags.json';

export default function HeaderContainer({ handleTagClick, handleFormSubmit, setSearchInput }) {
  return (
    <>
      <Particles params={particles} className='absolute z-0 w-full h-full top-0' />
      <Badge src='/icons/github.png' to={process.env.REACT_APP_REPO_URL} />
      <Header>
        <Header.Title>
          <h1 className='text-6xl font-serif mb-1 text-white text-shadow-sm'>Cooollage</h1>
          <p className='text-white my-5 text-lg text-shadow-sm'>📷 Make your own cool dynamic collage with Unsplash!</p>
        </Header.Title>
        <Search>
          <Search.Tags>
            {tags.map((tag, i) => (
              <button
                key={i}
                className='hover:bg-white hover:text-gray-600 px-3 py-1 mr-1 mt-1 text-sm rounded-sm bg-gray-600 text-white ease-linear transition-all focus:outline-none shadow-md'
                onClick={() => handleTagClick({ tag })}>
                {tag}
              </button>
            ))}
          </Search.Tags>
          <Search.Text>
            <form className='mt-2' onSubmit={handleFormSubmit}>
              <input
                id='keyword'
                className=' py-2 px-3 focus:outline-none text-lg w-3/5 h-12'
                type='text'
                placeholder='Try something like "Animals"...'
                onChange={({ target }) => setSearchInput(target.value)}></input>
              <button className='py-2 px-3 bg-blue-200 text-gray h-12 align-top focus:outline-none' type='submit'>
                Go! ⚡
              </button>
            </form>
          </Search.Text>
        </Search>
      </Header>
    </>
  );
}
