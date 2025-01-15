import { Cart } from "./components/cart.js";
import { ProductList } from "./components/products.js";

const cart = new Cart();
const products = [
    { id: "1", name: "Product A", price: 10 },
    { id: "2", name: "Product B", price: 20 },
];

const productList = new ProductList(products, cart);
productList.render();
cart.render();
