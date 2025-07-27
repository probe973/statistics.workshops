// load_navbar.js
document.addEventListener('DOMContentLoaded', function() {
    // IMPORTANT: Replace '[YOUR_REPO_NAME]' with the actual name of your GitHub repository
    // (e.g., 'my_project_folder' if your repo is named that).
    // If your site is a User/Organization page (e.g., 'your-username.github.io' directly),
    // then remove '/[YOUR_REPO_NAME]' entirely, leaving just '/assets/navbar.html'.
    const navbarPath = '/statistics.workshops/assets/navbar.html'; // Absolute path from site root

    fetch(navbarPath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = html;
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
