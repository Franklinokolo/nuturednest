let item1 = document.getElementById("headingOne");
let item2 = document.getElementById("headingTwo");
let item3 = document.getElementById("headingThree");
let item4 = document.getElementById("headingFour");


let image  = document.getElementById("serviceImage");

item1.addEventListener("click", function() { 
    console.log("Heading One clicked");
    image.src = './service.png';
})

item2.addEventListener("click", function() { 
    console.log("Heading Two clicked");
    image.src = './logo.png';
})

item3.addEventListener("click", function() { 
    console.log("Heading Three clicked");
    image.src = './service.png';
})

item4.addEventListener("click", function() { 
    console.log("Heading Four clicked");
    image.src = './logo.png';
})

