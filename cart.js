function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({ name, price });

  localStorage.setItem("cart", JSON.stringify(cart));

  // Redirect to cart page
  window.location.href = "cart.html";
}

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cartItems");
  let total = 0;

  cartItems.innerHTML = "";

  cart.forEach(item => {
    cartItems.innerHTML += `
      <p>${item.name} - ₹${item.price}</p>
    `;
    total += item.price;
  });

  document.getElementById("total").innerText = "Total: ₹" + total;
}

if (window.location.pathname.includes("cart.html")) {
  displayCart();
}
