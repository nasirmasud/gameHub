import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '4ce4d33d64424bf0a7cf00ae9ecba354',
  },
});
