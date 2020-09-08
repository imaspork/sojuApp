// This example requires the Places library. Include the libraries=places
// parameter when you first load the API. For example:
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBGzkyY05335UxV-zAgXhldt7LrPMEg164&libraries=places">
let map;
let service;
let infowindow;


function initMap() {
    var clientLatitude = localStorage.getItem('clientLat');
    var clientLongitude = localStorage.getItem('clientLon');
    const clientLocation = new google.maps.LatLng(clientLatitude, clientLongitude);
    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15
    });
    const request = {
        query: "soju liquor store",
        fields: ["name", "geometry"]
    };
    service = new google.maps.places.PlacesService(map);
    service.findPlaceFromQuery(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
            map.setCenter(results[0].geometry.location);
        }
    });
}

function createMarker(place) {
    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name);
        infowindow.open(map);
    });
}
