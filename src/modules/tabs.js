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

export default tabs;