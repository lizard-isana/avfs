
var geo_retrieving = true;

if(typeof AVfS.latitude === "undefined" || typeof AVfS.longitude === "undefined"){
    if (navigator.geolocation) {
        success = function(pos){
            AVfS.latitude = pos.coords.latitude;
            AVfS.longitude = pos.coords.longitude;
            geo_retrieving = false;
            console.log(AVfS.latitude + ', ' + AVfS.longitude);
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
}
else{
    geo_retrieving = false;
}
