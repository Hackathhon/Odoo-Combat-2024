// auth.js

document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', updateProfile);
});

function updateProfile(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Send updated profile data to the server (mock update here)
    console.log('Profile updated:', { username, email, password });
}
