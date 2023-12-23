function validatePassword() {
    var password = document.getElementById('password');
    var length = document.getElementById('length');
    var uppercase = document.getElementById('uppercase');
    var lowercase = document.getElementById('lowercase');
    var number = document.getElementById('number');
    var special = document.getElementById('special');
    var messageDiv = document.getElementById('message');

    // Show the message div
    messageDiv.style.display = 'block';

    // Validate length
    if (password.value.length >= 8) {
      length.classList.remove('invalid');
      length.classList.add('valid');
    } else {
      length.classList.remove('valid');
      length.classList.add('invalid');
    }

    // Validate uppercase
    if (/[A-Z]/.test(password.value)) {
      uppercase.classList.remove('invalid');
      uppercase.classList.add('valid');
    } else {
      uppercase.classList.remove('valid');
      uppercase.classList.add('invalid');
    }

    // Validate lowercase
    if (/[a-z]/.test(password.value)) {
      lowercase.classList.remove('invalid');
      lowercase.classList.add('valid');
    } else {
      lowercase.classList.remove('valid');
      lowercase.classList.add('invalid');
    }

    // Validate number
    if (/\d/.test(password.value)) {
      number.classList.remove('invalid');
      number.classList.add('valid');
    } else {
      number.classList.remove('valid');
      number.classList.add('invalid');
    }

    // Validate special character
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password.value)) {
      special.classList.remove('invalid');
      special.classList.add('valid');
    } else {
      special.classList.remove('valid');
      special.classList.add('invalid');
    }
  }