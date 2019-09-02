function showQuestion() {
  var arrow = document.querySelectorAll('.arrow'),
    quesText = document.querySelectorAll('.question__text'),
    quesBlock = document.getElementsByClassName('question');

    // скрыли все ответы на вопросы
    for (let i = 0; i < quesText.length; i++){
      quesText[i].style.display = 'none';
    }

    // разворачиваем и сворачиваем блоки
    for (let i = 0; i < quesBlock.length; i++){
      quesBlock[i].addEventListener('click', function() {
        this.children[1].classList.remove('fadeOutUp');
        this.children[1].classList.add('fadeInDown');
        this.children[1].style.display = 'block';
        this.children[0].lastChild.classList.remove('spinLeft');
        this.children[0].lastChild.classList.add('spinRight');
        this.children[0].lastChild.classList.add('mirrorX');

        if (this.classList.contains('open')) {
          this.children[1].classList.remove('fadeInDown');
          this.children[1].classList.add('fadeOutUp');
          this.children[1].style.display = 'none';
          this.children[0].lastChild.classList.remove('spinRight');
          this.children[0].lastChild.classList.add('spinLeft');
          this.children[0].lastChild.classList.remove('mirrorX');
          this.classList.remove('open');
      } else {
          this.classList.add('open');
      }
      });
    }
}

module.exports = showQuestion;