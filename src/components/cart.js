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

    increaseQuantity(productId) {
        if (this.cart[productId]) {
            this.cart[productId].quantity += 1;
            saveToStorage("cart", this.cart);
            this.render();
        }
    }

    decreaseQuantity(productId) {
        if (this.cart[productId] && this.cart[productId].quantity > 1) {
            this.cart[productId].quantity -= 1;
            saveToStorage("cart", this.cart);
            this.render();
        } else if (this.cart[productId] && this.cart[productId].quantity === 1) {
            this.removeItem(productId);
        }
    }

    removeItem(productId) {
        delete this.cart[productId];
        saveToStorage("cart", this.cart);
        this.render();
    }
    calculateTotal() {
        return Object.values(this.cart).reduce((total, item) => {
            return total + item.price * item.quantity;
        }, 0);
    }

    render() {
        const cartContainer = $("#cart-container");
        cartContainer.innerHTML = "";

        Object.entries(this.cart).forEach(([id, item]) => {
            const row = createElement("div", { class: "cart-item" }, [
               
                createElement("span", { class: "cart-item-name" }, [`${item.name} - $${item.price}`]),

               
                createElement("div", { class: "cart-actions" }, [
                    createElement("button", { onClick: () => this.decreaseQuantity(id) }, ["-"]),
                    createElement("span", { class: "cart-qty" }, [`${item.quantity}`]), // Display quantity
                    createElement("button", { onClick: () => this.increaseQuantity(id) }, ["+"]),
                ]),

             
                createElement("button", { onClick: () => this.removeItem(id), class: "cart-remove-btn" }, ["Remove"]),
            ]);

            cartContainer.appendChild(row);
        });

        const totalAmount = this.calculateTotal();
        const totalRow = createElement("div", { class: "cart-total" }, [
            `Total: $${totalAmount.toFixed(2)}`,
        ]);
        cartContainer.appendChild(totalRow);
    }
}
