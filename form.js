/* eslint-disable no-unused-vars */
// const email = document.getElementById('email');
// function message(errorMessage) {
//   document.getElementById('message2').innerHTML = errorMessage;
// }
// function validation(event) {
//     if (email.value !== email.value.toLowerCase()) {
//         message('email should be in lowercase');
//         event.preventDefault();
//     return true;
//   }
//   return false;
// }

const form = document.getElementById('error2');


form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const correctEmail = email.toLowerCase();
  if (email === correctEmail) {
    form.submit();
  } else {
    const errorMessage = document.getElementById('message2');
    errorMessage.textContent = 'email should be in lowercase';
    errorMessage.style.display = 'block';
  }
});