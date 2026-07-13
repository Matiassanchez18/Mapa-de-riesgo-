const map = L.map("map").setView([-26.8241, -65.2226], 13);
const contenedorMapa = map.getContainer();

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap"
}).addTo(map);

L.DomEvent.disableScrollPropagation(contenedorMapa);
L.DomEvent.disableClickPropagation(contenedorMapa);