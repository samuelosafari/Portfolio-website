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

//carousel
document.addEventListener("DOMContentLoaded", function () {
  const testimonialContainer = document.querySelector(".media-container");
  const prevButton = document.querySelector(".previous-icon");
  const nextButton = document.querySelector(".next-icon");

  const testimonials = testimonialContainer.querySelectorAll(".media");

  let currentTestimonialIndex = 0;

  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
      testimonial.classList.toggle("active", i === index);
    });
  }

  prevButton.addEventListener("click", function () {
    currentTestimonialIndex =
      (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
  });

  nextButton.addEventListener("click", function () {
    currentTestimonialIndex =
      (currentTestimonialIndex + 1) % testimonials.length;
    showTestimonial(currentTestimonialIndex);
  });

  // Show the initial testimonial
  showTestimonial(currentTestimonialIndex);
});

//the portfolio project

document.addEventListener("DOMContentLoaded", () => {
  const pictures = document.querySelectorAll(".picture");

  pictures.forEach((picture) => {
    const img = picture.querySelector("img");
    const overlay = picture.querySelector(".overlay");

    picture.addEventListener("mouseover", () => {
      img.style.opacity = 0.7;
      overlay.style.opacity = 1;
    });

    picture.addEventListener("mouseout", () => {
      img.style.opacity = 1;
      overlay.style.opacity = 0;
    });
  });
});

//nav bar scrolled

window.addEventListener("scroll", function () {
  var header = document.querySelector(".header");
  if (window.scrollY > 0) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

//form validation
let contactForm = document.getElementById("contact-form");
let name = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let errMessage = document.getElementById("email-err");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (name.value === "") {
    errMessage.innerHTML = "cannot be blank";
  }
};
