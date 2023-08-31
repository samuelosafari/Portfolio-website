let open = document.getElementById("open");
let close = document.getElementById("close");
let menu = document.getElementById("menu");

common = (x, y, z) => {
  x.addEventListener("click", () => {
    x.classList.toggle("hide");
    y.classList.toggle("hide");

    if (z == "slide-in") {
      menu.classList.toggle("slide");
    }

    if (z == "slide-out") {
      menu.classList.toggle("slide");
    }
  });
};

common(open, close, "slide-in");
common(close, open, "slide-out");

//dealing with modals

document.addEventListener("DOMContentLoaded", function () {
  const learnMoreButtons = document.querySelectorAll(".card p");

  function openModal(cardIndex) {
    const modalContainer = document.getElementById(
      `modal_container${cardIndex}`
    );
    const modal = modalContainer.querySelector(`#modal${cardIndex}`);
    modalContainer.classList.remove("hide");
    modal.classList.remove("hide");
  }

  function closeModal(cardIndex) {
    const modalContainer = document.getElementById(
      `modal_container${cardIndex}`
    );
    const modal = modalContainer.querySelector(`#modal${cardIndex}`);
    modalContainer.classList.add("hide");
    modal.classList.add("hide");
  }

  learnMoreButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      openModal(index + 1); // Card index is 1-based
    });
  });

  // Close button event listeners for each modal
  for (let i = 1; i <= 4; i++) {
    const closeButton = document.getElementById(`close${i}`);
    if (closeButton) {
      closeButton.addEventListener("click", function () {
        closeModal(i);
      });
    }
  }
});
