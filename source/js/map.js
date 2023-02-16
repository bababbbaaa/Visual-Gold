const mapPicture = document.querySelector(".map");
const buttonRussia = document.querySelector('.button-russia');
const buttonBelarus = document.querySelector('.button-belarus');

// mapPicture.classList.remove("map__nojs");

const map = L.map('map')
  .setView({
    lat: 55.61109404304354, 
    lng: 37.493905526788616
  }, 15.4);
//   map.dragging.disable();

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../source/assets/svg/map-pin.svg',
  iconSize: [140, 70],
  iconAnchor: [18, 52],
});

const mainPinMarker = L.marker(
  {
    lat: 55.61436272052184, 
    lng: 37.493968963099185
  },
  {
    draggable: false,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

buttonRussia.addEventListener('click', () => {
    buttonBelarus.classList.remove("map__container--button-active")
    buttonRussia.classList.add("map__container--button-active")
    map.setView({
        lat: 55.61109404304354, 
        lng: 37.493905526788616
    }, 15.4);
    mainPinMarker.setLatLng({
        lat: 55.61436272052184, 
        lng: 37.493968963099185
    });
});

buttonBelarus.addEventListener('click', () => {
    buttonRussia.classList.remove("map__container--button-active")
    buttonBelarus.classList.add("map__container--button-active")
    map.setView({
        lat: 53.96022678856793, 
        lng: 27.548234940622937
    }, 15.4);
    mainPinMarker.setLatLng({
        lat: 53.95941988701387, 
        lng: 27.551236867839187
    });
});


// для поиска координат
mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});