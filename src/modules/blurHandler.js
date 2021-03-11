const blurHandler = () => {
  const form = document.getElementById('form2');
  const formInputs = form.querySelectorAll('input');

  form.addEventListener('blur', (e) => {
    //validate name & message;
    const customerName = document.getElementById('form2-name');
    const customerMessage = document.getElementById('form2-message');
    customerName.addEventListener('input', (e) => {
      let nameInput = e.target.value;
      e.target.value = nameInput.replace(/[^А-Яа-яЁё ]/g, '').toUpperCase();
    });
    customerMessage.addEventListener('input', (e) => {
      let messageInput = e.target.value;
      e.target.value = messageInput.replace(/[^А-Яа-яЁё 0-9.,!;:\-_()\?]/g, '').toUpperCase();
    });

    //validate email;
    const email = document.getElementById('form2-email');
    email.addEventListener('input', (e) => {
      let emailInput = e.target.value;
      e.target.value = emailInput.replace(/[^A-Za-z@\-_.!~*']/g, '');
    });

    //validate phone;
    const phone = document.getElementById('form2-phone');
    phone.addEventListener('input', (e) => {
      let first = true;
      let phoneInput = e.target.value;
      e.target.value = phoneInput
        .replace(/[^0-9\+]/g, '')
        .replace(/(\+)+/g, function(match, p1) {
        if(first) {
          first = false;
          return p1;
        }
        else return '';
      });
    });

    formInputs.forEach(item => {
      let elementValue = item.value;
      elementValue = elementValue.replace(/[ ]+/g, ' ');
      elementValue = elementValue.replace(/[-]+/g, '-');
      elementValue = elementValue.replace(/^[ ]+/g, '');
      elementValue = elementValue.replace(/^[-]+/g, '');
      elementValue = elementValue.replace(/[ ]+$/g, '');
      elementValue = elementValue.replace(/[-]+$/g, '');
      if (item.id === 'form2-name') {
        elementValue = elementValue.substring(0, 1).toUpperCase() + elementValue.substring(1).toLowerCase();
      }
      item.value = elementValue;
    });
  }, true);
};

export default blurHandler;