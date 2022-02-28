export default formClassName => {
  const form = document.querySelector(formClassName);
  addValidateListenersInForm(form);
};

const addValidateListenersInForm = form => {
  form.addEventListener('keyup', e => {
    const el = e.target;
    if (el.tagName === 'INPUT') chooseValidator(el);
  });

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!haveInputErrorMessage()) form.submit();
  });
};

const haveInputErrorMessage = () => document.querySelector('.invalid-input');

const removeInputErrorMessage = el => {
  const message = el.parentElement.querySelector('.invalid-input');
  if (!message) return;
  message.remove();
};

const addInputErrorMessage = (el, msg) => {
  removeInputErrorMessage(el);

  const div = document.createElement('div');
  div.classList.add('invalid-input');
  div.innerText = msg;
  el.parentElement.appendChild(div);
};

const validateName = el => {
  const valid = /^(?=.{3,20}$)(?![\W])(?!\W)[\w]+(?<![\W])$/.test(el.value);
  if (valid) {
    removeInputErrorMessage(el);
  } else {
    addInputErrorMessage(el, 'Nome deve conter entre 3 a 20 caracteres alfanuméricos e não deve conter espaçamentos!');
  }
  return valid;
};

const validateEmail = el => {
  addInputErrorMessage(el, 'Email Inválido!');
  const valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(el.value);
  if (valid) {
    removeInputErrorMessage(el);
  } else {
    addInputErrorMessage(el, 'Email Inválido!');
  }
  return valid;
};

const validatePassword = el => {
  const valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,20}$/.test(el.value);

  if (valid) {
    removeInputErrorMessage(el);
  } else {
    addInputErrorMessage(el, `Senha deve conter de 8 a 20 caracteres
    Senha deve conter letras maiúsculas e minúsculas e números`);
  }
  return valid;
};

const validators = {
  name: validateName,
  email: validateEmail,
  password: validatePassword
};

const chooseValidator = el => {
  if (validators[el.id]) validators[el.id](el);
};