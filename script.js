// Function to dynamically load a page into the main content area
function loadPage(page) {
    const content = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(data => (content.innerHTML = data))
        .catch(error => console.error('Error loading page:', error));
}

// Function to load the home page
function loadHome() {
    loadPage('home.html');
}

// Function to dynamically load the navbar and footer
function loadNavbarAndFooter() {
    // Load Navbar
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;

            // Add event listeners to navbar links after loading
            document.getElementById('homeLink').addEventListener('click', (e) => {
                e.preventDefault();
                loadPage('home.html');
            });

            document.getElementById('bookingLink').addEventListener('click', (e) => {
                e.preventDefault();
                loadPage('booking.html');
            });

            document.getElementById('pastBookingsLink').addEventListener('click', (e) => {
                e.preventDefault();
                loadPage('pastBookings.html');
            });
        })
        .catch(error => console.error('Error loading navbar:', error));

    // Load Footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
}

// Function to initialize the page on load
window.onload = function () {
    loadNavbarAndFooter(); // Load the navbar and footer
    loadHome(); // Load the home page by default
};
