function showCategory() {

  let category = document.querySelectorAll('.cat-word'),
    categoriesWrapper = document.querySelector('.questions-categories');

    categoriesWrapper.addEventListener('click', (event) => {
      let target = event.target;

    if (target && target.classList.contains('cat-word')) {
      for (let i = 0; i < category.length; i++) {
        if (category[i].classList.contains('cat-word-active')) {
          category[i].classList.remove('cat-word-active');
        }
      }

      target.classList.add('cat-word-active');

    }
  });
}

module.exports = showCategory;
