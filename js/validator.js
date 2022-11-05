import FormValidator from "./formValidator.js";

const fv = new FormValidator("#signUpForm");

function containsSpecialChars(str) {
  const specialChars = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}

function checkPassword(str) {
    var re = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;
    return re.test(str);
}

function checkConfirmPassword(str) {
  return document.getElementById("spassword").value == str
}

function validateLength(value, inputField) {
if (value.length < 5 || value.length > 10) {
  return {
    pass: false,
    error: "Username must be between 5 - 10 characters."
  };
} else if (containsSpecialChars(value)) {
  return {
    pass: false,
    error: "Username must not contain special characters or spaces."
  };
}

return {
  pass: true
};
}

function validateEmail(value, inputField) {
  if (!inputField.validity.valid) {
    return {
      pass: false,
      error: "Email is not valid."
    };
  }

  return {
    pass: true
  };
}

function validatePass(value, inputField) {
  if (checkPassword(value)) {
    return {
      pass: true
    };
  } else if (value.length < 6 || value.length > 12) {
    return {
      pass: false,
      error: "Username must be between 6 - 12 characters."
    };
  } else {
    return {
      pass: false,
      error: "Password should at least contain one uppercase letter, one lowercase letter, and a number."
    };
  }
}

function validateConfirmPass(value, inputField) {
  if (checkConfirmPassword(value)) {
    return {
      pass: true
    };
  } else {
    return {
      pass: false,
      error: "Password does not match."
    };
  }
}

fv.register("#sname", validateLength);
fv.register("#semail", validateEmail);
fv.register("#spassword", validatePass);
fv.register("#svpassword", validateConfirmPass);

window.fv = fv;
