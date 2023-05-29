;(function() {
    if (typeof ymaps === 'undefined') {
      return;
    }
  
    ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
              center: [54.845804, 83.063855],
              zoom: 16

          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              balloonContent: 'Советский район, микрорайон Шлюз, Новосибирск'
          }, {
              iconLayout: 'default#image',
              iconImageHref: '../img/common/marker.svg',
              iconImageSize: [40, 63.2],
              iconImageOffset: [-50, -38]
          });
  
      myMap.geoObjects.add(myPlacemark);
  
      myMap.behaviors.disable('scrollZoom');
  });
  
  
  })();