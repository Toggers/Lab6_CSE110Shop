// Script.js
var src;
var alt;
var title;
var price;
var id;
var cartText;

var count = document.getElementById("cart-count");

window.addEventListener('DOMContentLoaded', () => {
  fetch('http://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
      localStorage.setItem("foo", JSON.stringify(data));
    });

  if (localStorage.getItem("count") == null) {
    count.innerHTML = "0";
  } else {
    count.innerHTML = localStorage.getItem("count");
  }

  var data = JSON.parse(localStorage.getItem("foo"));
  for (var i = 0; i < data.length; i++) {
    src = data[i].image;
    alt = data[i].title;
    title = data[i].title;
    price = data[i].price;
    myID = data[i].id;

    if (localStorage.getItem(data[i].id) == null) {
      cartText = "Add to Cart";
      // console.log("hi");
      //console.log(productItem);
      // productItem.lastChild.innerHTML = "Add to Cart";
    } else {
      cartText = "Remove from Cart";
      // console.log("bye");
      // productItem.lastChild.innerHTML = "Remove from Cart";
    }

    var productItem = document.createElement("product-item");
      
    document.getElementById("product-list").appendChild(productItem);
  }
});

function cartButton(e) {
  var selectedProduct = e.parentElement;

  if (e.innerHTML == "Add to Cart") {
    alert('Added to Cart!');
    count.innerHTML = parseInt(count.innerHTML) + 1;
    e.innerHTML = "Remove from Cart";

    localStorage.setItem(selectedProduct.id, selectedProduct.id);
    localStorage.setItem("count", count.innerHTML);
  } else {
    count.innerHTML = parseInt(count.innerHTML) - 1;
    e.innerHTML = "Add to Cart";

    localStorage.removeItem(selectedProduct.id);
    localStorage.setItem("count", count.innerHTML);
  }
}
