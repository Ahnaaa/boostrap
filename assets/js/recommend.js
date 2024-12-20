// Shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Render a limited number of random products in a row
function renderProducts(products) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear current content

    // Shuffle the products and limit to 10
    const randomProducts = shuffleArray(products).slice(5, 9);

    randomProducts.forEach(product => {
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

// Load products and display randomly shuffled products
async function loadProducts() {
    try {
        const response = await fetch('products.json');
        const products = await response.json();

        // Render random products
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
