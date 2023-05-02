let map = L.map('map').setView([47.23654, 39.71260], 15);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

function b1() {
  let marker = L.marker([47.226031, 39.731755]).addTo(map);
  marker = L.marker([47.226791, 39.730045]).addTo(map);
  marker = L.marker([47.226952, 39.729653]).addTo(map);
  marker = L.marker([47.226885, 39.727147]).addTo(map);
  marker = L.marker([47.235039, 39.712892]).addTo(map);
  marker.bindPopup("<b>Ресторан</b><br>Вкусность.").openPopup();
}

function b2() {
  let marker = L.marker([47.227891, 39.730666]).addTo(map);
  marker = L.marker([47.230656, 39.799647]).addTo(map);
  marker = L.marker([47.235140, 39.729653]).addTo(map);
  marker = L.marker([47.237891, 39.727147]).addTo(map);
  marker = L.marker([47.236139, 39.712892]).addTo(map);
  marker.bindPopup("<b>Аптеки</b><br>Будь здоров.").openPopup();
}

function b3() {
  let marker = L.marker([47.227331, 39.729755]).addTo(map);
  marker = L.marker([47.234591, 39.794865]).addTo(map);
  marker = L.marker([47.230652, 39.712343]).addTo(map);
  marker = L.marker([47.245745, 39.727147]).addTo(map);
  marker = L.marker([47.232349, 39.712892]).addTo(map);
  marker.bindPopup("<b>Красота</b><br>Куда еще красивее?!.").openPopup();
}

function b4() {
  let marker = L.marker([47.224561, 39.745455]).addTo(map);
  marker = L.marker([47.223491, 39.734555]).addTo(map);
  marker = L.marker([47.234572, 39.730053]).addTo(map);
  marker = L.marker([47.228885, 39.724547]).addTo(map);
  marker = L.marker([47.238039, 39.714592]).addTo(map);
  marker.bindPopup("<b>Образование</b><br>Учись, я не то репером станешь.").openPopup();
}

function b5() {
  let marker = L.marker([47.214031, 39.730055]).addTo(map);
  marker = L.marker([47.216791, 39.731145]).addTo(map);
  marker = L.marker([47.218692, 39.721353]).addTo(map);
  marker = L.marker([47.220885, 39.721447]).addTo(map);
  marker = L.marker([47.225039, 39.712292]).addTo(map);
  marker.bindPopup("<b>Автосервис</b><br>У меня сломалась стиральная машинка.").openPopup();
}

function b6() {
  let marker = L.marker([47.215231, 39.755455]).addTo(map);
  marker = L.marker([47.256731, 39.715045]).addTo(map);
  marker = L.marker([47.244952, 39.716453]).addTo(map);
  marker = L.marker([47.255885, 39.714447]).addTo(map);
  marker = L.marker([47.213039, 39.734562]).addTo(map);
  marker.bindPopup("<b>АЗС</b><br>Казалось бы, сникерсни.").openPopup();
}

function b7() {
  let marker = L.marker([47.233331, 39.733555]).addTo(map);
  marker = L.marker([47.245691, 39.734545]).addTo(map);
  marker = L.marker([47.226662, 39.745653]).addTo(map);
  marker = L.marker([47.242865, 39.727647]).addTo(map);
  marker = L.marker([47.231239, 39.745632]).addTo(map);
  marker.bindPopup("<b>Спорт</b><br>Бегом сюда, тостость.").openPopup();
}

function b8() {
  let marker = L.marker([47.222341, 39.744355]).addTo(map);
  marker = L.marker([47.225591, 39.723445]).addTo(map);
  marker = L.marker([47.226952, 39.767563]).addTo(map);
  marker = L.marker([47.234535, 39.745147]).addTo(map);
  marker = L.marker([47.235679, 39.745772]).addTo(map);
  marker.bindPopup("<b>Продукты</b><br>Кющай братик;).").openPopup();
}
