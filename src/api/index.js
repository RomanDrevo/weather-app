import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || '';
const appKey = process.env.REACT_APP_API_KEY || '';

// http://api.openweathermap.org/data/2.5/forecast?q=ashdod&APPID=f5e006a2199fc49d25f7f37ac582132b

axios.interceptors.request.use(function (config) {
    // const token = localStorage.getItem('token');
    // config.headers.Authorization =  `Bearer ${token}`;
    config.baseURL = baseUrl;
    return config;
});

export const getCityForecastApi = city => {
    return axios.get(`/forecast?q=${city}&APPID=${appKey}&units=metric`);
};
