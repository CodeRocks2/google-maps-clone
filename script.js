mapboxgl.accessToken = 'pk.eyJ1IjoiY29kZS1yb2NrcyIsImEiOiJja3I3OHR1aHUzNjc5Mm9ueGprN25hN2R0In0.YtxkzI-7s8tE7N_Jnm0KFQ';

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
    setupMap([-2.24, 53.48])
}

function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    })
    const nav = new mapboxgl.NavigationControl()
    map.addControl(nav, "top-right")

    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
    })

    map.addControl(directions, "top-left")
}