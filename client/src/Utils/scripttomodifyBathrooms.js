// import bathrooms from './PublicBathroomsOnline.json'
const fs = require('fs')
const bathrooms = require('./PublicBathroomsOnline.json')

//This makes the coords an array for future use
bathrooms.Locations.map(location => {
    const split = location.Point.coordinates.split(',');
    location.Point.coordinates = split
    return split
})

bathroomsJSON = JSON.stringify(bathrooms, null, 2)
// console.log(bathroomsJSON)

fs.writeFile('bathroom.json', bathroomsJSON, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });