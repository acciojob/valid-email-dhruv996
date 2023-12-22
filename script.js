function validEmail(email) {
  // Regular expression for validating an Email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmail() {
  const inputEmail = document.getElementById('inputEmail').value;
  const result = validEmail(inputEmail);

  document.getElementById('result').innerText = `Is Valid Email: ${result}`;
}

