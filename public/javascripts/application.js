var map;
var currentMarker;
var markers = [];

function initMap() {
  var mapDiv = document.getElementById('map');
  var myLatLng = {
    lat: 40.428914,
    lng: -3.704043
  }

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: myLatLng
  });

  function addMarker(location) {
    var marker = new google.maps.Marker({
      position: location,
      map: map
    });
    markers.push(marker);
  }

  function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
      markers[i].setMap(map);
    }
  }

  function clearMarkers() {
    setMapOnAll(null);
  }

  map.addListener('click', function(event) {
    clearMarkers()
    addMarker(event.latLng);
    debugger
  });
}



// function placeMarkerAndPanTo(latLng, map) {
//   var marker = new google.maps.Marker({
//     position: latLng,
//     map: map
//   });
//   map.panTo(latLng);
// };
