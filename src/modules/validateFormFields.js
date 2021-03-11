const validateFormFields = (nameFieldId) => {
  const customerName = document.getElementById(nameFieldId);
  const customerMessage = document.getElementById('form2-message');
  customerName.addEventListener('input', (e) => {
    let nameInput = e.target.value;
    e.target.value = nameInput.replace(/[^А-Яа-яЁё ]/g, '').toUpperCase();
  });
  customerMessage.addEventListener('input', (e) => {
    let messageInput = e.target.value;
    e.target.value = messageInput.replace(/[^А-Яа-яЁё 0-9.,!;:\-_()\?]/g, '').toUpperCase();
  });
};

export default validateFormFields;