let cart = {};

function addToCart(product, price) {
  if (cart[product]) {
    cart[product].quantity += 1;
    cart[product].total = cart[product].quantity * price;
  } else {
    cart[product] = { price: price, quantity: 1, total: price };
  }
  renderCart();
}

function renderCart() {
  let cartTable = document.getElementById("cart-items");
  cartTable.innerHTML = "";
  let grandTotal = 0;

  for (let item in cart) {
    let row = `<tr>
      <td>${item}</td>
      <td>₹${cart[item].price}</td>
      <td>${cart[item].quantity}</td>
      <td>₹${cart[item].total}</td>
    </tr>`;
    cartTable.innerHTML += row;
    grandTotal += cart[item].total;
  }

  document.getElementById("grand-total").innerText = "Grand Total: ₹" + grandTotal;
}
