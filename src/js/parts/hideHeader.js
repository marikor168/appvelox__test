function hideHeader() {
  let scrollPosition = window.pageYOffset,
    header = document.querySelector('.header-nav'); 
  window.addEventListener('scroll', function() {
  let services = document.querySelector('.services'),
    position = services.getBoundingClientRect(),
    servicesY = position.top;
  if (scrollPosition >= servicesY) {
    header.style.display = 'none';
  } else {
    header.style.display = 'block';
  }
  scrollPosition = 0;
  });
}

module.exports = hideHeader;