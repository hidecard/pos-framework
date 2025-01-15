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

        const cartButton = document.createElement("button");
        cartButton.className = "navbar-cart";
        cartButton.innerText = `Cart (${Object.keys(this.cart.cart).length})`;
        cartButton.addEventListener("click", () => {
            const cartContainer = $("#cart-container");
            cartContainer.scrollIntoView({ behavior: "smooth" });
        });

        navbar.appendChild(logo);
        navbar.appendChild(cartButton);

        document.body.prepend(navbar);
    }
}
