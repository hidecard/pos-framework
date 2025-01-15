// Utility to select a single element
export const $ = (selector) => document.querySelector(selector);

// Utility to select all elements matching the selector
export const $$ = (selector) => document.querySelectorAll(selector);

// Function to create an element with optional attributes and children
export function createElement(tag, attributes = {}, children = []) {
    // Create the element
    const element = document.createElement(tag);

    // Set attributes or event listeners
    for (const key in attributes) {
        if (key.startsWith("on")) {
            // Adding event listeners for attributes starting with "on"
            element.addEventListener(key.slice(2).toLowerCase(), attributes[key]);
        } else {
            // Setting other attributes like class, id, etc.
            element.setAttribute(key, attributes[key]);
        }
    }

    // Append children if provided
    children.forEach((child) => {
        if (typeof child === "string") {
            // If the child is a string, convert it to a text node and append
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            // If the child is a DOM node, append directly
            element.appendChild(child);
        } else {
            // Log a warning if the child is neither a string nor a DOM node
            console.warn('Invalid child element:', child);
        }
    });

    return element;
}
