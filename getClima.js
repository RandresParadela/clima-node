const axios = require('axios');

const getClima = async(ciudad) => {
    const apiKey = '';
    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
    return resp.data;
};

module.exports = {
    getClima
};
