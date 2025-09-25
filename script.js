// create constructor
function Products(img,discount,category,productName,describtion,currentPrice,originalPrice){
    this.img = img;
    this.discount = discount;
    this.category = category;
    this.productName = productName;
    this.describtion = describtion;
    this.currentPrice = currentPrice;
    this.originalPrice = originalPrice;
}
// to create a object to constructor
let product1 = new Products("still-life-tech-device.jpg","-25%","ELECTRONICS","Premium Wireless Headphones","High-fidelity sound with active noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.","$199.99","$149.99");
let product2 = new Products("watch.jpg","-15%","WEARABLES","Fitness Smart Watch","Track your health metrics, receive notifications, and monitor workouts with this advanced smartwatch affortable price.","$269.99","$229.99");
let product3 = new Products("coffeMaker.jpg","-30%","HOME APPLIANCES","Premium Coffee Maker","Brew barista-quality coffee at home with programmable settings and thermal carafe technology.","$129.99","$89.99");
let product4 = new Products("shoes.jpg","-20%","FOOTWEAR","Performance Running Shoes","Lightweight design with advanced cushioning and breathable mesh for maximum comfort during runs affortable price.","$119.99","$149.99");

let productDetails = [product1,product2,product3,product4];

// display values
for (let i of productDetails) {
    document.querySelector(".cards").insertAdjacentHTML("afterbegin", `<div class="card">
<div class="image" style = "background-image:url(${i.img})">
  <p class="discount">${i.discount}</p>
</div>
<p class="category">${i.category}</p>
<h2 class="productName">${i.productName}</h2>
<div class="descibtion">
  <p>${i.describtion}</p>
</div>
<div class="price">
  <h2 class="curPrice">${i.currentPrice}</h2>
  <h4 class="orgPrice">${i.originalPrice}</h4>
</div>
<div class="cartBtn">
  <button><i class="fa-solid fa-cart-shopping"></i> Add to cart</button>
  <i class="fa-regular fa-heart"></i>
</div>
</div>`);
}