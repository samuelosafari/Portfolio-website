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

//selecting elements

const reviews = [
  {
    img: "assets/dapoabideen.jpg",
    name: "Habimana Jean",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    address: "Kirehe, Rwanda",
  },
  {
    img: "assets/oldman.jpg",
    name: "Karara Salomon",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    address: "Mukarange, Kayonza",
  },
  {
    img: "assets/smilingcustomer.jpg",
    name: "Uwera Claire",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    address: "Kimihurura, Kigali",
  },
];

let image = document.getElementById("person-img");
let text = document.getElementById("testimonial-text");
let personName = document.getElementById("person-name");
let personAddress = document.getElementById("person-address");
let prevBtn = document.getElementById("prev-btn");
let nextBtn = document.getElementById("next-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

let showPerson = (person) => {
  let items = reviews[person];
  image.src = items.img;
  text.textContent = items.text;
  personName.textContent = items.name;
  personAddress.textContent = items.address;
};

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
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
let form = document.getElementById("form");
let userName = document.getElementById("name");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");
let errMessage = document.getElementsByClassName("err");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userName.value.trim() === "") {
    errMessage[0].innerHTML = "name cannot be blank";
  } else {
    errMessage[0].innerHTML = "";
  }
  if (email.value.trim() === "") {
    errMessage[1].innerHTML = "Email cannot be blank";
  } else {
    errMessage[1].innerHTML = "";
  }
  if (subject.value.trim() === "") {
    errMessage[2].innerHTML = "Subject cannot be blank";
  } else {
    errMessage[2].innerHTML = "";
  }
  if (message.value.trim() === "") {
    errMessage[3].innerHTML = "Message cannot be blank";
  } else {
    errMessage[3].innerHTML = "";
  }
});
