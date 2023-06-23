/* eslint-disable no-unused-vars */
const email = document.getElementById('email');
function message(errorMessage) {
  document.getElementById('message2').innerHTML = errorMessage;
}
function validation(event) {
  if (email.value !== email.value.toLowerCase()) {
    message('email should be in lowercase');
    event.preventDefault;
    return true;
  }
  return false;
}