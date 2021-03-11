  'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import addDots from './modules/addDots';
import slider from './modules/slider';
import changeImage from './modules/changeImage';
import validateCalculatorFields from './modules/validateCalculatorFields';
import validateFormFields from './modules/validateFormFields';
import validateEmail from './modules/validateEmail';
import validatePhone from './modules/validatePhone';
import blurHandler from './modules/blurHandler';
import formHandler from './modules/formHandler';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

let date = new Date();
countTimer(date.setDate(date.getDate() + 2));
// menu
toggleMenu();
//popup
togglePopUp();
// scrolling
const anchors = document.querySelectorAll('a[href]');
anchors.forEach((item) => {
  
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const blockId = item.getAttribute('href').substr(1);
    if (blockId !== 'close' && blockId !== '') {
      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  })
});
// tabs
tabs();
// add dots
addDots();
// slider
slider();
// mouse over/out change image
changeImage();
// numbers allow only (in calculator fields)
validateCalculatorFields();
// cyrillic allow only (in name&message fields)
validateFormFields('form1-name');
validateFormFields('form2-name');
validateFormFields('form3-name');
// email field validation
validateEmail();
// phone field validation
validatePhone('form1-phone');
validatePhone('form2-phone');
validatePhone('form3-phone');
// blur handling
blurHandler();
// calculator
calc(100);
// send-ajax-form
sendForm('form1');
sendForm('form2');
sendForm('form3');