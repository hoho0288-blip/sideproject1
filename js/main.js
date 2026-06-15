document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileToggle = document.getElementById("mobile-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      navMenu.classList.toggle("open");
      const icon = mobileToggle.querySelector("i");
      if (icon) {
        if (navMenu.classList.contains("open")) {
          icon.className = "ri-close-line";
        } else {
          icon.className = "ri-menu-line";
        }
      }
    });
  }

  // Persistent Cart Simulation
  let cartCount = parseInt(localStorage.getItem("soleVibeCartCount") || "0");
  const cartCountEl = document.getElementById("cart-count");
  if (cartCountEl) {
    cartCountEl.textContent = cartCount;
  }

  window.addToCart = function(productId, quantity = 1) {
    cartCount += quantity;
    localStorage.setItem("soleVibeCartCount", cartCount);
    if (cartCountEl) {
      cartCountEl.textContent = cartCount;
    }
    
    // Find product name for toast
    let productName = "商品";
    if (window.productDatabase) {
      const prod = window.productDatabase.find(p => p.id === productId);
      if (prod) productName = prod.name;
    }
    
    showToast(`已成功將 ${productName} 加入購物袋！`);
  };

  // Toast System
  const toast = document.createElement("div");
  toast.className = "toast-msg";
  document.body.appendChild(toast);

  function showToast(message) {
    toast.textContent = message;
    toast.style.display = "block";
    
    setTimeout(() => {
      toast.style.display = "none";
    }, 3000);
  }

  // Tab switching on Product page
  window.switchTab = function(tabId) {
    // Remove active from all titles
    document.querySelectorAll(".tab-title").forEach(el => el.classList.remove("active"));
    // Remove active from all panes
    document.querySelectorAll(".tab-pane").forEach(el => el.classList.remove("active"));

    // Add active to selected
    const selectedTitle = document.querySelector(`[onclick="switchTab('${tabId}')"]`);
    const selectedPane = document.getElementById(tabId);

    if (selectedTitle) selectedTitle.classList.add("active");
    if (selectedPane) selectedPane.classList.add("active");
  };

  // Dynamic Product Page Loader
  if (window.location.pathname.includes("product.html")) {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (productId && window.productDatabase) {
      const product = window.productDatabase.find(p => p.id === productId);
      if (product) {
        // Load details into page
        document.title = `${product.name} | SOLEVIBE ATELIER`;
        
        const nameEl = document.getElementById("p-name");
        const categoryEl = document.getElementById("p-category");
        const priceEl = document.getElementById("p-price");
        const descEl = document.getElementById("p-desc");
        const imgEl = document.getElementById("p-img");
        
        if (nameEl) nameEl.textContent = product.name;
        if (categoryEl) {
          categoryEl.textContent = product.categoryName;
          categoryEl.href = `${product.category}.html`;
        }
        if (priceEl) priceEl.textContent = `NT$ ${product.price.toLocaleString()}`;
        if (descEl) descEl.textContent = product.description;
        if (imgEl) {
          imgEl.src = product.image;
          imgEl.alt = product.name;
        }

        // Features list
        const featuresContainer = document.getElementById("features-list");
        if (featuresContainer && product.features) {
          featuresContainer.innerHTML = product.features.map(f => `<li>${f}</li>`).join("");
        }

        // Specs list
        const specsContainer = document.getElementById("specs-list");
        if (specsContainer && product.specs) {
          specsContainer.innerHTML = Object.entries(product.specs).map(([key, value]) => `
            <div class="spec-item">
              <span class="spec-label">${key}</span>
              <span class="spec-value">${value}</span>
            </div>
          `).join("");
        }

        // Setup Buy & Add buttons
        const buyBtn = document.getElementById("buy-now-btn");
        const addBtn = document.getElementById("add-cart-btn");
        const qtyInput = document.getElementById("qty-input");

        if (addBtn) {
          addBtn.addEventListener("click", () => {
            const qty = parseInt(qtyInput ? qtyInput.value : "1") || 1;
            addToCart(product.id, qty);
          });
        }

        if (buyBtn) {
          buyBtn.addEventListener("click", () => {
            const qty = parseInt(qtyInput ? qtyInput.value : "1") || 1;
            cartCount += qty;
            localStorage.setItem("soleVibeCartCount", cartCount);
            if (cartCountEl) cartCountEl.textContent = cartCount;
            showToast(`已成功購買 ${product.name}！正在前往結帳...`);
          });
        }
      } else {
        // Product not found
        const layout = document.querySelector(".product-detail-layout");
        if (layout) {
          layout.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 100px 0;">
            <h2 style="font-family: var(--font-serif); font-size: 28px; margin-bottom: 16px;">找不到該商品</h2>
            <p><a href="index.html" style="text-decoration: underline; color: var(--accent-color);">回到首頁</a></p>
          </div>`;
        }
      }
    }
  }

  // Dynamic Category Pages Loader
  const categoryPageMapping = {
    "running.html": "running",
    "casual.html": "casual",
    "lady.html": "lady",
    "hiking.html": "hiking"
  };

  const currentPath = window.location.pathname.split("/").pop();
  const targetCategory = categoryPageMapping[currentPath];

  if (targetCategory && window.productDatabase) {
    const categoryProducts = window.productDatabase.filter(p => p.category === targetCategory);
    const container = document.getElementById("category-products-grid");

    if (container) {
      container.innerHTML = categoryProducts.map(p => `
        <div class="product-card">
          <div class="product-img-wrapper">
            <img src="${p.image}" alt="${p.name}">
            <div class="product-actions">
              <a href="product.html?id=${p.id}" class="action-btn">查看詳情</a>
              <button onclick="addToCart('${p.id}')" class="action-btn">加入購物袋</button>
            </div>
          </div>
          <div class="product-info">
            <span class="product-cat">${p.categoryName}</span>
            <h3 class="product-name"><a href="product.html?id=${p.id}">${p.name}</a></h3>
            <div class="product-footer">
              <span class="product-price">NT$ ${p.price.toLocaleString()}</span>
              <div class="product-rating">
                <i class="ri-star-fill"></i>
                <span>${p.rating}</span>
                <span class="rating-count">(${p.reviews})</span>
              </div>
            </div>
          </div>
        </div>
      `).join("");
    }
  }
});
