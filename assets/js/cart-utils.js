// cart-utils.js
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
      cartIcon.innerText = `Cart (${cart.length})`;
    }
  }
  