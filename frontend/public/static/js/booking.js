// booking.js

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', bookFurniture);
});

function bookFurniture(event) {
    event.preventDefault();
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    // Send booking data to the server (mock booking here)
    console.log('Booking confirmed:', { startDate, endDate });

    // Redirect to cart or confirmation page
    window.location.href = 'cart.html';
}
