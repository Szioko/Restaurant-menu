window.addEventListener("scroll", function() {
  const navbar = document.querySelector("#navbar");
  if (window.pageYOffset > navbar.offsetTop) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function() {
  // Kod do zamknięcia powiększonego zdjęcia, np. ukrycie elementu lub resetowanie karuzeli
});


lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true,
  'alwaysShowNavOnTouchDevices': true,
  'disableScrolling': true,
  'showImageNumberLabel': false,
  'positionFromTop': 100,
  'disableScrolling': true,
  'fadeDuration': 300,
  'fitImagesInViewport': true,
  'imageFadeDuration': 300,
  'showCloseButton': true // Dodaj tę linijkę, aby wyświetlić przycisk zamknięcia
});


