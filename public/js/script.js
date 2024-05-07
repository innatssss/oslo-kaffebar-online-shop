let marker;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: { lat: 52.531677, lng: 13.381777 },
  });

  marker = new google.maps.Marker({
    map,
    draggable: true,
    animation: google.maps.Animation.DROP,
    position: { lat: 52.531677, lng: 13.381777 },
  });
  marker.addListener("click", toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

window.initMap = initMap;
