function validation() {
  const { email, password, cpassword } = document.Formfill;
  const path = window.location.pathname;
  const userEmail = (document.cookie = `userEmail=${email.value}`);
  const userPassword = (document.cookie = `userPassword=${password.value}`);

  if (email.value == "") {
    document.getElementById("email-error").innerHTML = "Enter Email*";
    return false;
  } else if (password.value == "") {
    document.getElementById("password-error").innerHTML =
      "PASSWORD CANNOT BE EMPTY*";
    return false;
  } else if (password.value.length < 6) {
    document.getElementById("password-error").innerHTML =
      "PASSWORD MUST BE ABOVE SIX CHARACTERS*";
    return false;
  } else if (cpassword.value == "") {
    document.getElementById("cpassword-error").innerHTML =
      "PASSWORD CANNOT BE EMPTY*";
    return false;
  } else if (cpassword.value !== password.value) {
    document.getElementById("cpassword-error").innerHTML =
      "PASSWORD MISMATCHED*";
    return false;
  } else if (cpassword.value == password.value) {
    document.getElementById("popup").classList.add("show-validation");
    setTimeout(() => {
      window.location.replace("login.html");
      document.getElementById("popup").classList.remove("show-validation");
    }, 2000);
    return false;
  }

  if (document.getElementById("popup").classList.remove("show-validation")) {
  }
}

function closeSlide() {
  document.getElementById("popup").classList.add("closeslide");
  return false;
}
