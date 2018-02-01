var map;
var currentMarker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.415451988566375, lng: 356.29836363220215},
    zoom: 14
  });

  google.maps.event.addListener(map, 'click', function(event) {
    placeRestaurant(event.latLng);
  });
}

function placeRestaurant(latLng) {
  if (currentMarker !== undefined) {
    currentMarker.setMap(null);
  }

  currentMarker = new google.maps.Marker({
    position: latLng, 
    map: map
  });

  document.getElementById("latitude").value = latLng.lat();
  document.getElementById("longitude").value = latLng.lng();
}
