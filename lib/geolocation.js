
var geo_latitude = null;
var geo_longitude = null;
var geo_retrieving = true;

if (navigator.geolocation) {
    success = function(pos){
        geo_latitude = pos.coords.latitude;
        geo_longitude = pos.coords.longitude;
	geo_retrieving = false;
        console.log(geo_latitude + ', ' + geo_longitude);
    };
    failed = function (error) {
	geo_retrieving = false;
        switch (error.code) {
        case error.POSITION_UNAVAILABLE:
            console.log('position unavailable.');
            break;

        case error.PERMISSION_DENIED:
            console.log('permission denied.');
            break;

        case error.PERMISSION_DENIED_TIMEOUT:
            console.log('time out.');
            break;
        }
    };

    navigator.geolocation.getCurrentPosition(success, failed);
}
else {
    geo_retrieving = false;
    window.alert("Your browser has no geolocation fuctionality.");
}
