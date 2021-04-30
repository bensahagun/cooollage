import React from 'react';
import { useEffect, useState, createContext } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import scrollToElement from 'scroll-to-element';

import { Unsplash } from './lib/unsplash';
import HeaderContainer from './containers/header';
import GalleryContainer from './containers/gallery';

export const StateContext = createContext(null);

export default function App() {
  const [searchInput, setSearchInput] = useState('');
  const [images, setImages] = useState([]);
  const [gallery, setGallery] = useState(null);

  const [isDemoMode, setIsDemoMode] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    Unsplash.search.getPhotos({ query: 'trending', per_page: 50 }).then(({ response }) => {
      setImages(response.results.sort(() => Math.random() - 0.5));
      setGallery(
        new Masonry('#canvas .frame', {
          initLayout: false
        })
      );
    });
  }, []);

  useEffect(() => {
    if (gallery) {
      imagesLoaded('#frame', {}, () => {
        gallery.layout();
        setIsLoading(false);

        !isDemoMode &&
          scrollToElement('#frame', {
            offset: -20,
            ease: 'linear',
            duration: 300
          });
      });
    }
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [gallery]);

  const collage = (keyword, callback) => {
    Unsplash.search.getPhotos({ query: keyword, per_page: 30 }).then(({ response }) => {
      setImages(response.results.sort(() => Math.random() - 0.5));
      setGallery(
        new Masonry('#canvas .frame', {
          initLayout: false
        })
      );

      callback();
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    searchInput && setIsLoading(true);

    setIsDemoMode(false);

    searchInput && collage(searchInput, () => {});
  };

  const handleTagClick = ({ tag }) => {
    tag && setIsLoading(true);

    setIsDemoMode(false);

    tag && collage(tag, () => {});
  };

  return (
    <StateContext.Provider value={{ isDemoMode, isLoading }}>
      <HeaderContainer
        handleTagClick={handleTagClick}
        handleFormSubmit={handleFormSubmit}
        setSearchInput={setSearchInput}
      />
      <GalleryContainer images={images} />
    </StateContext.Provider>
  );
}
