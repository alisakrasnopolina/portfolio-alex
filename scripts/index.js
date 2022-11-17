const popupName1Element = document.querySelector('.popup_name_1');
const popupName2Element = document.querySelector('.popup_name_2');
const popupName3Element = document.querySelector('.popup_name_3');
const popupCloseButton1Element = document.querySelector('#popup__close-1');
const popupCloseButton2Element = document.querySelector('#popup__close-2');
const popupCloseButton3Element = document.querySelector('#popup__close-3');
const popupArrowRight1 = document.querySelector('#popup__arrow_direction_right-1');
const popupArrowLeft1 = document.querySelector('#popup__arrow_direction_left-1');
const popupArrowRight2 = document.querySelector('#popup__arrow_direction_right-2');
const popupArrowLeft2 = document.querySelector('#popup__arrow_direction_left-2');
const popupArrowRight3 = document.querySelector('#popup__arrow_direction_right-3');
const popupArrowLeft3 = document.querySelector('#popup__arrow_direction_left-3');
const popupOpenButtonElement = document.querySelector('.button');
const body = document.querySelector('.root')

function popupOpen1 () {
  popupName1Element.classList.add('popup_opened');
}

function popupClose1 () {
  popupName1Element.classList.remove('popup_opened');
}

function changePopupOpen2 () {
  popupName2Element.classList.add('popup_opened');
}

function changePopupClose2 () {
  popupName2Element.classList.remove('popup_opened');
}

function changePopupOpen3 () {
  popupName3Element.classList.add('popup_opened');
}

function changePopupClose3 () {
  popupName3Element.classList.remove('popup_opened');
}


function popupScrollLock () {
  body.classList.add('root_scroll_lock');
}

function popupScrollUnlock () {
  body.classList.remove('root_scroll_lock');
}

popupOpenButtonElement.addEventListener('click', popupOpen1);
popupCloseButton1Element.addEventListener('click', popupClose1);

popupArrowRight1.addEventListener('click', popupClose1);
popupArrowRight1.addEventListener('click', changePopupOpen2);
popupArrowLeft2.addEventListener('click', changePopupClose2);
popupArrowLeft2.addEventListener('click', popupOpen1);
popupCloseButton2Element.addEventListener('click', changePopupClose2);

popupArrowRight2.addEventListener('click', changePopupClose2);
popupArrowRight2.addEventListener('click', changePopupOpen3);
popupArrowLeft3.addEventListener('click', changePopupClose3);
popupArrowLeft3.addEventListener('click', changePopupOpen2);
popupCloseButton3Element.addEventListener('click', changePopupClose3);

popupOpenButtonElement.addEventListener('click', popupScrollLock);

popupCloseButton1Element.addEventListener('click', popupScrollUnlock);
popupCloseButton2Element.addEventListener('click', popupScrollUnlock);
