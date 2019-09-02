function tabs() {

  let tab = document.querySelectorAll('.services-header__tab'),
      info = document.querySelector('.services-header'),
      tabContent = document.querySelectorAll('.services-tabcontent');

  let hideTabContent = (a = 1) => {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
    }
  };

  hideTabContent(1);

  let showTabContent = (b) => {
    if (tabContent[b].classList.contains('hide')) {
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  };

  info.addEventListener('click', (event) => {
    let target = event.target;

    if (target && target.classList.contains('services-header__tab')) {
      for (let i = 0; i < tab.length; i++) {
        if (tab[i].classList.contains('services-header__tab-active')) {
          tab[i].classList.remove('services-header__tab-active');
        }
      }

      target.classList.add('services-header__tab-active');

      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          hideTabContent(0);
          showTabContent(i);
          break;
        }
      }
    }
  });
}

module.exports = tabs;