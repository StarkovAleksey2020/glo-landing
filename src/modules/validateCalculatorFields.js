const validateCalculatorFields = () => {
  const calculatorItems = document.querySelectorAll('.calc-item');
  calculatorItems.forEach(item => {
    item.addEventListener('input', (e) => {
      let calcInput = e.target.value;
      e.target.value = calcInput.replace(/\D/g, '');
    });
  });
};

export default validateCalculatorFields;