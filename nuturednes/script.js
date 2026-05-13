

// make testimonial card active on mouse over and deactivate the default active card and on mouse leave, make the default active card active again and deactivate the hovered card
const testimonialCards = document.querySelectorAll(".testimonial-card");
const defaultActiveCard = document.querySelector(".testimonial-card.active");


testimonialCards.forEach(card => {
  card.addEventListener("mouseover", () => {
    if (defaultActiveCard) {
      defaultActiveCard.classList.remove("active");
      const starElement = card.querySelector(".stars");
      const quoteElement = card.querySelector(".quote");
      starElement.style.color = "#fff";
      quoteElement.style.color = "#fff"; 
    }
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
    if (defaultActiveCard) {
      defaultActiveCard.classList.add("active");
      const starElement = card.querySelector(".stars");
      const quoteElement = card.querySelector(".quote");
      starElement.style.color = "#8a9b7a";
      quoteElement.style.color = "#8a9b7a";
    }
  });
});
