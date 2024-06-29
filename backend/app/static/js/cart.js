// cart.js

document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();

    const checkoutButton = document.getElementById('checkout');
    checkoutButton.addEventListener('click', checkout);
});

function loadCartItems() {
    const cartItems = document.getElementById('cart-items');
    // Fetch cart items from the server or local storage (mock data here)
    const items = [
        { id: 1, name: 'Modern Sofa', price: 150, quantity: 1 },
        { id: 2, name: 'Dining Table', price: 100, quantity: 2 },
        // Add more items as needed
    ];

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <p>Quantity: ${item.quantity}</p>
        `;
        cartItems.appendChild(div);
    });
}

function checkout() {
    // Process checkout and redirect to payment page
    window.location.href = 'payment.html';
}
