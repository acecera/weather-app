const request = require('request')

const url ='https://api.darksky.net/forecast/82031761e1a3fc016d1b0aa51740d02e/37.8267,-122.4233?units=us'

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!')
    } else if (response.body.error) {
        console.log('Unable to find location')
    } else {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degrees out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')   
    }
})

const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW50aG9ueWNlcmEiLCJhIjoiY2s4YWpmNWFvMDFiNzNrcDdsbzRuY3EzYyJ9.s9bBTJ9krW9OZ_smPG_cdA'

request({ url: geoUrl, json: true}, (error, response) => {
    if (error) {
        console.log('Unable to connect to location services!')
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location.k Try another search.')
    } else {
        const latitude = response.body.features[0].center[1]
        const longitude = response.body.features[0].center[0]
        console.log(latitude, longitude)
    }
})