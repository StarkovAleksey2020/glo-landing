// point 6 rules
const formHandler = (element) => {
  let elementValue = element.value;
  elementValue = elementValue.replace(/[ ]+/g, ' ');
  elementValue = elementValue.replace(/[-]+/g, '-');
  elementValue = elementValue.replace(/^[ ]+/g, '');
  elementValue = elementValue.replace(/^[-]+/g, '');
  elementValue = elementValue.replace(/[ ]+$/g, '');
  elementValue = elementValue.replace(/[-]+$/g, '');
  if (element.id === 'form2-name') {
    elementValue = elementValue.substring(0, 1).toUpperCase() + elementValue.substring(1).toLowerCase();
  }
  element.value = elementValue;
};

export default formHandler;