// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );
    var toggleFLButton;
    var msg;
    var lat;
    var lng;
    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener('resume', onResume.bind(this), false);
        navigator.geolocation.getCurrentPosition(toggleFlashLight, onError, { maximumAge: 600000, enableHighAccuracy: true });
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
    };

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
    function toggleFlashLight(position) {
        //    if (typeof window.plugins.socialsharing !== 'undefined'){
        // plugin is available
        //    		alert("okay!");
        //       	window.plugins.socialsharing.share('Message and subject', 'The subject');
        //  	}else{
        //  		alert("nope!");
        //  	}
        lat = position.coords.latitude;
        lng = position.coords.longitude


    }
    function game() {
        window.plugins.socialsharing.share("Hello, I am in an Emergency Situation,I need Your Help,click on Following link to get my location.   http://google.com/maps/place/" + lat + "," + lng + " ");
    }
    function onError(error) {
        alert('code: ' + error.code + '\n' +
                'message: ' + error.message + '\n');
    }
} )();