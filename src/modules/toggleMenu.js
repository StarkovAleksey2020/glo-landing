const toggleMenu = () => {
  const menu = document.querySelector('menu');
  let isMenuOpened = false;
  document.addEventListener('click', (event) => {
    let target = event.target;
    const isMenuBtnPressed = target.closest('.menu');
    const isCloseBtnPressed = target.classList.contains('close-btn');
    const isMenuActive = menu.classList;
    const isClickedToActiveMenu = target.closest('active-menu');

    if (isMenuBtnPressed && !isMenuOpened) {
      menu.classList.toggle('active-menu');
      isMenuOpened = true;
    } else if (isCloseBtnPressed) {
      menu.classList.toggle('active-menu');
      isMenuOpened = false;
    } else if (target.tagName.toLowerCase() === 'a') {
      menu.classList.toggle('active-menu');
      isMenuOpened = false;
    } else if (!isClickedToActiveMenu && target.tagName !== 'MENU' && isMenuActive.toString() === 'active-menu') {
      menu.classList.toggle('active-menu');
      isMenuOpened = false;

    }
  });
};

export default toggleMenu;