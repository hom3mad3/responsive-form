var email = document.getElementById("email");

email.addEventListener("keyup", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("muss eine gültige email sein!");
  } else {
    email.setCustomValidity("");
  }
});

var list = document.getElementsByTagName("input")[0]
