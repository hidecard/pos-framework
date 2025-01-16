export const $ = (selector) => document.querySelector(selector);

export const $$ = (selector) => document.querySelectorAll(selector);

export function createElement(tag, attributes = {}, children = []) {
    const element = document.createElement(tag);

    for (const key in attributes) {
        if (key.startsWith("on")) {
            element.addEventListener(key.slice(2).toLowerCase(), attributes[key]);
        } else {
            element.setAttribute(key, attributes[key]);
        }
    }

    children.forEach((child) => {
        if (typeof child === "string") {
            element.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            element.appendChild(child);
        } else {
            console.warn('Invalid child element:', child);
        }
    });

    return element;
}
