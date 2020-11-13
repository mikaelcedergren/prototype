function check(form) {
  if (form.userid.value == "mikael" && form.pswrd.value == "password") {
    window.open("menu.html");
  } else {
    alert("Incorrect username or password.");
  }
}
