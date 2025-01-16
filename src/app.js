import { Cart } from "./components/cart.js";
import { ProductList } from "./components/products.js";
import { Navbar } from "./components/navbar.js";

// Sample product data
const products = [
    { id: "1", name: "Product A", price: 10 },
    { id: "2", name: "Product B", price: 20 },
];

// Initialize cart
const cart = new Cart();

// Initialize components
const productList = new ProductList(products, cart);
const navbar = new Navbar(cart);


// Render components
navbar.render();
productList.render();
cart.render();
