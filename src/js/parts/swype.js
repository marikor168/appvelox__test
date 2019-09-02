function swype(section, block) {
  let touchstartX = 0;
  let touchendX = 0;
  let slideIndex = 1,
      slides = document.getElementsByClassName(block);

  const gestureZone = document.getElementById(section);

  gestureZone.addEventListener('touchstart', function (event) {
    touchstartX = event.changedTouches[0].screenX;
  }, false);

  gestureZone.addEventListener('touchend', function (event) {
    touchendX = event.changedTouches[0].screenX;
    handleGesture();
  }, false);

  function handleGesture() {
    if (touchendX <= touchstartX) {
      if (slideIndex >= 1 && slideIndex < slides.length) {
        plusSlides(1);
      }
    }

    if (touchendX >= touchstartX) {
      if (slideIndex > 1 && slideIndex <= slides.length) {
        plusSlides(-1);
      }
    }
  }
}

module.exports = swype;