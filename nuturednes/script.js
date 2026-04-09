const image = document.getElementById("serviceImage");

const items = {
  headingOne: './service.png',
  headingTwo: './logo.png',
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