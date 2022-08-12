
const request=require('request');
const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiemlkYW5lMjUiLCJhIjoiY2w2azlicmM4MjZqODNlcHNoMXNjbHp1cyJ9.FV3uf64PMGzK7y9WgUKzpQ&limit=1';
   //using object shorthand and destructuring
    request({url,json:true},(error,{body})=>{
     if(error)
        callback('Unable to connect to geocode services',undefined);
        // we destructure response object since we are using its body property only
        else if(body.features.length===0)
        callback('Unable to find the location.Try another search',undefined);
        else
        callback(undefined,{
            longitude:body.features[0].center[0],
            latitude:body.features[0].center[1],
            location:body.features[0].place_name
        })
    })

}
module.exports=geocode;
