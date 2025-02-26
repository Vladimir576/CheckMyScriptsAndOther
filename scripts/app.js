ymaps.ready(init);
var markerData = [
    [51.074272, 71.413074],
    [51.1321, 71.4039],
    [51.1197, 71.4699],
    [51.1286, 71.4304],
    [51.1804, 71.4095],
    [51.1145, 71.4010],
    [51.1336, 71.4199]
];

function init() {
    var myMap = new ymaps.Map("map", {
        center: [51.1274, 71.4309],
        zoom: 14
    });

    for (let i = 0; i < markerData.length; i++) {
        var myPlacemark = new ymaps.Placemark(markerData[i], {}, {
            iconLayout: 'default#image',
            iconImageHref: '/icons/map-marker.png',
            iconImageSize: [46, 57],
            iconImageOffset: [-23, -57]
        });

        myMap.geoObjects.add(myPlacemark);
    }

    myMap.behaviors.disable('scrollZoom');
}
