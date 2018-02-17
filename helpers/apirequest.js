//USE BLUEBIRD MODULE TO PROMISIFY THESE FUNCTIONS?

//1. function pull a show from jambase API
//2. function pull a restaurant from zomato API

const axios = require('axios');
const jamKey = process.env.jamKey || 'jh8fu4aex27733bzszu6kprj';

const getPair = (zipcode, date)=> {
  return (
    axios.get(`http://api.jambase.com/events?zipCode=${zipcode}&radius=7&startDate=${date}&endDate=${date}&page=0&api_key=${jamKey}`)
    .then((shows) => {
      const show = shows.data.Events[0];
      let long = show.Venue.Longitude.toString();
      let lat = show.Venue.Latitude.toString();
      //return whole show
      return axios.get(`https://developers.zomato.com/api/v2.1/geocode?lat=${lat}&lon=${long}`, {
        'headers': {
          'user-key': 'dd071c27f3428a592bdf3cec117a2cc7'
        }
      })
      .then((result2) => {
        return [show, result2.data.nearby_restaurants[0]]
      })
      .catch((err) => {
        console.log('this is error in resul2', err)
      })
    })
    .catch((err) => {
      console.log(err, 'ERROR IN RESULT1');
    })
  )
}  

module.exports.getPair = getPair;