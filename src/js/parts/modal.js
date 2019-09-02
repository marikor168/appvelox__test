function modal() {
  let more = document.querySelector('.form'),
      modal = document.querySelector('.overlay'),
      form = document.querySelector('.popup form'),
      inputsForm = form.getElementsByTagName('input'),
      inputName = inputsForm[0],
      inputPhone = inputsForm[1];

  more.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  document.body.addEventListener('click', (event) => {
    if (event.target.classList.contains('overlay') || event.target.classList.contains('popup-close')) {
      modal.style.display = 'none';
    document.body.style.overflow = '';
    }
  });

  inputName.addEventListener('input', () => {
    inputName.value = inputName.value.replace(/[^a-zа-яё]/ig, "");
  });

  inputPhone.addEventListener('input', () => {
    inputPhone.value = inputPhone.value.replace(/[^0-9+]/g, "");
  });
}

module.exports = modal;