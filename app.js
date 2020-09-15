const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para clima',
        demand: true
    }
}).argv;

const clima = require('./getClima');

// los datos de header y api la cogemos en la web de axios
// NO FUNCIONA ESTE SITIO
// const instance = axios.create({
//     baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=Madrid',
//     headers: {
//         'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
//         'X-RapidAPI-Key': '4ed0f3bcf3msh15d0540dbd79ed4p11f15bjsnaf48b95911ff'
//     }
// });

// instance.get()
//     .then(resp => {
//         console.log(resp.data);
//     })
//     .catch(err => {
//         console.log('Error', err);
//     });

let ciudad = argv.direccion;

clima.getClima(ciudad)
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log('Error', err);
    });