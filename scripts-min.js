var textField = document.getElementById("textfield");
var textFieldError = document.getElementById("textfield-error");
var textArea = document.getElementById("textarea");
var textAreaError = document.getElementById("textarea-error");
var select = document.getElementById("select");
var selectError = document.getElementById("select-error");
var radio = document.getElementsByClassName("radio");
var radioError = document.getElementById("radio-error");
var checkbox = document.getElementsByClassName("checkbox");
var checkboxError = document.getElementById("checkbox-error");

document.onkeyup = function() {
  if (textField.value.length !== 0) {
    textField.classList.remove("field-error");
    textFieldError.style.display = "none";
  }

  if (textArea.value.length !== 0) {
    textArea.classList.remove("field-error");
    textAreaError.style.display = "none";
  }
};

select.onchange = function() {
  if (select.value) {
    select.classList.remove("field-error");
    selectError.style.display = "none";
  }
};

for (i = 0; i < radio.length; ++i) {
  radio[i].onclick = function() {
    if (radio[i].value) {
      radioError.style.display = "none";
    }
  };
}

for (i = 0; i < checkbox.length; ++i) {
  checkbox[i].onclick = function() {
    if (checkbox[i].value) {
      checkboxError.style.display = "none";
    }
  };
}

function validateTextField() {
  if (textField.value == "") {
    textField.classList.add("field-error");
    textFieldError.style.display = "block";
    return true;
  }
}

function validateTextArea() {
  if (textArea.value == "") {
    textArea.classList.add("field-error");
    textAreaError.style.display = "block";
    return true;
  }
}

function validateSelect() {
  if (select.value == "") {
    select.classList.add("field-error");
    selectError.style.display = "block";
    return true;
  }
}

function validateRadio() {
  for (i = 0; i < radio.length; ++i) {
    if (radio[i].checked) {
      return false;
    } else {
      radioError.style.display = "block";
      return true;
    }
  }
}

function validateCheckbox() {
  for (i = 0; i < checkbox.length; ++i) {
    if (checkbox[i].checked) {
      return false;
    } else {
      checkboxError.style.display = "block";
      return true;
    }
  }
}

function globalValidate() {
  validateTextField();
  validateTextArea();
  validateSelect();
  validateRadio();
  validateCheckbox();

  if (
    validateTextField() ||
    validateTextArea() ||
    validateSelect() ||
    validateRadio() ||
    validateCheckbox()
  ) {
    document.getElementById("globalError").style.display = "block";
    setTimeout(function() {
      document.getElementById("globalError").style.display = "none";
    }, 5000);
    return false;
  } else {
    alert("All fields are properly filled out and validated.");
  }
}

// function startsTyping(event) {
//   if (event.target.value.length === 0) {
//     event.target.nextElementSibling.style.display = "none";
//   }

// }

// const inputs = document.querySelectorAll("input, textarea, select");
// [...inputs].forEach(input => {
//   input.addEventListener("focusout", onFocusOut);
//   input.addEventListener("keyup", startsTyping);
// });

// function onFocusOut(event) {
//   inlineValidate(event.target);
// }

// function inlineValidate(input) {
//   if (input.value == "") {
//     input.classList.add("field-error");
//     input.nextElementSibling.style.display = "block";
//     return false;
//   }
//   return true;
// }

// function globalValidate() {
//   const inputs = document.querySelectorAll("input, textarea, select");
//   const error = [...inputs].reduce((error, currentValue) => {
//     const inputError = !inlineValidate(currentValue);
//     return error || inputError;
//   }, false);

//   if (error) {
//     document.getElementById("globalError").style.display = "block";
//     setTimeout(function() {
//       document.getElementById("globalError").style.display = "none";
//     }, 4200);
//     return false;
//   } else {
//     alert("All is well!");
//   }
// }
