require('nodelist-foreach-polyfill');
require('classlist-polyfill');

window.addEventListener('DOMContentLoaded', function () {

  let tabs = require('./parts/tabs.js'),
      slider = require('./parts/slider.js'),
      hideHeader = require('./parts/hideHeader.js'),
      principles = require('./parts/principles.js'),
      menu = require('./parts/menu.js');

  tabs();
  slider();
  hideHeader();
  menu();

  if (window.innerWidth <= 1260) {
  principles();
  }

});