import { $, createElement } from "../core/dom.js";
import { saveToStorage, getFromStorage } from "../core/storage.js";

export class Cart {
    constructor() {
        this.cart = getFromStorage("cart") || {};
    }

    addItem(productId, product) {
        if (this.cart[productId]) {
            this.cart[productId].quantity += 1;
        } else {
            this.cart[productId] = { ...product, quantity: 1 };
        }
        saveToStorage("cart", this.cart);
        this.render();
    }

    removeItem(productId) {
        delete this.cart[productId];
        saveToStorage("cart", this.cart);
        this.render();
    }

    render() {
        const cartContainer = $("#cart-container");
        cartContainer.innerHTML = "";

        Object.entries(this.cart).forEach(([id, item]) => {
            const row = createElement("div", { class: "cart-item" }, [
                `${item.name} - ${item.quantity} x ${item.price}`,
                createElement("button", { onClick: () => this.removeItem(id) }, ["Remove"]),
            ]);
            cartContainer.appendChild(row);
        });
    }
}
