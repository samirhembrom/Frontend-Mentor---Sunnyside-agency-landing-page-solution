'use strict';

const navBtn = document.querySelector('.menu-btn');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelectorAll('.nav__item');

let showMenu = false;

navBtn.addEventListener('click', function () {
  navBtn.classList.toggle('open');
  let expanded = this.getAttribute('aria-expanded') === 'true' || false;
  this.setAttribute('aria-expanded', !expanded);

  if (!showMenu) {
    console.log(navList);
    navList.classList.remove('d-none');
    setTimeout(() => {
      navList.classList.remove('hidden');
      navItems.forEach(item => {
        item.classList.remove('exit');
        item.classList.add('entrance');
      });
    }, 100);
    showMenu = true;
    console.log(navList);
  } else {
    console.log(navList);
    navItems.forEach(item => {
      item.classList.remove('entrance');
      item.classList.add('exit');
    });
    setTimeout(() => {
      navList.classList.add('hidden');
    }, 1000);

    setTimeout(() => {
      navList.classList.add('d-none');
    }, 1500);
    showMenu = false;
    console.log(navList);
  }
});


