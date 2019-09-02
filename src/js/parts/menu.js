function menu() {
    let menu = document.querySelector('.popup-menu'),
        hamburger = document.querySelector('.hamburger'),
        hambMenu = document.querySelectorAll('.header-menu__link')[0];
    let menuShow = 0;
    
        hamburger.addEventListener('click', () => {
          if (menuShow == 0) {
            menu.style.display = 'block';
            menuShow = 1;
          } else {
            menu.style.display = 'none';
            menuShow = 0;
          }
        });

        hambMenu.addEventListener('click', () => {
          if (menuShow == 0) {
            menu.style.display = 'block';
            menuShow = 1;
          } else {
            menu.style.display = 'none';
            menuShow = 0;
          }
        });
      
}

module.exports = menu;