const validatePhone = (phoneFieldId) => {
  const phone = document.getElementById(phoneFieldId);
  phone.addEventListener('input', (e) => {
    let phoneInput = e.target.value;
    //e.target.value = phoneInput.replace(/[^0-9\-()]/g, '');
    e.target.value = phoneInput.replace(/[^0-9+]/g, '');
  });
};

export default validatePhone;