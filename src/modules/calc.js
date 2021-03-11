const calc = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcDay = document.querySelector('.calc-day'),
    calcCount = document.querySelector('.calc-count'),
    totalValue = document.getElementById('total');
  let calcTypeIndex;

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;
    const typeValue = calcType.options[calcType.selectedIndex].value / 10,
    squareValue = +calcSquare.value;

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value >= 5 && calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (typeValue && squareValue) {
      total = typeValue * squareValue * price * countValue * dayValue;
    }
    
    totalValue.textContent = total;

    const showTotal = () => {
      for (let index = 0; index <= total; index++) {
        (function(ind) {
          setTimeout(function(){totalValue.textContent = index;}, (ind+0.1) );
        })(index);
      }
    };

    setTimeout(showTotal, 1000);
  };


  calcBlock.addEventListener('change', (event) => {
    const target = event.target;
    if (target.matches('select') || target.matches('input')) {
      countSum();
    }

  });
};

export default calc;