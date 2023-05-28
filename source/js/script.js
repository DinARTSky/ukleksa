const menuBtn = document.querySelector('.navigation__toggle');
const menuNav = document.querySelector('.navigation');

if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuNav.classList.toggle('navigation--opened');
  });
};

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
};

const btnModals = document.querySelectorAll('.button-order');
const modal = document.querySelector('.modal');

if (btnModals) {
  btnModals.forEach((item) => {
    item.addEventListener('click', function () {
      if (modal) {
        modal.classList.remove('modal--close');
      }
    })
  })
};
