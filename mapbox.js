// TO MAKE THE MAP APPEAR YOU MUST
// ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoianJlbXAiLCJhIjoiY2x0MGVxZ2R2MTB3bzJpcDRxcWpxZTFiayJ9.IsUEkuqwG084oUb_IctfwQ';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


const monument = [-77.0353, 38.8895]; // TODO: Replace this with the API data later on

// create the popup
const popup = new mapboxgl.Popup({ offset: 25 }).setText(
    'Construction on the Washington Monument began in 1848.'
);

// create DOM element for the marker
const el = document.createElement('div');

new mapboxgl.Marker(el)
    .setLngLat(monument)
    .setPopup(popup) // sets a popup on this marker
    .addTo(map);


const getUserCoords = () => {
    return getRequest("location")
}

document.getElementById('fly').addEventListener('click', () => {
    const userCoords = getUserCoords().then(res => res.json());
    console.log(userCoords);
    const { latitude, longitude } = Object.values(userCoords?.locations)["ojhan@myumanitoba.ca"][0]
    console.log(latitude, longitude)
    map.flyTo({
        center: [latitude, longitude],
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
    });
});



