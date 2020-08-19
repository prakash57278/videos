import axios from 'axios';
const KEY = 'AIzaSyCOrmG2-Ypf_LcAbtjREbJy2LkAbnhg1GE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    },
});
