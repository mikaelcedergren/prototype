function check(form) {
  if (form.userid.value == "mikael" && form.pswrd.value == "ringmuskel") {
    window.open("menu.html");
  } else {
    alert("Incorrect username or password.");
  }
}
