// js for the leaflet chart on homepage

var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

var map = L.map('map').setView([43, -70], 8);

L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
}).addTo(map);

// Carling- here's where we left off. We want to get these positions
// from the server and add them to the chart. There are going to be a lot of them,
// so we're going to use some tricks. First we'll just call a magic function
// instead of making these things ourselves:
//var positions = [{ "flight": "Ak1", "latitude": 42.6, "longitude": -70.6 }, { "flight": "", "latitude": 40.6, "longitude": -72.6 }, { "flight": "", "latitude": 40.9, "longitude": -70.9 }];
addFlightsToChart();

// Okay, now we need to build the magic function... here it is.
// Make all the flight dots and add them to the chart
async function addFlightsToChart() {
    // here, we're going to call a url that Izzy is making for us
    let response = await fetch('./flights');

    // next, we turn the data into an array of objects,
    // just like the one you created by hand. The only difference is
    // that latitude will be called take_off_latitude and longitude 
    // will be called take_off_longitude
    let flights = await response.json(); // maybe here you want to check what the data looks like? how?

    // now, new leaflet trick to speed things up.
    // we're going to create this group thing, add all the markers to it,
    // then add it all at once to the chart.
    let flightDots = L.featureGroup();

    // here's your for loop from before
    // don't forget to change the property names to match the data you actually got back
    for (let i = 0; i < positions.length; i++) {
        L.marker([positions[i].latitude, positions[i].longitude]).addTo(map).on('click', function () { getFlightData(positions[i].flight); });
        console.log('hello');
    }
    flightDots.addTo(myChart);
    // when you get this running, decide whether markers work.
    // we are going to have 600 of them! maybe we want markers only
    // when we have a video? in that case, let's look at using a 
    // circle for regular flights instead of markers.
}

function getFlightData(flight) {
    // this is going to need to wait until Izzy has a getFlightData
    // url for us. once she does, it will be very similar. we'll call
    // it and get a json object (actually an array with 1 object in it)
    // it will have all the data for one flight.
    // then, we'll need to put that data into the html that Cori builds
    // for you.
    console.log(flight);
}
