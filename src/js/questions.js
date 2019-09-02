require('nodelist-foreach-polyfill');
require('classlist-polyfill');

window.addEventListener('DOMContentLoaded', function () {

  let showCategory = require('./parts/showCategory.js'),
      showQuestion = require('./parts/showQuestion.js'),
      modal = require('./parts/modal.js'),
      menu = require('./parts/menu.js');

  showCategory();
  showQuestion();
  modal();
  menu();

});