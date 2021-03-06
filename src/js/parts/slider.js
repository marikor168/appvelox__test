function slider() {
  // тот слайд, который показывается в текущий момент
  let slideIndex = 1,
    slides = document.querySelectorAll('.slider-block'),
    prev = document.querySelector('.slider-wrap .prev'),
    next = document.querySelector('.slider-wrap .next'),
    dotsWrap = document.querySelector('.slider-dots'),
    dots = document.querySelectorAll('.slider-dots .dot');

  showSlides(slideIndex);

  function showSlides(n) {

    // меняем стрелочки
    if (n == 1) {
      prev.style.backgroundImage = 'url(./img/navigation/ShapeCopy.png)';
      if (prev.classList.contains('mirrorY')) {
        prev.classList.remove('mirrorY');
      }
      next.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      if (next.classList.contains('mirrorY')) {
        next.classList.remove('mirrorY');
      }
    }

    if (n > 1 && n < slides.length) {
      prev.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      prev.classList.add('mirrorY');
      next.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      if (next.classList.contains('mirrorY')) {
        next.classList.remove('mirrorY');
      }
    }

    if (n == slides.length) {
      prev.style.backgroundImage = 'url(./img/navigation/Shape.png)';
      prev.classList.add('mirrorY');
      next.style.backgroundImage = 'url(./img/navigation/ShapeCopy.png)';
      next.classList.add('mirrorY');
    }

    slides.forEach((item) => item.style.display = 'none');
    dots.forEach((item) => item.classList.remove('dot-active'));

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  // определяем текущий слайд и устанавливаем его
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prev.addEventListener('click', () => {
    if (slideIndex > 1 && slideIndex <= slides.length) {
      plusSlides(-1);
    }
  });

  next.addEventListener('click', () => {
    if (slideIndex >= 1 && slideIndex < slides.length) {
      plusSlides(1);
    }
  });

  dotsWrap.addEventListener('click', (event) => {
    for (let i = 0; i < dots.length + 1; i++) {
      if (event.target.classList.contains('dot') && event.target == dots[i - 1]) {
        currentSlide(i);
      }
    }
  });

  // реализация свайпа
  let touchstartX = 0;
  let touchendX = 0;

  const gestureZone = document.querySelector('.slider');

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

module.exports = slider;