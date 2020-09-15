const axios = require('axios');

const getClima = async(ciudad) => {
    const apiKey = 'af45afbe15cf382f1fd64a8796ebd7f2';
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
    return resp.data;
};

module.exports = {
    getClima
};