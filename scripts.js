function startsTyping(event) {
  if (event.target.value.length === 0) {
    event.target.nextElementSibling.style.display = "none";
  }

}

const inputs = document.querySelectorAll("input, textarea, select");
[...inputs].forEach(input => {
  input.addEventListener("focusout", onFocusOut);
  input.addEventListener("keyup", startsTyping);
});

function onFocusOut(event) {
  inlineValidate(event.target);
}

function inlineValidate(input) {
  if (input.value == "") {
    input.classList.add("field-error");
    input.nextElementSibling.style.display = "block";
    return false;
  }
  return true;
}

function globalValidate() {
  const inputs = document.querySelectorAll("input, textarea, select");
  const error = [...inputs].reduce((error, currentValue) => {
    const inputError = !inlineValidate(currentValue);
    return error || inputError;
  }, false);

  if (error) {
    document.getElementById("globalError").style.display = "block";
    setTimeout(function() {
      document.getElementById("globalError").style.display = "none";
    }, 4200);
    return false;
  } else {
    alert("All is well!");
  }
}
