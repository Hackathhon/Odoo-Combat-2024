// main.js

document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedFurniture();
});

function loadFeaturedFurniture() {
    const featuredFurniture = document.getElementById('featured-furniture');
    // Fetch featured furniture items from the server (mock data here)
    const items = [
        { id: 1, name: 'Modern Sofa', price: 150, image: 'sofa.jpg' },
        { id: 2, name: 'Dining Table', price: 100, image: 'table.jpg' },
        // Add more items as needed
    ];

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'furniture-item';
        div.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
        `;
        featuredFurniture.appendChild(div);
    });
}
