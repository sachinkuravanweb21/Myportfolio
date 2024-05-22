function toggleMobileMenu() {
  document.getElementById("menu").classList.toggle("active");
}

// map

function initMap() {
  const mapOptions = {
    center: { lat: 37.7749, lng: -122.4194 }, // Coordinates of San Francisco
    zoom: 12,
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // Adding a marker
  const marker = new google.maps.Marker({
    position: { lat: 23.44, lng: -122.4194 },
    map: map,
    title: "San Francisco",
  });
}
