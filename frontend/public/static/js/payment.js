// payment.js

document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('payment-form');
    paymentForm.addEventListener('submit', processPayment);
});

function processPayment(event) {
    event.preventDefault();
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;

    // Process payment and confirm with the server (mock payment here)
    console.log('Payment processed:', { cardNumber, expiryDate, cvv });

    // Redirect to confirmation page or display receipt
    window.location.href = 'confirmation.html';
}
