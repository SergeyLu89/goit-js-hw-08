var throttle = require('lodash.throttle');

const refs = {
  feedbackForm: document.querySelector('.feedback-form'),
  emailInput: document.querySelector('[name="email"]'),
  textarea: document.querySelector('[name="message"]'),
};
let userFormValue = {
  email: '',
  message: '',
};
refs.emailInput.addEventListener('input', throttle(onInput, 500)),
  refs.textarea.addEventListener('input', throttle(onInput, 500));

function onInput() {
  userFormValue.email = refs.emailInput.value;
  userFormValue.message = refs.textarea.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(userFormValue));
}

window.addEventListener('load', onLoadWindow);

function onLoadWindow() {
  const saveUserFormValue = localStorage.getItem('feedback-form-state');
  if (saveUserFormValue) {
    const currntUserFormValue = JSON.parse(saveUserFormValue);
    refs.emailInput.value = currntUserFormValue.email || '';
    refs.textarea.value = currntUserFormValue.message || '';
  }
}

refs.feedbackForm.addEventListener('submit', onSubmitButton);
function onSubmitButton(event) {
  event.preventDefault();
  if (userFormValue.email === '' || userFormValue.message === '') {
    alert('All fields must be filled');
  }
  onInput();
  console.log(userFormValue);
  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
}
