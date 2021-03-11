const validateEmail = () => {
  const email = document.getElementById('form2-email');
  email.addEventListener('input', (e) => {
    let emailInput = e.target.value;
    e.target.value = emailInput.replace(/[^A-Za-z@\-_.!~*']/g, '');
  });
};

export default validateEmail;