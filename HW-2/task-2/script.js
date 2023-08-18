const btnGeolocation = document.getElementById("btn-geolocation");

function showCoord(lat, lng) {
  console.log(lat, lng);
}

// Функция для преобразования градусов в радианы
function toRadians(degrees) {
  return (degrees * Math.PI) / 180;
}

// Функция для вычисления расстояния между двумя точками по их координатам
function getDistance(lat1, lng1, lat2, lng2) {
  let R = 6371; // Радиус Земли в километрах
  let dLat = toRadians(lat2 - lat1);
  let dLng = toRadians(lng2 - lng1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let distance = R * c;
  return distance;
}

btnGeolocation.onclick = function () {
  navigator.geolocation.getCurrentPosition(function (data) {
    console.log(data);

    // Функция для поиска ближайшего города
    function findNearestCity() {
      // Получаем текущие координаты пользователя
      const latitude = data.coords.latitude;
      const longitude = data.coords.longitude;
      showCoord(latitude, longitude);

      // Инициализируем переменные для хранения минимального расстояния и ближайшего города
      let minDistance = Infinity;
      let nearestCity = "";

      // Проходимся по всем городам и вычисляем расстояние до каждого из них
      for (let i = 0; i < window.cities.length; i++) {
        let city = window.cities[i];
        let distance = getDistance(latitude, longitude, city.lat, city.lng);

        // Если расстояние меньше минимального, обновляем минимальное расстояние и ближайший город
        if (distance < minDistance) {
          minDistance = distance;
          nearestCity = city.name;
        }
      }

      // Выводим название ближайшего города на страницу
      const cityElement = document.getElementById("city");
      cityElement.textContent = nearestCity;
      console.log(nearestCity);

    }
    findNearestCity();
  });
};
