const sendForm = (formName) => {
  const errorMessage = 'Что-то пошло не так ...',
    loadMessage = 'Загрузка ...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  
  const form = document.getElementById(formName);

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem';
  statusMessage.style.color = '#FFFFFF';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);

    //statusMessage.textContent = loadMessage;
    statusMessage.classList.add('loader');
    const formData = new FormData(form);
    let body = {};
    for (let value of formData.entries()) {
      body[value[0]] = value[1];
    }
    postData(body, () => {
      statusMessage.classList.remove('loader');
      statusMessage.textContent = successMessage
      clearForm(formName);
    }, (error) => {
      statusMessage.classList.remove('loader');
      statusMessage.textContent = errorMessage;
      console.error(error)
    });
  });

  const clearForm = (formName) => {
    const inputElements = document.getElementById(formName).getElementsByTagName('input');
    for (let item of inputElements) {
      item.value = '';
    }
  };

  const postData = (body, outputData, errorData) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {

      if (request.readyState !== 4) {
        return;
      }

      if (request.status === 200) {
        outputData();
      } else {
        errorData(request.status);
      }
    });
    request.open('POST', './server.php');
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify(body));
  };
};

export default sendForm;