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

export default toggleMenu;