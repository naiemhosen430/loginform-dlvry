// for email -------------------------------------------------------------------------
const idname = document.getElementById("email-field");
const email = document.getElementById("email");

const showlabel = () => {
  const placeholderValue = email.placeholder;

  if (document.activeElement === email) {
    idname.innerHTML = placeholderValue;
    email.placeholder = "";
  } else {
    idname.innerHTML = "";
    email.placeholder = "Email address*";
  }
};

idname.addEventListener("click", showlabel);
email.addEventListener("focus", showlabel);
email.addEventListener("blur", showlabel);

// for password -------------------------------------------------------------------------

const passwordfield = document.getElementById("password-field");
const password = document.getElementById("password");

const showpassword = () => {
  const placeholderValuepassword = password.placeholder;

  if (document.activeElement === password) {
    passwordfield.innerHTML = placeholderValuepassword;
    password.placeholder = "";
  } else {
    passwordfield.innerHTML = "";
    password.placeholder = "Password*";
  }
};

passwordfield.addEventListener("click", showpassword);
password.addEventListener("focus", showpassword);
password.addEventListener("blur", showpassword);

// for login -------------------------------------------------------------------------
const login = document.getElementById("loginbtn");

const loginfonc = () => {
  const emailvalue = email.value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailvalue)) {
    document.getElementById("errormsg").innerHTML =
      "Please enter a valid email address!";
  } else {
    document.getElementById("errormsg").innerHTML = "";
  }

  const passwordvalue = password.value;
};

login.addEventListener("click", loginfonc);

// for login -------------------------------------------------------------------------
function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var passwordToggleIcon = document.getElementById("password-toggle-icon");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggleIcon.classList.remove("fa-eye");
    passwordToggleIcon.classList.add("fa-eye-slash");
  } else {
    passwordInput.type = "password";
    passwordToggleIcon.classList.remove("fa-eye-slash");
    passwordToggleIcon.classList.add("fa-eye");
  }
}
