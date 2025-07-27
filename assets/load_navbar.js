// load_navbar.js
document.addEventListener('DOMContentLoaded', function() {
    fetch('navbar.html') // Fetch the content of navbar.html
        .then(response => {
            if (!response.ok) {
                // If the response was not OK (e.g., 404 Not Found), throw an error
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text(); // Parse the response as plain text
        })
        .then(html => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = html; // Insert the fetched HTML into the placeholder
            } else {
                console.error('Navbar placeholder not found. Ensure an element with id="navbar-placeholder" exists in your HTML.');
            }
        })
        .catch(error => {
            console.error('Error loading navigation bar:', error);
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = '<p style="color: red;">Error loading navigation.</p>';
            }
        });
});
