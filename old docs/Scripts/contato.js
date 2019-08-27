/*$(Document).ready(function myMap() {
    var mapProp = {
        center: new google.maps.Map{lat: 151, lng:},
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
})
*/
$(Document).ready(function myMap() {
    map = new google.maps.Map(document.getElementById('googleMap'), {
        center: {lat: -16.6994891, lng: -49.2752354},
        zoom: 15
    })
})
