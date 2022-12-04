const body = document.querySelector('.root');
const popupElement = body.querySelectorAll('.popup');
const popupOpenButtonElement = document.querySelector('.button');
const popupCloseButtonElement = document.querySelectorAll('.popup__close');
const popupShowImage = document.querySelectorAll('.popup__show-image');
const popupDescription = body.querySelectorAll('.popup__description');
const arrowIntro = body.querySelectorAll('.intro__arrow');
const buttonMenu = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuSpan = document.querySelector('.header__span');
const menuNewItems = document.querySelector('#header__items').content;
let i;
let numbers = [];
let colors= ['rgba(229, 92, 92, .5)', 'rgba(229, 138, 92, .5)', 'rgba(229, 184, 92, .5)', 'rgba(229, 229, 92, .5)', 'rgba(184, 229, 92, .5)', 'rgba(122, 204, 82, .5)', 'rgba(82, 204, 102, .5)', 'rgba(82, 204, 163, .5)', 'rgba(82, 204, 204, .5)', 'rgba(82, 163, 204, .5)', 'rgba(82, 123, 204, .5)', 'rgba(82, 82, 204, .5)', 'rgba(123, 82, 204, .5)', 'rgba(163, 82, 204, .5)', 'rgba(204, 82, 204, .5)', 'rgba(204, 82, 163, .5)' ];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

popupOpenButtonElement.addEventListener('click', function random () {
  i = getRandomInt(0, 16);
  if (numbers.includes(i)) {
    while (numbers.includes(i) === true) {
      if (numbers.length === 16) {
        numbers = [];
      };
      i = getRandomInt(0, 16);
    };
    numbers.push(i);
    return console.log(numbers, i);
  }
  else {
    numbers.push(i);
    return console.log(numbers, i);
  }
});

function popupOpen () {
  popupElement[i].classList.add('popup_opened');
}
  
function popupClose () {
  popupOpenButtonElement.style.backgroundColor = colors[i];
  popupElement[i].classList.remove('popup_opened');
}

function popupScrollLock () {
  body.classList.add('root_scroll_lock');
}

function popupScrollUnlock () {
  body.classList.remove('root_scroll_lock');
}

function popupDescriptionRemove () {
  popupShowImage[i].classList.toggle('popup__show-image_open');
  popupDescription[i].classList.toggle('popup__description_close');
}


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





popupOpenButtonElement.addEventListener('click', popupOpen);
popupCloseButtonElement[0].addEventListener('click', popupClose);
popupShowImage[0].addEventListener('click', popupDescriptionRemove);
popupShowImage[1].addEventListener('click', popupDescriptionRemove);
popupShowImage[2].addEventListener('click', popupDescriptionRemove);
popupShowImage[3].addEventListener('click', popupDescriptionRemove);
popupShowImage[4].addEventListener('click', popupDescriptionRemove);
popupShowImage[5].addEventListener('click', popupDescriptionRemove);
popupShowImage[6].addEventListener('click', popupDescriptionRemove);
popupShowImage[7].addEventListener('click', popupDescriptionRemove);
popupShowImage[8].addEventListener('click', popupDescriptionRemove);
popupShowImage[9].addEventListener('click', popupDescriptionRemove);
popupShowImage[10].addEventListener('click', popupDescriptionRemove);
popupShowImage[11].addEventListener('click', popupDescriptionRemove);
popupShowImage[12].addEventListener('click', popupDescriptionRemove);
popupShowImage[13].addEventListener('click', popupDescriptionRemove);
popupShowImage[14].addEventListener('click', popupDescriptionRemove);
popupShowImage[15].addEventListener('click', popupDescriptionRemove);
popupCloseButtonElement[1].addEventListener('click', popupClose);
popupCloseButtonElement[2].addEventListener('click', popupClose);
popupCloseButtonElement[3].addEventListener('click', popupClose);
popupCloseButtonElement[4].addEventListener('click', popupClose);
popupCloseButtonElement[5].addEventListener('click', popupClose);
popupCloseButtonElement[6].addEventListener('click', popupClose);
popupCloseButtonElement[7].addEventListener('click', popupClose);
popupCloseButtonElement[8].addEventListener('click', popupClose);
popupCloseButtonElement[9].addEventListener('click', popupClose);
popupCloseButtonElement[10].addEventListener('click', popupClose);
popupCloseButtonElement[11].addEventListener('click', popupClose);
popupCloseButtonElement[12].addEventListener('click', popupClose);
popupCloseButtonElement[13].addEventListener('click', popupClose);
popupCloseButtonElement[14].addEventListener('click', popupClose);
popupCloseButtonElement[15].addEventListener('click', popupClose);
popupOpenButtonElement.addEventListener('click', popupScrollLock);
popupCloseButtonElement[0].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[1].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[2].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[3].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[4].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[5].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[6].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[7].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[8].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[9].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[10].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[11].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[12].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[13].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[14].addEventListener('click', popupScrollUnlock);
popupCloseButtonElement[15].addEventListener('click', popupScrollUnlock);


