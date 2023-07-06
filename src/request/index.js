import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});


export async function fetchToplistDetail() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(
    res.data.list.map(({ id }) => http.get('playlist/detail',
      {
        params: { id }
      })));
  return playlist.map(item => item.data.playlist)
}
