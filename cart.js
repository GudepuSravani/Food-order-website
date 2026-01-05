function loadCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItemsDiv = document.getElementById("cart-items");
    let total = 0;

    cartItemsDiv.innerHTML = "";

    cart.forEach(item => {
        let div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `${item.name} - ₹${item.price}`;
        cartItemsDiv.appendChild(div);
        total += item.price;
    });

    document.getElementById("total-price").innerText =
        "Total Price: ₹" + total;
}

function clearCart() {
    localStorage.removeItem("cart");
    loadCart();
}

