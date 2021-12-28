jQuery(window).on('load', function () {
  'use strict';

  $('.preloader').addClass('hide-preloader');

  setTimeout(function () {
    $('#intro .animation-container').each(function () {
      var e = $(this);

      setTimeout(function () {
        e.addClass('run-animation');
      }, e.data('animation-delay'));
    });
  }, 700);
});

jQuery(document).ready(function ($) {
  'use strict';

  $(document).on('click', 'a.smooth-scroll', function (event) {
    event.preventDefault();

    $('html, body').animate(
      {
        scrollTop: $($.attr(this, 'href')).offset().top - 80,
      },
      500
    );
  });
});

const body = document.querySelector('body');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.menu-list');
const menuBtn = document.querySelector('.menu-btn');
const cancelBtn = document.querySelector('.cancel-btn');
menuBtn.onclick = () => {
  menu.classList.add('active');
  menuBtn.classList.add('hide');
  cancelBtn.classList.add('show');
  body.classList.add('disabledScroll');
};
cancelBtn.onclick = () => {
  menu.classList.remove('active');
  menuBtn.classList.remove('hide');
  cancelBtn.classList.remove('show');
  body.classList.remove('disabledScroll');
};

window.onscroll = () => {
  this.scrollY > 20
    ? navbar.classList.add('sticky')
    : navbar.classList.remove('sticky');
};

if (localStorage.getItem('theme') == 'light') setLightMode();

function setLightMode() {
  let isLight = document.body.classList.toggle('lightmode');
  if (isLight) {
    toggle = '[<u>L:ght</u>]';
    localStorage.setItem('theme', 'light');
  } else {
    toggle = '[<del>L:ght</del>]';
    localStorage.removeItem('theme');
  }
  document.getElementById('lightBtn').innerHTML = toggle;
}
