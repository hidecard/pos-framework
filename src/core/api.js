export async function fetchFromMySQL(endpoint, data) {
    const response = await fetch(`http://localhost/pos-system/api/${endpoint}.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    return await response.json();
}
