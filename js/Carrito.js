function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.style.display = (cartContainer.style.display === 'block') ? 'none' : 'block';
}

function closeCart() {
    document.getElementById('cart-container').style.display = 'none';
}