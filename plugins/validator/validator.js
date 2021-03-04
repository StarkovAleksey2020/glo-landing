class Validator {
  constructor({ selector, pattern = {}, method}) {
    this.form = document.querySelector(selector);
    this.pattern = pattern;
    this.method = method;
    this.elementsForm = [...this.form.elements].filter(item => {
      return item.tagName.toLowerCase() !== 'button' &&
        item.type !== 'button';
    });
    this.error = new Set();
  }

  init() {
    this.applyStyle();
    this.setPattern();
    this.elementsForm.forEach(elem => elem.addEventListener('change', this.checkIt.bind(this)));
    this.form.addEventListener('submit', e => {
      e.preventDefault();
      this.elementsForm.forEach(elem => this.checkIt({ target: elem }));
      if (e.error.size) {
        e.preventDefault();
      }
    });
  }

  isValid(elem) {

    const validatorMethod = {
      notEmpty(elem) {
        if (elem.value.trim() === '') {
          return false;
        }
        return true;
      },
      pattern(elem, pattern) {
//        console.log('elem: ', elem);
//        console.log('pattern: ', pattern);
        //console.log('pattern.test(elem.value): ', pattern.test(elem.value));
        return pattern.test(elem.value);
      }
    };

    if (this.method) {
      const method = this.method[elem.id];
      if (method) {
        return method.every(item => {
//          console.log('item: ', item);
  //        console.log(validatorMethod[item[0]](elem, this.pattern[item[1]]));
          return validatorMethod[item[0]](elem, this.pattern[item[1]]);
        });
      }
    } else {
      console.log('Передайте id полей и методы проверки этих полей при вызове валидатора');
    }

    return true;
  }

  checkIt(event) {
    const target = event.target;
    if (this.isValid(target)) {
      this.showSuccess(target);
      this.error.delete(target);
    } else {
      this.showError(target);
      this.error.add(target);
    }
  }

  showError(elem) {
    elem.classList.add('error');
    elem.classList.remove('success');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      return;
    }
    const errorDiv = document.createElement('div');
    errorDiv.textContent = 'Ошибка в этом поле';
    errorDiv.classList.add('validator-error');
    elem.insertAdjacentElement('afterend', errorDiv);
  }

  showSuccess(elem) {
    elem.classList.add('success');
    elem.classList.remove('error');
    if (elem.nextElementSibling && elem.nextElementSibling.classList.contains('validator-error')) {
      elem.nextElementSibling.remove();
    }
  }

  applyStyle() {
    const style = document.createElement('style');
    style.textContent = `
      input.success {
        border: 2px solid green
      }
      input.error {
        border: 2px solid red
      }
      .validator-error {
        font-size: 12px;
        font-family: sans-serif;
        color: red;
        position: absolute;
        top: 23px;
      }
    `;
    document.head.appendChild(style);
  }

  setPattern() {
    if (!this.pattern.phone) this.pattern.phone = /^\+?[78]([-()]*\d){10}$/;
    if (!this.pattern.email) this.pattern.email = /^\w+@\w+\.\w{2,}$/;
    if (!this.pattern.cyrillic) this.pattern.cyrillic = /[А-Яа-яЁё]/;
  }
}

// Lesson 25
// form1
const validFormAppeal = new Validator({
  selector: '#form1',
  pattern: {
    //phone: /^\d+$/  
    //zip: /\d{5,6}/
    //cyrillic: /[А-Яа-яЁё]/
    cyrillic: /[А-Яа-яЁё]/
  },
  method: {
    'form1-name': [
      ['notEmpty'],
      ['pattern', 'cyrillic']
    ],
    'form1-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form1-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ]
  }
});

validFormAppeal.init();

// form2
const validFormContact = new Validator({
  selector: '#form2',
  pattern: {
    cyrillic: /[А-Яа-яЁё]/
  },
  method: {
    'form2-name': [
      ['notEmpty'],
      ['pattern', 'cyrillic']
    ],
    'form2-phone': [
      ['notEmpty'],
      ['pattern', 'phone']
    ],
    'form2-email': [
      ['notEmpty'],
      ['pattern', 'email']
    ],
    'form2-message': [
      ['notEmpty'],
      ['pattern', 'cyrillic']
    ]
  }
});

validFormContact.init();