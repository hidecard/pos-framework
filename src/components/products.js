import { $, createElement } from "../core/dom.js";

export class ProductList {
    constructor(products, cart) {
        this.products = products;
        this.cart = cart;
    }

    render() {
        const productContainer = $("#product-container");
        productContainer.innerHTML = "";

        this.products.forEach((product) => {
            const card = createElement("div", { class: "product-card" }, [
                createElement("h3", {}, [product.name]),
                createElement("p", {}, [product.price]),
                createElement("button", { onClick: () => this.cart.addItem(product.id, product) }, ["Add to Cart"]),
            ]);
            productContainer.appendChild(card);
        });
    }
}
