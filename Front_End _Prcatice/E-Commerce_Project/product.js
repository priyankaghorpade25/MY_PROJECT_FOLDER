document.addEventListener("DOMContentLoaded", function () {
    class Product {
        constructor(name, description, price, image) {
            this.name = name;
            this.description = description;
            this.price = price;
            this.image = image;
        }

        display = () => {
            return `<div class="card h-100">
                <img src="${this.image}" class="card-img-top" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <p class="card-text font-weight-bold">$${this.price.toFixed(2)}</p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>`;
        };
    }

    class DiscountProduct extends Product {
        constructor(name, description, price, image, discount) {
            super(name, description, price, image);
            this.discount = discount;
        }

        display = () => {
            const discountedPrice = this.price - (this.discount * this.price) / 100;
            return `<div class="card h-100">
                <img src="${this.image}" class="card-img-top" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.description}</p>
                    <p class="card-text font-weight-bold">$${discountedPrice.toFixed(2)}
                    <span class="text-danger">${this.discount}% OFF</span></p>
                    <a href="#" class="btn btn-primary">Add to Cart</a>
                </div>
            </div>`;
        };
    }

    const displayProducts = (products) => {
        const productList = document.getElementById("pro-container");
        productList.innerHTML = "";
        products.forEach((prod) => {
            const card = document.createElement("div");
            card.classList.add("col-lg-3", "col-md-4", "col-sm-6", "mb-4");
            card.innerHTML = new Product(
                prod.name,
                prod.description,
                prod.price,
                prod.image
            ).display();
            productList.appendChild(card);
        });
    };

    const handleSearchQuery = () => {
        const searchText = document.getElementById("search").value.toLowerCase();
        const filteredProducts = window.products.filter((prod) =>
            prod.name.toLowerCase().includes(searchText) ||
            prod.description.toLowerCase().includes(searchText)
        );
        displayProducts(filteredProducts);
    };

    const applyFilter = () => {
        const selectRange = document.getElementById("option").value;
        let minPrice = 0,
            maxPrice = Infinity;

        if (selectRange !== "") {
            [minPrice, maxPrice] = selectRange.split("-").map(parseFloat);
        }

        const searchText = document.getElementById("search").value.toLowerCase();
        const filteredProducts = window.products.filter((prod) => {
            return (
                prod.price >= minPrice &&
                prod.price <= maxPrice &&
                (prod.name.toLowerCase().includes(searchText) ||
                    prod.description.toLowerCase().includes(searchText))
            );
        });
        displayProducts(filteredProducts);
    };

    // Fetch and Initialize Products
    fetch("products.json")
        .then((response) => {
            if (!response.ok) throw new Error("Failed to load products.");
            return response.json();
        })
        .then((data) => {
            window.products = data;
            displayProducts(data);

            // Add a discounted product for demonstration
            const discountedProduct = new DiscountProduct(
                "Special Offer Product",
                "This is a discounted product.",
                120.0,
                "image.jpg",
                30
            );
            document
                .getElementById("pro-container")
                .insertAdjacentHTML("beforeend", discountedProduct.display());
        })
        .catch((error) => {
            console.error("Error fetching products:", error);
            document.getElementById("error-message").textContent =
                "Failed to load products. Please try again.";
        });

    // Attach Event Listeners
    document.getElementById("search").addEventListener("input", handleSearchQuery);
    document.getElementById("option").addEventListener("change", applyFilter);
});
