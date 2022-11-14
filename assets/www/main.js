var toggleFLButton;
var msg;
var lat;
var lng;

document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
   
    //navigator.splashscreen.hide();c:\users\sai\documents\visual studio 2015\projects\mymenu\blankcordovaapp1\www\scripts\main.js
    navigator.geolocation.getCurrentPosition(toggleFlashLight, onError, {maximumAge:600000,  enableHighAccuracy: true});
//    toggleFLButton = document.getElementById("buttonToggleFL");
  //  alert(toggleFLButton);
//    toggleFLButton.addEventListener("click", toggleFlashLight);
   // alert("DeviceReady");
}

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
function game()
{
    window.plugins.socialsharing.share("Hello, I am in an Emergency Situation,I need Your Help,click on Following link to get my location.   http://google.com/maps/place/" + lat + "," + lng+ " ");
}
function onError(error) {
    alert('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
}
//window.onerror=function(a,b,c) {
//    alert(a);
//}
