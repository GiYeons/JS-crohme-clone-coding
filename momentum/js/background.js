const imgs = ["1.png", "2.png", "3.png"];

const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImg}`;

document.body.appendChild(bgImage);
