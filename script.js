// Function to dynamically load a page into the main content area
function loadPage(page) {
    const content = document.getElementById('content');
    fetch(page)
        .then(response => response.text())
        .then(data => {
            content.innerHTML = data;
            // Call the function to reattach the event listeners after loading content
            attachNavbarEventListeners();
        })
        .catch(error => {
            console.error('Error loading page:', error);
            content.innerHTML = '<p>Sorry, the page could not be loaded. Please try again later.</p>';
        });
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
            // Attach event listeners for the navbar links
            attachNavbarEventListeners();
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

// Function to attach event listeners to navbar links
function attachNavbarEventListeners() {
    const homeLink = document.getElementById('homeLink');
    const bookingLink = document.getElementById('bookingLink');
    const pastBookingsLink = document.getElementById('pastBookingsLink');

    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage('home.html');
        });
    }
    
    if (bookingLink) {
        bookingLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage('booking.html');
        });
    }
    
    if (pastBookingsLink) {
        pastBookingsLink.addEventListener('click', (e) => {
            e.preventDefault();
            loadPage('pastBookings.html');
        });
    }
}

// Function to initialize the page on load
window.onload = function () {
    loadNavbarAndFooter(); // Load the navbar and footer
    loadHome(); // Load the home page by default
};
