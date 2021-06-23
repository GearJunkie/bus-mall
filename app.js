"use strict"

//------------------------global variables----------------------//

const productSelectorElem = document.getElementById("potential_products");
// const left_productElem = document.getElementById("left_product");
const leftImgElem = document.getElementById("left_product_img");
const leftH2Elem = document.getElementById("left_product_h2");
// const middle_productElem = document.getElementById("middle_product");
const middleImgElem = document.getElementById("middle_product_img");
const middleH2Elem = document.getElementById("middle_product_h2");
// const right_productElem = document.getElementById("right_product");
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

function Products(name, image, timesShown, votes) {
  this.name = name;
  this.image = image;
  this.timesShown = timesShown;
  this.votes = votes;

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
  let preventPxProducts = [leftProduct, middleProduct, rightProduct];
  while (preventPxProducts.includes(leftProduct)) {
  let leftProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
  leftProduct = Products.potentialProducts[leftProductIndex];
  }

  while (middleProduct === rightProduct || middleProduct === leftProduct || preventPxProducts.includes(middleProduct)) {
    let middleProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
    middleProduct = Products.potentialProducts[middleProductIndex];
  }
  
  while (rightProduct === leftProduct || rightProduct === middleProduct || preventPxProducts.includes(rightProduct)) {
  let rightProductIndex = Math.floor(Math.random() * Products.potentialProducts.length);
  rightProduct = Products.potentialProducts[rightProductIndex];
  }

  leftProduct.renderSingleProduct(leftImgElem, leftH2Elem);
  middleProduct.renderSingleProduct(middleImgElem, middleH2Elem);
  rightProduct.renderSingleProduct(rightImgElem, rightH2Elem);
}

// function renderResults() {
//   resultsUlElem.innerHTML = "";

//   for (let product of Products.potentialProducts) {
//     let liElem = document.createElement("li");
//     liElem.textContent = `${product.name}: ${product.votes}`;
//     resultsUlElem.appendChild(liElem);
//   }
// }

function productClick(event) {
  let id = event.target.id;
  if (voteCounter === 25) {
    // renderResults();
    addProductChart();
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
    storeProducts();
  } else {
    alert("try again");
  }
}

function addProductChart() {
  const productNamesArray = [];
  const productVotesArray = [];
  const productShownArray = [];

  for (let product of Products.potentialProducts) {
    productNamesArray.push(product.name);
    productVotesArray.push(product.votes);
    productShownArray.push(product.timesShown);
  }

  const ctx = document.getElementById('productChart').getContext('2d');
  
  const productChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: productNamesArray,
          datasets: [{
              label: '# of Votes',
              data: productVotesArray,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

              ],
              borderColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

              ],
              borderWidth: 1
            }, {
              label: "# of Times Shown",
              data: productShownArray,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',

            ],
            borderColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
            ],
            borderWidth: 1
        }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });

}

function storeProducts() {
  let stringifiedProducts = JSON.stringify(Products.potentialProducts);
  localStorage.setItem("resultedProducts", stringifiedProducts);
}

function retrieveProducts() {
  let possibleProducts = localStorage.getItem("resultedProducts");
  if (possibleProducts) {
    let parsedProducts = JSON.parse(possibleProducts);
    console.log(parsedProducts);
    for (let resultedProducts of parsedProducts) {
      console.log(resultedProducts);
      let name = resultedProducts.name;
      let image = resultedProducts.image;
      let timesShown = resultedProducts.timesShown;
      let votes = resultedProducts.votes;
      new Products(name, image, timesShown, votes);

      //------is the above function the correct one to invoke ?------//
    }
  }
}
//--------------------------event listner-------------------------------//

productSelectorElem.addEventListener("click", productClick);


//------------------------call functions-----------------------------//

retrieveProducts();

if (Products.potentialProducts.length < 1) {
new Products("bag", "./images/bag.jpg", 0, 0);
new Products("banana", "./images/banana.jpg", 0, 0);
new Products("bathroom", "./images/bathroom.jpg", 0, 0);
new Products("boots", "./images/boots.jpg", 0, 0);
new Products("breakfast", "./images/breakfast.jpg", 0, 0);
new Products("bubblegum", "./images/bubblegum.jpg", 0, 0);
new Products("chair", "./images/chair.jpg", 0, 0);
new Products("cthulhu", "./images/cthulhu.jpg", 0, 0);
new Products("dog-duck", "./images/dog-duck.jpg", 0, 0);
new Products("dragon", "./images/dragon.jpg", 0, 0);
new Products("pen", "./images/pen.jpg", 0, 0);
new Products("pet-sweep", "./images/pet-sweep.jpg", 0, 0);
new Products("scissors", "./images/scissors.jpg", 0, 0);
new Products("shark", "./images/shark.jpg", 0, 0);
new Products("sweep", "./images/sweep.png", 0, 0);
new Products("tauntaun", "./images/tauntaun.jpg", 0, 0);
new Products("unicorn", "./images/unicorn.jpg", 0, 0);
new Products("water-can", "./images/water-can.jpg", 0, 0);
new Products("wine-glass", "./images/wine-glass.jpg", 0, 0);
}

pickThreeProducts();
