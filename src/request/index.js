import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
 
  const cookie = store.get("__m__cookie")??""
  config.params = config.params || {};
  config.params.cookie = cookie
  return config
})

export async function fetchToplistDetail() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(
    res.data.list.map(({ id }) => http.get('playlist/detail',
      {
        params: { id }
      })));
  return playlist.map(item => item.data.playlist)
}

export const getQrKey = () => http.get('/login/qr/key')

export const getQrInfo = (key , qrimg = 1) => 
http.get('/login/qr/create',{params:{key , qrimg}})

export const checkQrStatus = (key) =>
  http.get('/login/qr/check', { params: { key, timestamp: Date.now() } });

export const getUserAccount = () => http.get('/user/account')

export const getUserdata = () => http.get('/user/subcount')

export const getUserDetail = (params) => http.get(`/user/detail?uid=${params}`)

// 用户歌单
export const Userdata = (params) => http.get(`/user/playlist?uid=${params}`)

/**
* @description 播放器
*/
export const getMP3 = (id) =>
http.get(`/song/url/v1`, { params: { id, level: 'standard' } })

//歌曲
export const getTrackDetail = (id) => http.get('/song/detail', { params: { ids: id } });

//用户听歌排行
export const PlaybackRecord = (id) => http.get(`/user/record?uid=${id}`)

// 最近播放歌单
export const RecentlyPlayedPlaylists = (number) => http.get(`/record/recent/playlist?limit=${number}`)

// 歌单
export const songSheet = (id) => http.get(`/playlist/track/all?id=${id}`)

//歌词
export const lyricText = (id) => http.get(`/lyric?id=${id}`);





