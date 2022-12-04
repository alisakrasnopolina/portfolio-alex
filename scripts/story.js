const body = document.querySelector('.root');
const buttonMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuSpan = document.querySelector('.header__span');
const menuNewItems = document.querySelector('#header__items').content;

buttonMenu.addEventListener('click', function(){
  const NewItemsElement = menuNewItems.querySelector('.header__menu-list').cloneNode(true);
  if (document.querySelector(".header__menu-list")) {
    document.querySelector(".header__menu-list").remove();
  } else {
    menu.prepend(NewItemsElement);
  }

  body.classList.toggle('root_scroll_lock');
  buttonMenu.classList.toggle('active');
  menu.classList.toggle('active');
  menuSpan.classList.toggle('active');
});
