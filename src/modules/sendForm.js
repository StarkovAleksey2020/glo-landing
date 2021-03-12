const sendForm = (formName) => {
  const errorMessage = 'Что-то пошло не так ...',
    loadMessage = 'Загрузка ...',
    fillEmail = 'Заполните email!',
    nameFieldLength = 'Длина поля имени - минимум 2 знака',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
  
  const form = document.getElementById(formName);

  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem';
  statusMessage.style.color = '#FFFFFF';

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.appendChild(statusMessage);
    const inputs = Array.from(form.querySelectorAll('input'));

    for (let index = 0; index < inputs.length; index++) {
      const emailName = inputs[index].getAttribute('name');
      if (emailName === 'user_email') {
        if (inputs[index].value.trim().length === 0) {
          statusMessage.textContent = fillEmail;
          throw new Error('empty email field');
        }
        inputs[index].addEventListener('input', (e) => {
          let emailInput = inputs[index].value;
          inputs[index].value = emailInput.replace(/[^A-Za-z@\-_.!~*']/g, '');
        });
      } else if (emailName === 'user_name') {
        if (inputs[index].value.trim().length < 2) {
          statusMessage.textContent = nameFieldLength;
          throw new Error('name field too short (must be minimum 2 chars)');
        }
      }
    }
    

    //statusMessage.textContent = loadMessage;
    statusMessage.classList.add('loader');
    const formData = new FormData(form);
    let body = {};
    for (let value of formData.entries()) {
      body[value[0]] = value[1];
    }
    postData(body, () => {
      statusMessage.classList.remove('loader');
      statusMessage.textContent = successMessage;
      clearForm(formName);
    }, (error) => {
      statusMessage.classList.remove('loader');
      statusMessage.textContent = errorMessage;
      console.error(error);
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