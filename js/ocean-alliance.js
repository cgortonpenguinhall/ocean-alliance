console.log('ocean-alliance.js working');
//CODE!

var greenIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var map = L.map('map').setView([43, -70], 8);

        L.tileLayer(http://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}, {
        }).addTo(map);

        L.marker([42.616131, -70.668930]).addTo(map);

        L.marker([42.605542, -70.664255], {icon: greenIcon}).addTo(map);