function initMap() {
    var center = { lat: 53.906189, lng: 30.336034 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: center
    });
    var marker = new google.maps.Marker({
        position: center,
        map: map
    });
}

function slideMenu() {
    $('#menu').slideToggle();
}

document.body.onload = function() {
    setTimeout(function() {
        var preloader = document.getElementById('page-preloader');
        if (!preloader.classList.contains('done')) {
            preloader.classList.add('done');
        }
    }, 500);
    document.body.classList.add('load');
};