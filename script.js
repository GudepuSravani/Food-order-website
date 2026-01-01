let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  displayCart();
}

function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";

  cart.forEach(cartItem => {
    const li = document.createElement("li");
    li.textContent = `${cartItem.item} - ₹${cartItem.price}`;
    cartList.appendChild(li);
  });

  document.getElementById("total").textContent = `Total: ₹${total}`;
}

document.getElementById("order-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert(`Order placed successfully!\nTotal Amount: ₹${total}`);
    // Reset cart
    cart = [];
    total = 0;
    displayCart();
  }
});