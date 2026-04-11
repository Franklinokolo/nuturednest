const image = document.getElementById("serviceImage");

const items = {
  headingOne: './service.png',
  headingTwo: './service2.png',
  headingThree: './service.png',
  headingFour: './logo.png'
};

Object.keys(items).forEach(id => {
  const el = document.getElementById(id);

  if (el) {
    el.addEventListener("click", () => {
      console.log(`${id} clicked`);
      image.src = items[id];
    });
  }
});



// to change the icon of the accordion when it is clicked
// const accordionButtons = document.querySelectorAll(".accordion-button");

// accordionButtons.forEach(button => {
//   button.addEventListener("click", () => {
//     const icon = button.querySelector(".accordion-icon");
//     if (icon) {
//       if (icon.classList.contains("bi-plus")) {
//         icon.classList.remove("bi-plus");
//         icon.classList.add("bi-dash");
//       } else {
//         icon.classList.remove("bi-dash");
//         icon.classList.add("bi-plus");
//       }
//     }
//   });
// })


// when the accordion is opened, change the icon to a dash and when it is closed, change it back to a plus
const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach(item => {
  item.addEventListener("show.bs.collapse", () => {
    const button = item.querySelector(".accordion-button");
    const icon = button.querySelector(".accordion-icon");
    if (icon) {
      icon.classList.remove("bi-plus");
      icon.classList.add("bi-dash");
      // change the color of the icon to red
      icon.style.color = "#8a9b7a";
      button.style.fontWeight = "normal";
    }
  });

  item.addEventListener("hide.bs.collapse", () => {
    const button = item.querySelector(".accordion-button");
    const icon = button.querySelector(".accordion-icon");
    if (icon) {
      icon.classList.remove("bi-dash");
      icon.classList.add("bi-plus");
      icon.style.color = "#fff";
      button.style.fontWeight = "bold";
    }
  });
});



// make testimonial card active on mouse over and deactivate the default active card and on mouse leave, make the default active card active again and deactivate the hovered card
const testimonialCards = document.querySelectorAll(".testimonial-card");
const defaultActiveCard = document.querySelector(".testimonial-card.active");

testimonialCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    if (defaultActiveCard) {
      defaultActiveCard.classList.remove("active");
    }
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
    if (defaultActiveCard) {
      defaultActiveCard.classList.add("active");
    }
  });
});
