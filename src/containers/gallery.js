import React, { useContext } from 'react';
import { Share } from '../components';
import { StateContext } from '../app';
import { downloadWallpaper } from '../utils/share';
import { Cards } from '../components/';

export default function GalleryContainer({ images }) {
  const { isDemoMode, isLoading } = useContext(StateContext);

  return (
    <div className='w-full px-3 md:w-4/5 md:px-0 mx-auto my-10 z-1 relative'>
      <div className='mt-6 relative'>
        <Cards>
          <Cards.Images>
            {images.map((image) => (
              <Cards.Image key={image.id} src={image.urls.regular} alt={image.thumb} />
            ))}
          </Cards.Images>
          <Cards.Placeholder isDemoMode={isDemoMode} />
          <Cards.Loading isLoading={isLoading} />
        </Cards>
        {!isDemoMode ? <Share handleDownload={downloadWallpaper} /> : null}
      </div>
    </div>
  );
}
