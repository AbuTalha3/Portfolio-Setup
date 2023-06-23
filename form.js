/* eslint-disable no-unused-vars */
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
