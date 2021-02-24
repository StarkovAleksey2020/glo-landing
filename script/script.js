window.addEventListener('DOMContentLoaded', function () {
  'use strict';
  
  function countTimer(deadline) {  
    let timerHours = document.querySelector('#timer-hours'),
      timerMinutes = document.querySelector('#timer-minutes'),
      timerSeconds = document.querySelector('#timer-seconds');
    
    function getTimeRemaining() {
      let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60);
      hours = hours < 10 ? '0' + hours : hours;
      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;
      if (timeRemaining <= 0) {
        seconds = minutes = hours = '00';
      }
      return {timeRemaining, hours, minutes, seconds};
    }
  
    function updateClock() {  
      let timer = getTimeRemaining();
      if (timer.timeRemaining <= 0) {
        clearInterval(clockUpdater);
      }
      timerHours.textContent = timer.hours;
      timerMinutes.textContent = timer.minutes;
      timerSeconds.textContent = timer.seconds;
    }

    let clockUpdater = setInterval(() => {
      updateClock();
    }, 1000);
  }

  countTimer('23 February 2021');

  // menu
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      closeBtn = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');
    
    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    }
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn'),
      popUpClose = document.querySelector('.popup-close');
    let interval,
      count = 0,
      screenWidth = screen.width;
    
    popupBtn.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
        if (screenWidth > 768) {
          popup.style.opacity = 0;
          interval = requestAnimationFrame(elementAnimate);
          interval = 0;
          count = 0;
        }
      })
    });
    popUpClose.addEventListener('click', () => { popup.style.display = 'none' });
    
    //animation
    let elementAnimate = function() {
      interval = requestAnimationFrame(elementAnimate);
      count++;
      if ((count / 100) < 1) {
        popup.style.opacity = (count / 100);
      }
    }
  };
  togglePopUp();

});