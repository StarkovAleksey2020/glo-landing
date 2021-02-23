window.addEventListener('DOMContentLoaded', function () { 
  'use strict';

  function getTimeFormated(date) { 
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = Math.floor(date.getMilliseconds() / 60);
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;
    return hour + ':' + minute + ':' + second + ' ' + ampm;
  }

  function getDaysBeforNY(date) {  
    const dateNY = '31 december ' + date.getFullYear();
    const msDelta = new Date(dateNY).getTime() - date.getTime();
    return Math.floor(msDelta / 60 / 60 / 24 / 1000);
  }

  function getTimerInfo() {  
    let weekDays = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

    let dateTimeObj = {
      dateNow: new Date(),
    };
    if (dateTimeObj.dateNow.getHours() < 11 && dateTimeObj.dateNow.getHours() > 0) {
      dateTimeObj.hello = 'Доброе утро';
    } else if (dateTimeObj.dateNow.getHours() >= 11 && dateTimeObj.dateNow.getHours() < 17) {
      dateTimeObj.hello = 'Добрый день';
    } else {
      dateTimeObj.hello = 'Добрый вечер';
    }
    dateTimeObj.weekDay = 'Сегодня: ' + weekDays[dateTimeObj.dateNow.getDay()];
    dateTimeObj.currentTime = 'Текущее время: ' + getTimeFormated(dateTimeObj.dateNow);
    dateTimeObj.restNY = 'До нового года осталось ' + getDaysBeforNY(dateTimeObj.dateNow) + ' дней';
    renderTimer(dateTimeObj);
  }

  
  function renderTimer(dateTimeObj) {  
    const timer = document.querySelector('.timer');
    const timerInfo = document.createElement('div');
    timerInfo.innerHTML = `<span class="timer-hello">${dateTimeObj.hello}</span><br />
                              <span class="timer-week-day">${dateTimeObj.weekDay}</span><br />
                              <span class="timer-current-time">${dateTimeObj.currentTime}</span><br />
                              <span class="timer-rest-ny">${dateTimeObj.restNY}</span>`;
    timer.append(timerInfo);
  }

  getTimerInfo();
});