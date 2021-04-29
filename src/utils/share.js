import { toJpeg } from 'html-to-image';
import download from 'downloadjs';
import elementSize from 'element-size';

export const downloadWallpaper = () => {
  const [width, height] = elementSize(document.getElementById('canvas'));

  toJpeg(document.getElementById('canvas'), {
    width: width,
    height: height,
    pixelRatio: 1
  }).then((dataUrl) => {
    download(dataUrl, `cooollage-${Math.floor(Math.random() * 100000) + 10000}.jpg`);
  });
};
