const blurHandler = () => {
  const form = document.getElementById('form2');
  const formInputs = form.querySelectorAll('input');

  form.addEventListener('blur', (e) => {
    validateFormFields('form2-name');
    validateEmail();
    validatePhone('form2-phone');
    formInputs.forEach(item => formHandler(item));
  }, true);
};

export default blurHandler;