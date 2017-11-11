var mymap = L.map('mapid').setView([41.882551, -87.631247], 15);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoibXJhc2hlcyIsImEiOiJjajdqN2NnZWUwYjRvMnFwa2Fmbmh5OTkxIn0.G4xkao0yV5KdVhHaUYdaDg'
}).addTo(mymap);

var marker = L.marker([41.8825, -87.6312]).addTo(mymap);

marker.bindPopup("<b>Hello world!</b><br>I am a popup.");