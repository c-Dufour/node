//153avenue%20de%20bretagne%20lille


const yargs = require('yargs');
const request = require('request');
const geocode = require('./geocode/geocode.js');
const weather = require('./weather/wheater.js');
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

//version avec callback
geocode.geocodeAddress(argv.address, (errorMessage,results) => {
    if(errorMessage){
        console.log(errorMessage)    
    }else{
        weather.getWeather(results.lat,results.long, (err,res) => {
            if(err){
                console.log(err);
            }else{
                console.log(`La température actuelle pour cette adresse est de : ${res}`);
            }
        });
    }
});




