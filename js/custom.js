// Add your custom JavaScript in this file to avoid mixing your code with the main theme code
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})
function mute() {
    if ($("video").prop('muted')) {
        $("video").prop('muted', false); //mute
        $("#mute").html('<span class="glyphicon glyphicon-volume-up" aria-hidden="true"></span>');
    } else {
        $("video").prop('muted', true); //mute
        $("#mute").html('<span class="glyphicon glyphicon-volume-off" aria-hidden="true"></span>');

    }
//    event.preventDefault();

}
//mute();


/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadMonastirakiGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 37.97677,
        'lng': 23.72506,
        'zoom': 17,
        'infoText': '<p>Ερμού 91</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': '105 55, Ermou 93, Athina 105 55, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#monastiraki_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("monastiraki_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=13NPUU7GjfK-ZsJLE01UygV0Drss&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadAgAnargyroiGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 38.02712,
        'lng': 23.71835,
        'zoom': 17,
        'infoText': '<p>Λεωφ. Δημοκρατίας 62 Αγ. Ανάργυροι<br/>Τηλ. 210 26.91.929</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': 'Leof. Dimokratias 62, Agii Anargiri 135 61, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#agAnargyroi_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("agAnargyroi_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=1ConiEDq2h_8AhrPHXXPac6mIJhY&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadFiladelfeiaGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 38.0316,
        'lng': 23.7369999,
        'zoom': 17,
        'infoText': '<p>Λεωφ. Δεκελείας 80, Φιλαδέλφεια<br/>Τηλ. 210 25.16.776, 210 25.16.777, 6986768600</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': 'Leof. Dekelias 80, Nea Chalkidona 143 41, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#filadelfeia_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("filadelfeia_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=1j5YFXBABwwrrcRuuL7fEJPOQoejUCb7c&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadMarousiGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 38.02712,
        'lng': 23.71835,
        'zoom': 17,
        'infoText': '<p>Παναθηναίων 3 Μαρούσι<br/>Τηλ. 210 80.20.805</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': 'Panathineon 3, Marousi 151 24, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#marousi_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("marousi_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=14rDZwIP5i47RqCVAWXkNWdelHMo&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadXolargosGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 38.00201,
        'lng': 23.79079,
        'zoom': 17,
        'infoText': '<p>Λεωφόρος Μεσογέιων 206 <br/>Τηλ. 210 65.29.530</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': 'Mesogion 208, Cholargos 155 61, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#xolargos_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("xolargos_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=1_26t5tEn6QC41-vf96ULbF_dLHs&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadKypseliGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 37.99996,
        'lng': 23.73313,
        'zoom': 17,
        'infoText': '<p>28ης Οκτωβρίου 151  <br/>Τηλ. 210 86.40.753</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': '28is Oktovriou 151, Athina 112 51, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#kypseli_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("kypseli_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=1nK5Ne6RcjqfZjvHUvVTxQTO89I4&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadKeratsiniGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 37.96479,
        'lng': 23.62316,
        'zoom': 17,
        'infoText': '<p>Παύλου Φύσσα 9 <br/>Τηλ. 210 43.25.111</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': 'P. Fissa 9, Keratsini 187 57, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#keratsini_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("keratsini_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=1NWknGQ08wAppCxNoCGQdYeBs7fU&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
/*============================================
 Ag Anargyroi Map
 ==============================================*/
function loadKorydallosGoogleMap() {
    "use strict";

    // Set mapPoint, latitude and longitude, zoom, and other info needed for Google Map
    var mapPoint = {
        'lat': 37.97578,
        'lng': 23.65466,
        'zoom': 17,
        'infoText': '<p>Ξενοφώντος 15, Πλ. Μέμου  <br/>Τηλ. 210 49.77.664</p>',
        'linkText': 'View on Google Maps',
        'mapAddress': 'Xenofontos 15, Koridallos 181 20, Greece',
        'icon': 'assets/images/map_pin.png'
    };

    if ($('#korydallos_map').length) {

        var map;
        var mapstyles = [{"stylers": [{"saturation": 10}]}];

        var infoWindow = new google.maps.InfoWindow();
        var pointLatLng = new google.maps.LatLng(mapPoint.lat, mapPoint.lng);

        // Define options for the Google Map
        var mapOptions = {
            zoom: mapPoint.zoom,
            center: pointLatLng,
            zoomControl: true,
            panControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            overviewMapControl: false,
            scrollwheel: false,
            styles: mapstyles
        };

        // Create new Google Map object for pop-up restaurant windows
        map = new google.maps.Map(document.getElementById("korydallos_map"), mapOptions);

        // Create new Google Map object for full width map section on homepage
//            map = new google.maps.Map(document.getElementById("homepage_map"), mapOptions);

        var marker = new google.maps.Marker({
            position: pointLatLng,
            map: map,
            title: mapPoint.linkText,
            icon: mapPoint.icon
        });

//            var mapLink = 'https://www.google.com/maps/preview?ll='+mapPoint.lat+','+mapPoint.lng+'&z=14&q='+mapPoint.mapAddress;
        var mapLink = 'https://drive.google.com/open?id=1aYAPqHQeAOWPjSNcFoh2ItMNqTo&usp=sharing'
        // Set the info window content
        var html = '<div class="infowin">' + mapPoint.infoText + '<a href="' + mapLink + '" target="_blank">' + mapPoint.linkText + '</a>' + '</div>';

        // Add map marker
        google.maps.event.addListener(marker, 'mouseover', function () {
            infoWindow.setContent(html);
            infoWindow.open(map, marker);
        });

        // Function for when the map marker is clicked 
        google.maps.event.addListener(marker, 'click', function () {
            window.open(mapLink, '_blank');
        });

    }
}
$("#submit-button").click(function () {
    event.preventDefault();
    if ($("input#name").val().trim() == '') {
        alert('Συμπληρώστε το όνομά σας');
        return false;
    }
    if ($("input#email").val().trim() == '') {
        alert('Συμπληρώστε το email σας');
        return false;
    }
    if ($("input#phone").val().trim() == '') {
        alert('Συμπληρώστε το τηλέφωνό σας');
        return false;
    }
    $.ajax({
        type: 'POST',
        url: "http://www.kebapsavvas.gr/assets/php/contact.php",
        data: $("form#contact-form").serialize(),
        success: function (data) {

            // log data to the console so we can see
            alert(data);

        },
        error: function (data) {

            // log data to the console so we can see
            alert(data);

            // here we will handle errors and validation messages
        }
    });
    return false;
});