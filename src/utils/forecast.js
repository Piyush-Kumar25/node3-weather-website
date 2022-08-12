const request=require('request');
const forecast=(latitude,longitude,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=8af75d0011285df2e78cafcd46f1944f&query='+encodeURIComponent(longitude)+','+encodeURIComponent(latitude)+'&units=f'
    request({url,json:true},(error,response)=>{
     if(error)
     {
        callback('Unable to connect to the weather services!',undefined);
     }
     else if(response.body.error)
     {
callback('Unable to find the location.Try search again',undefined);
     }
     else
     {
      callback(undefined, response.body.current.weather_descriptions[0] + ". It is "+ response.body.current.temperature+ " degrees out but it feels like " +response.body.current.feelslike+"degrees out. The humidity is " +response.body.current.humidity+"%.")
     }
    })
}

module.exports=forecast;