const request = require('request');


var geocodeAddress = (address, callback) => {
const addressEncoded = encodeURIComponent(address);
request(
{
    url:'http://maps.googleapis.com/maps/api/geocode/json?address='+addressEncoded,
    json: true
},
(error,response,body) => {
    if(error){
        callback('Connexion serveur impossible',null);
    }else if(body.status == "ZERO_RESULTS"){
        callback('Adresse inconnue',null);
    }else if(body.status == "OK"){
        /*console.log('Adresse reformatée  : '+body.results[0].formatted_address);
        console.log('Longitude : '+body.results[0].geometry.location.lng);
        console.log('Latitude : '+body.results[0].geometry.location.lat);*/
        callback(null,{
            address : body.results[0].formatted_address,
            long : body.results[0].geometry.location.lng,
            lat : body.results[0].geometry.location.lat
        });
    }

});
};


module.exports = {
    geocodeAddress
}