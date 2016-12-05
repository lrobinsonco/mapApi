

// function initMap() {
//   var home = {lat: 39.671342, lng: -105.036232}
//   var map = new google.maps.Map(document.getElementById('map'), {
//      /* Additional Map Code Here */
//      center: home
//      //zoom: 19
//   });
//   var marker = new google.maps.Marker({
//     position : home
//     //map : map
//   })
//   }
function initMap() {
       var home = {lat: 39.671322, lng: -105.036520};
       var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 19,
         center: home
       });
      //  var marker = new google.maps.Marker({
      //    position: home,
      //    map: map
      //  });
       var panorama = new google.maps.StreetViewPanorama(
      document.getElementById('map'), {
        position: home,
        pov: {
          heading: 85,
          pitch: 8
        }
      });
  map.setStreetView(panorama)
     }
