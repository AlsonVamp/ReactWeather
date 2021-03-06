var axios = require('axios');
const API_KEY = require('apiKey');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + API_KEY;

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res) => {
            if (res.data.cod && res.data.message) {
                return Promise.reject(res.data.message);
            } else {
                return res.data.main.temp;
            }

        }).catch((res) => {
            return Promise.reject(res.response.data.message);
        });
    }
}