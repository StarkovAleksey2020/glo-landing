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
      return { timeRemaining, hours, minutes, seconds };
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
      } else if (isCloseBtnPressed) {
        menu.classList.toggle('active-menu');
        isMenuOpened = false;
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
    let elementAnimate = function () {
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
      if (blockId !== 'close' && blockId !== '') {
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

  // add dots
  const addDots = () => {
    const slideCount = document.querySelectorAll('.portfolio-item').length;
    const dotsUl = document.querySelector('.portfolio-dots');
    for (let i = 0; i <= slideCount - 1; i++) {
      const li = document.createElement('li');
      li.classList.add('dot');
      if (i === 0) li.classList.add('dot-active');
      dotsUl.append(li);
    }
  };

  addDots();

  // slider

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content');
    
    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;
      
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
      clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
      event.preventDefault();

      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }
      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }

    });

    startSlide(2000);
  };
  slider();

  // mouse over/out change image
  const changeImage = () => {
    const commandImages = document.querySelectorAll('.command__photo');
    commandImages.forEach(item => {item.addEventListener('mouseover', (e) => { imageHandler(e) }) })
    commandImages.forEach(item => {item.addEventListener('mouseout', (e) => { imageHandler(e) }) })
    
    const imageHandler = (e) => {
      const dataImg = e.target.src;
      e.target.src = e.target.dataset.img;
      e.target.dataset.img = dataImg;
    }
  };

  changeImage();

  // numbers allow only (in calculator fields)
  const validateCalculatorFields = () => {
    const calculatorItems = document.querySelectorAll('.calc-item');
    calculatorItems.forEach(item => {
      item.addEventListener('input', (e) => {
        let calcInput = e.target.value;
        e.target.value = calcInput.replace(/\D/g, '');
      });
    });
  };

  validateCalculatorFields();

  // cyrillic allow only (in name&message fields)
  const validateFormFields = () => {
    const customerName = document.getElementById('form2-name');
    const customerMessage = document.getElementById('form2-message');
    customerName.addEventListener('input', (e) => {
      let nameInput = e.target.value;
      e.target.value = nameInput.replace(/[^А-Яа-яЁё -]/g, '');
    });
    customerMessage.addEventListener('input', (e) => {
      let messageInput = e.target.value;
      e.target.value = messageInput.replace(/[^А-Яа-яЁё -]/g, '');
    });
  };

  validateFormFields();

  // email field validation
  const validateEmail = () => {
    const email = document.getElementById('form2-email');
    email.addEventListener('input', (e) => {
      let emailInput = e.target.value;
      e.target.value = emailInput.replace(/[^A-Za-z@\-_.!~*']/g, '');
    });
  };

  validateEmail();

  // phone field validation
  const validatePhone = () => {
    const phone = document.getElementById('form2-phone');
    phone.addEventListener('input', (e) => {
      let phoneInput = e.target.value;
      e.target.value = phoneInput.replace(/[^0-9\-()]/g, '');
    });
  };

  validatePhone();

  // point 6 rules
  const formHandler = (element) => {
    let elementValue = element.value;
    elementValue = elementValue.replace(/[ ]+/g, ' ');
    elementValue = elementValue.replace(/[-]+/g, '-');
    elementValue = elementValue.replace(/^[ ]+/g, '');
    elementValue = elementValue.replace(/^[-]+/g, '');
    elementValue = elementValue.replace(/[ ]+$/g, '');
    elementValue = elementValue.replace(/[-]+$/g, '');
    if (element.id === 'form2-name') {
      elementValue = elementValue.substring(0, 1).toUpperCase() + elementValue.substring(1).toLowerCase();
    }
    element.value = elementValue;
  };

  // blur handling
  const blurHandler = () => {
    const form = document.getElementById("form2");
    const formInputs = form.querySelectorAll('input');

    form.addEventListener('blur', (e) => {
      validateFormFields();
      validateEmail();
      validatePhone();
      formInputs.forEach(item => formHandler(item));
    }, true);
  };

  blurHandler();

  // calculator
  const calc = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');
    let calcTypeIndex;

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;
      const typeValue = calcType.options[calcType.selectedIndex].value / 10,
      squareValue = +calcSquare.value;
  
      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value >= 5 && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (typeValue && squareValue) {
        total = typeValue * squareValue * price * countValue * dayValue;
      }
      
      totalValue.textContent = total;

      const showTotal = () => {
        for (let index = 0; index <= total; index++) {
          (function(ind) {
            setTimeout(function(){totalValue.textContent = index;}, (ind+0.1) );
          })(index);
        }
      };

      setTimeout(showTotal, 1000);
    };


    calcBlock.addEventListener('change', (event) => {
      const target = event.target;
      if (target.matches('select') || target.matches('input')) {
        countSum();
      }

    });
  };

  calc(100);

});