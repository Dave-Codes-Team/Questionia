function validation() {
  const { email, password } = document.Formfill;

  const savedUserEmail = document.cookie.match(/userEmail=([^;]*)/)[1];
  const savedUserPassword = document.cookie.match(/userPassword=([^;]*)/)[1];
  console.log(savedUserEmail);
  console.log(savedUserPassword);

  if (email.value == "") {
    document.getElementById("email-error").innerHTML = "ENTER EMAIL*";
    return false;
  } else if (email.value !== savedUserEmail) {
    document.getElementById("email-error").innerHTML = "USER DOES NOT EXIST";
    return false;
  } else if (password.value == "") {
    document.getElementById("password-error").innerHTML =
      "PASSWORD CANNOT BE EMPTY*";
    return false;
  } else if (password.value !== savedUserPassword) {
    document.getElementById("password-error").innerHTML = "INVALID PASSWORD";
    return false;
  } else if (
    document.getElementById("popup").classList.remove("show-validation")
  ) {
    return false;
  } else if (
    email.value === savedUserEmail &&
    password.value === savedUserPassword
  ) {
    document.getElementById("popup").classList.add("show-validation");
    setTimeout(() => {
      document.getElementById("popup").classList.remove("show-validation");
    }, 2000);
    return false;
  }
}

function closeSlide() {
  document.getElementById("popup").classList.add("closeslide");
  return false;
}
