const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
.options(
    {
        a: {
            demand:true,
            alias: 'address',
            description: 'Adresse recherché',
            strong: true
        }
    }
)
.help()
.alias('help', 'h')
.argv;

const addressEncoded = encodeURIComponent(argv.address); 

axios.get('http://maps.googleapis.com/maps/api/geocode/json?address='+addressEncoded)
.then((res)=>{
  var add = {
    address : res.data.results[0].formatted_address,
    long : res.data.results[0].geometry.location.lng,
    lat : res.data.results[0].geometry.location.lat
};
var darksky = 'https://api.darksky.net/forecast/d4b8c0d79d3caaf64908cd0e8acc0ca8/';

    return axios.get(darksky+add.lat+','+add.long).then((res)=>{
        console.log('La température est de : '+res.data.currently.temperature);
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err)=>{
    console.log(err);
});