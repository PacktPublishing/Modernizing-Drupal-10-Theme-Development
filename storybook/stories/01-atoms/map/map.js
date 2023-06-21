// eslint-disable-next-line func-names
(function (Drupal, L) {
  Drupal.behaviors.map = {
    attach() {
      once('map', '#map').forEach((el) => {
        const { lat, lng, text } = el.dataset;
        const map = L.map('map').setView([lat, lng], 13);
        map.scrollWheelZoom.disable();
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        }).addTo(map);
        L.marker([lat, lng]).addTo(map);
        const popup = L.popup();

        function onMapClick(e) {
          popup.setLatLng(e.latlng).setContent(text).openOn(map);
        }

        map.on('click', onMapClick);
      });
    },
  };
  // eslint-disable-next-line no-undef
})(Drupal, L);
