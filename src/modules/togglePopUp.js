const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn');

  let interval,
    count = 0,
    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';
      if (screenWidth > 768) {
        popup.style.opacity = 0;
        interval = requestAnimationFrame(elementAnimate);
        interval = 0;
        count = 0;
      } else {
        popup.style.opacity = 1;
      }
    });
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


export default togglePopUp;