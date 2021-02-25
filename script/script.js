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
    const menu = document.querySelector('menu');
    let isMenuOpened = false;
    document.addEventListener('click', (event) => {
      let target = event.target;
      const isMenuBtnPressed = target.closest('.menu');
      const isCloseBtnPressed = target.classList.contains('close-btn');
      const isMenuItemPressed = target.closest('menu');
      if (isMenuBtnPressed && !isMenuOpened) {
        menu.classList.toggle('active-menu');
        isMenuOpened = true;
        console.log('isMenuOpened ____: ', isMenuOpened);
      } else if (isCloseBtnPressed) {
        menu.classList.toggle('active-menu');
        isMenuOpened = false;
        console.log('isMenuOpened: +++++++ ', isMenuOpened);
      } else if (isMenuItemPressed && isMenuOpened) {
        menu.classList.toggle('active-menu');
        isMenuOpened = false;
      } else if (!isCloseBtnPressed && !isMenuItemPressed && isMenuOpened) {
        menu.classList.toggle('active-menu');
        isMenuOpened = false;        
      }
      
    });
  };
  toggleMenu();

  //popup
  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      popupBtn = document.querySelectorAll('.popup-btn');

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
    
    popup.addEventListener('click', (event) => {
      let target = event.target;
      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');
  
        if (!target) {
          popup.style.display = 'none';
        }
      }
    });

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

  // scrolling
  const anchors = document.querySelectorAll('a[href]');
  anchors.forEach((item) => {
    
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const blockId = item.getAttribute('href').substr(1);
      if (blockId !== 'close') {
        document.getElementById(blockId).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    })
  });

  // tabs
  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');
    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        const element = tabContent[i];
        if (index === i) {
          tabContent[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tabContent[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };
    tabHeader.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.service-header-tab');
      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        })
      }
    });
  };
  tabs();
});