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

  countTimer('23 February 2021')

});