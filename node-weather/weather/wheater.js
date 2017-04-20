const request = require('request');

var getWeather = (lat,lng, callback) => {
request(
    {
    url: 'https://api.darksky.net/forecast/d4b8c0d79d3caaf64908cd0e8acc0ca8/'+lat+','+lng,
    json: true
},(error,response,body) => {
    if(error){
        callback("erreur de connexion",null);
    }else{
        celcius = (body.currently.temperature - 32) * 5/9;
        callback(null,celcius);
    }

});

}
module.exports = {
    getWeather
}