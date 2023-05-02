let btn_i = document.createElement('BUTTON');
btn_i.id = 'btn_i';
btn_i.textContent = 'Где я?';
document.body.appendChild(btn_i);


let btn_r = document.createElement('BUTTON');
btn_r.id = 'btn_r';
btn_r.textContent = 'Проложить маршрут?';
document.body.appendChild(btn_r);


btn_i.onclick = PosToMy;

function setposition(latitude, longitude) {
    let marker = L.marker([latitude, longitude]).addTo(map);
    marker.bindPopup("<b>Вы</b><br>Какой красивый).").openPopup();
}

function PosToMy() {
    navigator.geolocation.getCurrentPosition(success, error, {
        enableHighAccuracy: true
    });
}

function success({ coords }) {
    const { latitude, longitude } = coords;
    const position = [latitude, longitude];
    setposition(latitude, longitude);
    console.log(position);
}

function error({ message }) {
    console.log(message);
}
