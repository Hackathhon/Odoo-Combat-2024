// furniture.js

document.addEventListener('DOMContentLoaded', () => {
    loadFurnitureList();

    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', filterFurniture);

    const priceRange = document.getElementById('price-range');
    priceRange.addEventListener('input', filterFurniture);

    const categorySelect = document.getElementById('category');
    categorySelect.addEventListener('change', filterFurniture);
});

let furnitureItems = [
    { id: 1, name: 'Modern Sofa', price: 150, category: 'sofas', image: 'sofa.jpg' },
    { id: 2, name: 'Dining Table', price: 100, category: 'tables', image: 'table.jpg' },
    // Add more items as needed
];

function loadFurnitureList() {
    const furnitureList = document.getElementById('furniture-list');
    furnitureList.innerHTML = '';

    furnitureItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'furniture-item';
        div.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="viewItem(${item.id})">View</button>
        `;
        furnitureList.appendChild(div);
    });
}

function filterFurniture() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const priceValue = document.getElementById('price-range').value;
    const categoryValue = document.getElementById('category').value;

    const filteredItems = furnitureItems.filter(item => {
        return item.name.toLowerCase().includes(searchValue) &&
            item.price <= priceValue &&
            (categoryValue === 'all' || item.category === categoryValue);
    });

    displayFurniture(filteredItems);
}

function displayFurniture(items) {
    const furnitureList = document.getElementById('furniture-list');
    furnitureList.innerHTML = '';

    items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'furniture-item';
        div.innerHTML = `
            <img src="images/${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Price: $${item.price}</p>
            <button onclick="viewItem(${item.id})">View</button>
        `;
        furnitureList.appendChild(div);
    });
}

function viewItem(id) {
    // Redirect to furniture_item.html with the item id
    window.location.href = `furniture_item.html?id=${id}`;
}
