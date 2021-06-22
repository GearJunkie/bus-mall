"use strict"

//------------------------global variables----------------------//

const productSelectorElem = document.getElementById("potential_products");
const left_productElem = document.getElementById("left_product");
const middle_productElem = document.getElementById("middle_product");
const right_productElem = document.getElementById("right_product");
const leftImgElem = document.getElementById("left_product_img");
const leftH2Elem = document.getElementById("left_product_h2");
const middleImgElem = document.getElementById("middle_product_img");
const middleH2Elem = document.getElementById("middle_product_h2");
const rightImgElem = document.getElementById("right_product_img");
const rightH2Elem = document.getElementById("right_product_h2");
const resultsUlElem = document.getElementById("consumer_results");
let voteCounter = 0;
let timesShownCounter = 0;
Products.potentialProducts = [];
let leftProduct = null;
let middleProduct = null;
let rightProduct = null;



//-------------------constructor function------------------------//

function Products(name, image) {
  this.name = name;
  this.image = image;
  this.timesShown = 0;
  this.votes = 0;

  Products.potentialProducts.push(this);
}

//---------------------prototype methods------------------------//

Products.prototype.renderSingleProduct = function(imgPosition, h2Position) {
  imgPosition.src = this.image;
  imgPosition.alt = `this is a picture of a ${this.name}`;
  h2Position.textContent = this.name;
  this.timesShown++;
}

//---------------------global functions------------------------//

function pickThreeProducts() {
  let leftProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
  leftProduct = Products.potentialProducts[leftProductIndex];
  let middleProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
  middleProduct = Products.potentialProducts[middleProductIndex];

  while (middleProductIndex === leftProductIndex || middleProductIndex === null) {
    middleProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
    middleProduct = Products.potentialProducts[middleProductIndex];
  }
  
  let rightProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
  rightProduct = Products.potentialProducts[rightProductIndex];
  
  while (rightProductIndex === leftProductIndex || middleProductIndex === rightProductIndex || rightProductIndex === null) {
  rightProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
  }

  leftProduct.renderSingleProduct(leftImgElem, leftH2Elem);
  middleProduct.renderSingleProduct(middleImgElem, middleH2Elem);
  rightProduct.renderSingleProduct(rightImgElem, rightH2Elem);
}

function renderResults() {
  resultsUlElem.innerHTML = "";

  for (let product of Products.potentialProducts) {
    let liElem = document.createElement("li");
    liElem.textContent = `${product.name}: ${product.votes}`;
    resultsUlElem.appendChild(liElem);
  }
}

function productClick(event) {
  let id = event.target.id;
  if (voteCounter === 25) {
    renderResults();
    return
  }
  if (id === "left_product_img" || id === "middle_product_img" || id === "right_product_img") {
    voteCounter++;
    if (id === "left_product_img") {
      leftProduct.votes++;
    } else if (id === "right_product_img") {
      rightProduct.votes++;
    } else {
      middleProduct.votes++;
    } 
    pickThreeProducts();
  } else {
    alert("try again");
  }
}

//--------------------------event listner-------------------------------//

// productSelectorElem.addEventListener("click", productClick);
left_productElem.addEventListener("click", productClick)
middle_productElem.addEventListener("click", productClick);
right_productElem.addEventListener("click", productClick);

//------------------------call functions-----------------------------//

new Products("bag", "./images/bag.jpg");
new Products("banana", "./images/banana.jpg");
new Products("bathroom", "./images/bathroom.jpg");
new Products("boots", "./images/boots.jpg");
new Products("breakfast", "./images/breakfast.jpg");
new Products("bubblegum", "./images/bubblegum.jpg");
new Products("chair", "./images/chair.jpg");
new Products("cthulhu", "./images/cthulhu.jpg");
new Products("dog-duck", "./images/dog-duck.jpg");
new Products("dragon", "./images/dragon.jpg");
new Products("pen", "./images/pen.jpg");
new Products("pet-sweep", "./images/pet-sweep.jpg");
new Products("scissors", "./images/scissors.jpg");
new Products("shark", "./images/shark.jpg");
new Products("sweep", "./images/sweep.png");
new Products("tauntaun", "./images/tauntaun.jpg");
new Products("unicorn", "./images/unicorn.jpg");
new Products("water-can", "./images/water-can.jpg");
new Products("wine-glass", "./images/wine-glass.jpg");

pickThreeProducts();