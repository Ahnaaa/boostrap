
  //fetch prodcut
  function filterProducts(category, products) {
        const productList = document.getElementById('product-list');
        productList.innerHTML = ''; // Clear current products
      
        const filteredProducts = category === 'all' ? products : products.filter(p => p.category === category);
      
        renderProducts(filteredProducts);
      }
      
      // Update Event Listener
      document.querySelectorAll('.category-item').forEach(item => {
        item.addEventListener('click', function () {
          document.querySelectorAll('.category-item').forEach(i => i.classList.remove('active'));
          item.classList.add('active');
      
          const category = item.getAttribute('data-category');
          filterProducts(category, products); // Pass the loaded products
        });
      });
      
      let products = [];
      async function loadProducts() {
        try {
          const response = await fetch('products.json');
          products = await response.json();
          filterProducts('all', products); // Load all products initially
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      }
      loadProducts();
      
      
        function renderProducts(products){
          const productList = document.getElementById('product-list');
          productList.innerHTML= ' ';
      
          products.forEach(product => {
            const productCard = `
              <div class="col-lg-3 col-md-4 col-sm-6 d-flex align-items-stretch py-3" id="item1">
              <div class="card w-100 border-0 bg-light " data-category="clothing">
             <a class="nav-link" href="productDetail.html?id=${product.id}"><img src="${product.image}" class="img-fluid" alt="Minimalist Wallet"> </a>
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
        loadProducts();
    