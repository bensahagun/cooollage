import { createApi } from 'unsplash-js';

export const Unsplash = createApi({
  accessKey: process.env.REACT_APP_UNSPLASH_CLIENT_ID
});
