/*
 * Javascript code for the application
 *
 */

var mapdata = null;

var cachedData = null;
var currentBusinessData = null;
var apikey = "AIzaSyA7Epjvf8LGIWmDyyLDnzbQR3ZEqxzSsT8";
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var a = null;
var myLocation = new google.maps.LatLng(parseFloat(33.7238029), parseFloat(-117.267504, 17));

/**
 * Fetch the details of a place/business. This function is called before user
 * navigates to details page
 *
 * @param {Object}
 *          reference
 */
function fetchDetails(entry) {
  currentBusinessData = null;
  $.mobile.showPageLoadingMsg();
  var detailsUrl = "https://maps.googleapis.com/maps/api/place/details/json?reference="
      + entry.reference
      + "&sensor=true&key=" + apikey;
  $("#name3").html("");
  $("#address3").html("");
  $("#phone3").html("");
  $("#rating3").html("");
  //$("#photos").html("");
  $("#homepage3").attr("href", "");
  $.getJSON(detailsUrl, function(data) {
    if (data.result) {
      currentBusinessData = data.result;
      isFav(currentBusinessData, function(isPlaceFav) {
        console.log(currentBusinessData.name + " is fav " + isPlaceFav);
        if (!isPlaceFav) {
          $("#add3").show();
          $("#remove3").hide();
        } else {
          $("#add3").hide();
          $("#remove3").show();
        }
        $("#name3").html(data.result.name);
        $("#address3").html(data.result.formatted_address);
        $("#phone3").html(data.result.formatted_phone_number);
        $("#rating3").html(data.result.rating);
       // $("#photos").html(data.result.photo);
        $("#homepage3").attr("href", data.result.url);

      });
    }
  }).error(function(err) {
    console.log("Got Error while fetching details of Business " + err);
  }).complete(function() {
    $.mobile.hidePageLoadingMsg();
  });
  $("#homepage3").live("tap", function() {
    console.log("Tap that to: " + $(this).attr("href"));
    navigator.app.loadUrl($(this).attr("href"), { openExternal:true });
    return false;
  })

}
// -------------------------------
/**
 * Called to initiate Map page
 */

function plotMarkers3() {
  //  $('#map_canvas').gmap('clear', 'markers');
  $(cachedData.results).each(
      function(index, entry) {
          console.log("index : " + index);


       $('#map_canvas3').gmap(
              'addMarker',
              {
                  'tags': index,
                  'position': new google.maps.LatLng(entry.geometry.location.lat, entry.geometry.location.lng),
                  'animation': google.maps.Animation.DROP,
                  'icon': new google.maps.MarkerImage('police123.png')


              }).click(function () {
                  $('#map_canvas3').gmap('openInfoWindow', { 'content': '<b>GeoLocation Position</b></br><b>Latitude:</b>' + entry.geometry.location.lat + '</br><b>Longitude:</b>' + entry.geometry.location.lng + '<br><b>Place Name:</b>' + entry.name + '<br><b>Index No:</b>' + index + '<br><b>Address:</b>' + entry.vicinity + '' }, this);
              });

      });
}

function initiateMap3() {
    $('#map3').on("pageshow", function() {
      console.log("refreshing map");
      $('#map_canvas3').gmap('refresh');
    });
    //$(window).load(initialize);
 //   $(document).on('click', '#map_canvas', initialize);

    $("#map3").on(
      "pagebeforecreate",
      function() {
        try {
         console.log("mapdata: " + mapdata[0]);
          $('#map_canvas3').gmap({
                'center' : mapdata,
                'zoom': 13


          });

          //$('#map_canvas').gmap('refresh');
         // $('#map').gmap('refresh');
          $('#map_canvas3').gmap('addMarker', {
              'position': mapdata,
              'animation': google.maps.Animation.BOUNCE
          }).click(function () {
              $('#map_canvas3').gmap('openInfoWindow', { 'content': '<b>Hey I Am Here :</b></br>:' + mapdata +  '' }, this);
          });
          $('#map_canvas3').gmap().bind('init', function () {
              $('#map_canvas3').gmap('addShape', 'Circle', { 'strokeColor': "#FF0000", 'strokeOpacity': 0.8, 'strokeWeight': 2, 'fillColor': "#FF0000", 'fillOpacity': 0.35, 'center': mapdata, 'radius': 200 });
          });


       plotMarkers3();
       console.log("Map initialized");

            //$('#map').gmap('refresh');


        } catch (err) {
          console.log("Got error while initializing map " + err);
        }
      });

}


 /* Binding Search button handler to go and fetch place results
 */
function initiateSearch3() {

  $("#police_1")
      .click(
          function() {
            try {
                $.mobile.showPageLoadingMsg();
                  navigator.geolocation
                  .getCurrentPosition(
                      function(position) {
                         // var radius = $("#range").val() * 1000;
                          //var rankBy=google.maps.places.rankBy.radius;
                          var radius = 1000;
                          var name = "police";
                        mapdata = new google.maps.LatLng(
                            position.coords.latitude, position.coords.longitude);
                        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?&location="
                            + position.coords.latitude
                            + ","
                            + position.coords.longitude
                            + "&radius="
                            + radius
                            + "&name="
                            + name
                            + "&keyword=police station"

                            + "&sensor=true&key=" + apikey;

                        console.log("url : " + url);
                        $.mobile.allowCrossDomainPages = true;
                        $.getJSON(
                                url,
                                function(data) {
                                    cachedData = data;
                                    $("#result-list-3").html("");

                                    try {
                                        $(data.results)
                                            .each(
                                                function(index, entry) {
                                                    console.log("entry --" + entry);


                                              var htmlData = "<a href=\"#details3\" id=\""
                                                  + entry.reference
                                                  + "\"><img src=\""
                                                  + entry.icon
                                                  + "\" class=\"ui-li-icon\"></img><h3>&nbsp;"
                                                  + entry.name
                                                  + "</h3><p><strong>&nbsp;vicinity:"
                                                  + entry.vicinity
                                                  + "</strong></p> <strong>&nbsp;Index:" + index+ "<p></a>";
                                              var liElem = $(document
                                                  .createElement('li'));
                                              $("#result-list-3").append(
                                                  liElem.html(htmlData));
                                              $(liElem).bind("tap",
                                                  function(event) {
                                                    event.stopPropagation();
                                                    fetchDetails(entry);
                                                    return true;
                                                  });
                                            });
                                      $("#result-list-3").listview('refresh');



                                     //   plotmarkers(data);

                                  } catch (err) {
                                    console
                                        .log("Got error while putting search result on result page "
                                            + err);
                                  }
                                 // $.mobile.changePage("#list");
                                    $.mobile.hidePageLoadingMsg();

                                })
                            .error(
                                function(xhr, textStatus, errorThrown) {
                                  console
                                      .log("Got error while fetching search result : xhr.status="
                                          + xhr.status);
                                }).complete(function(error) {
                              $.mobile.hidePageLoadingMsg();
                            });
                      }, function(error) {
                        console.log("Got Error fetching geolocation " + error);
                      });
            } catch (err) {
              console.log("Got error on clicking search button " + err);
            }
          });


  }

// --------------------------------------------------------------

function bind2() {
initiateMap3();
  initiateSearch3();
}
// ---------------------------------------------------

// -------------------------

//$(document).on('click', '#reloadmap', initiateMap);
