// header eye


document.querySelector('body').addEventListener('mouseover', eyeball);

function eyeball(event) {
  const eyes = document.querySelectorAll('.eye');
  eyes.forEach((eye) => {
    let x = (eye.getBoundingClientRect().left) + (eye.clientWidth / 2);
    let y = (eye.getBoundingClientRect().top) + (eye.clientHeight / 2);
    
    let radian = Math.atan2(event.pageX - x, event.pageY - y);
    let rotation = (radian * (180 / Math.PI) * -1) + 270;
    eye.style.transform = "rotate(" + rotation + "deg)";
  });
}



// Add event listeners to input and eye icon to toggle password visibility
const passwordInput = document.getElementById('password');

document.addEventListener('DOMContentLoaded', function () {
  var showPasswordToggle = document.getElementById('showPasswordToggle');
  var eyeIcon = document.getElementById('eyeIcon');

  showPasswordToggle.addEventListener('click', function () {
    var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Change the eye icon based on the password visibility
    eyeIcon.classList.toggle('bi-eye');
    eyeIcon.classList.toggle('bi-eye-slash');
  });
});

// VALIDATION
// const valider = document.getElementById("valider");
// const textValide = document.getElementById("textValide");

// valider.addEventListener('click', validePassword);

// function validePassword(){

// }
document.addEventListener("DOMContentLoaded", function () {
  const passwordInput = document.getElementById("password");
  const validerButton = document.getElementById("valider");
  const textValide = document.getElementById("textValide");
  const UpperCaseValide = document.getElementById("UpperCaseValide");
  const specialCharacterValide = document.getElementById("specialCharacterValide");
  const numberValide = document.getElementById("numberValide");
  const required = document.getElementById("required");

  // Validate password on button click
  validerButton.addEventListener("click", function () {
    const password = passwordInput.value;
    if (password.trim() === "") {
      alert("Veuillez entrer votre mot de passe")
      
      // required.style.display = "block";
      return;
    }
    else{
      // required.style.display = "none";
    }
    // PASSWORD LENGTH
    if (password.length < 8) {
      textValide.innerHTML = "&nbsp;&nbsp;au moins 8 caractères.";
      textValide.classList.remove("bi-check-circle");
      textValide.classList.add("bi-x-circle");
      textValide.style.color = "red";
    } else {
      textValide.innerHTML = "&nbsp;&nbsp;au moins 8 caractères.";
      textValide.classList.add("bi-check-circle");
      textValide.classList.remove("bi-x-circle");
      textValide.style.color = "green";
    }

    // UPPERCASE
    if (/[A-Z]/.test(password)) {
      UpperCaseValide.innerHTML = "&nbsp;&nbsp;Au moins une lettre majuscule.";
      UpperCaseValide.classList.add("bi-check-circle");
      UpperCaseValide.classList.remove("bi-x-circle");
      UpperCaseValide.style.color = "green";
    } else {
      UpperCaseValide.innerHTML = "&nbsp;&nbsp;Au moins une lettre majuscule.";
      UpperCaseValide.classList.remove("bi-check-circle");
      UpperCaseValide.classList.add("bi-x-circle");
      UpperCaseValide.style.color = "red";
    }

    // SPECIAL CHARACTER
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      specialCharacterValide.innerHTML = "&nbsp;&nbsp;Au moins un caractère spécial.";
      specialCharacterValide.classList.add("bi-check-circle");
      specialCharacterValide.classList.remove("bi-x-circle");
      specialCharacterValide.style.color = "green";
    } else {
      specialCharacterValide.innerHTML = "&nbsp;&nbsp;Au moins un caractère spécial.";
      specialCharacterValide.classList.remove("bi-check-circle");
      specialCharacterValide.classList.add("bi-x-circle");
      specialCharacterValide.style.color = "red";
    }

    // NUMBER
    if (/\d/.test(password)) {
      numberValide.innerHTML = "&nbsp;&nbsp;Au moins un chiffre.";
      numberValide.classList.add("bi-check-circle");
      numberValide.classList.remove("bi-x-circle");
      numberValide.style.color = "green";
    } else {
      numberValide.innerHTML = "&nbsp;&nbsp;Au moins un chiffre.";
      numberValide.classList.remove("bi-check-circle");
      numberValide.classList.add("bi-x-circle");
      numberValide.style.color = "red";
    }
  });
});
