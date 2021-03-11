const validatePhone = (phoneFieldId) => {
  const phone = document.getElementById(phoneFieldId);
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
};

export default validatePhone;