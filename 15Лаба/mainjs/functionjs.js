function b1() {
  let map = L.map('map').setView([47.23654, 39.71260], 14);
  let marker = L.marker([39.782656,47.222842]).addTo(map);
  marker.bindPopup("<b>SubWay</b><br>Вкусность.").openPopup();
}
