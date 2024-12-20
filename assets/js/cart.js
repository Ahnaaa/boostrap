
  function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product); // Add product to cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save cart to localStorage

    // Update the cart count in the header
    updateCartCount();
    alert(`${product.title} has been added to your cart.`);
  }
  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    document.getElementById('cart-icon').innerText = `Cart (${cart.length})`;
  }