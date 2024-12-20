// Render a limited number of products in a row
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear current content

    // Limit to 10 products
    const limitedProducts = products.slice(5, 13);

    limitedProducts.forEach(product => {
        const productCard = `
            <div class="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch py-3">
                <div class="card w-100 border-0 bg-light">
                    <a class="nav-link" href="productDetail.html?id=${product.id}">
                        <img src="${product.image}" class="img-fluid" alt="${product.title}">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title mb-1 lead">${product.title}</h5>
                        <p class="card-text">$${product.price.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        `;
        productList.insertAdjacentHTML('beforeend', productCard);
    });
}

// Load products and display only the first 10
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();

        // Render only the first 10 products
        renderProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);

        // Display error message
        const productList = document.getElementById('product-list');
        productList.innerHTML = `<p class="text-danger">Failed to load products. Please try again later.</p>`;
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProducts);
