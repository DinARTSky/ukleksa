import { isEscapeKey } from "./util.js";

const menuBtn = document.querySelector('.navigation__toggle');
const menuNav = document.querySelector('.navigation');
// const menuNavLink = document.querySelector('.navigation__link');
var menuNavLinks = document.querySelectorAll('.navigation__link');

if (menuBtn) {
  menuBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    menuNav.classList.toggle('navigation--opened');
  });
};

for (let menuNavLink of menuNavLinks) {
  menuNavLink.onclick = function () {
    // evt.preventDefault();
    menuNav.classList.remove('navigation--opened');
  };
}

// console.log(menuNavLink);
// for (let i = 0; i < menuNavLink.length; i++){
//   if (menuNavLink[i]) {
//     menuNavLink[i].addEventListener('click', (evt) => {
//       evt.preventDefault();
//       menuNav.classList.remove('navigation--opened');
//     });
//   };
// }

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
};

const btnModals = document.querySelectorAll('.button-order');
const modal = document.querySelector('.modal');
const modalButtonClose = document.querySelector('.modal__button-close');


if (btnModals) {
  btnModals.forEach((item) => {
    item.addEventListener('click', function () {
      if (modal) {
        modal.classList.remove('modal--close');
      }
    })
  })
};

modalButtonClose.addEventListener('click', function () {
  modal.classList.add('modal--close');
});


window.addEventListener('keydown', function () {
  if (isEscapeKey) {
    modal.classList.add('modal--close');
  }
});


