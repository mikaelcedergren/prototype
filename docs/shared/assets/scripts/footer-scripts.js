(function () {
  'use strict';

  window.onscroll = function () {
    [...document.querySelectorAll(".detect-top")].forEach((sticker) => {
      if (window.pageYOffset > 120) {
        sticker.classList.add("at-top");
      } else {
        sticker.classList.remove("at-top");
      }
    });
    [...document.querySelectorAll(".detect-top-wizard")].forEach(
      (wizardSticker) => {
        if (window.pageYOffset > 22) {
          wizardSticker.classList.add("at-top");
        } else {
          wizardSticker.classList.remove("at-top");
        }
      }
    );
  };

  const openEls = document.querySelectorAll("[data-open]");
  const closeEls = document.querySelectorAll("[data-close]");
  const isVisible = "is-visible";
  var body = document.body;

  for (const el of openEls) {
    el.addEventListener("click", function () {
      const modalId = this.dataset.open;
      document.getElementById(modalId).classList.add(isVisible);
      body.classList.add("turn-off-scroll");
    });
  }

  for (const el of closeEls) {
    el.addEventListener("click", function () {
      this.parentElement.parentElement.parentElement.classList.remove(isVisible);
      body.classList.remove("turn-off-scroll");
    });
  }

  document.addEventListener("click", (e) => {
    if (e.target == document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
      body.classList.remove("turn-off-scroll");
    }
  });

  document.addEventListener("keyup", (e) => {
    // if we press the ESC
    if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
      document.querySelector(".modal.is-visible").classList.remove(isVisible);
      body.classList.remove("turn-off-scroll");
    }
  });

}());
