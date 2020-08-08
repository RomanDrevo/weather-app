import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL || '';
const appKey = process.env.REACT_APP_API_KEY || '';

axios.interceptors.request.use(function (config) {
    config.baseURL = baseUrl;
    return config;
});

export const getCityForecastApi = city => {
    return axios.get(`/forecast?q=${city}&APPID=${appKey}&units=metric`);
};
