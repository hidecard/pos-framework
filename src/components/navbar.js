import { $ } from "../core/dom.js";

export class Navbar {
    constructor(cart) {
        this.cart = cart;
    }

    render() {
        const navbar = document.createElement("nav");
        navbar.className = "navbar";

        const logo = document.createElement("div");
        logo.className = "navbar-logo";
        logo.innerText = "POS Framework";

        this.cartButton = document.createElement("button");
        this.cartButton.className = "navbar-cart";
        this.cartButton.innerText = `Cart (${Object.keys(this.cart.cart).length})`;

        this.cartButton.addEventListener("click", () => {
            const cartContainer = $("#cart-container");
            cartContainer.scrollIntoView({ behavior: "smooth" });
        });

        navbar.appendChild(logo);
        navbar.appendChild(this.cartButton);

        document.body.prepend(navbar);
    }

    updateCartCount() {
        this.cartButton.innerText = `Cart (${Object.keys(this.cart.cart).length})`;
    }
}
