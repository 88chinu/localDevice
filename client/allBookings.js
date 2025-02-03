document.addEventListener("DOMContentLoaded", function () {
    const allBookingsDiv = document.getElementById('allBookings');
    
    // Fetch the bookings from the server
    fetch('http://localhost:7000/api/bookings')
        .then(response => response.json())
        .then(bookings => {
            allBookingsDiv.innerHTML = ''; // Clear existing content
            if (bookings.length > 0) {
                bookings.forEach((booking) => {
                    const ticketHTML = `
                        <div class="booking-box">
                            <h3>Train Ticket</h3>
                            <p><strong>Booking ID:</strong> ${booking._id}</p>
                            <p><strong>Name:</strong> ${booking.name}</p>
                            <p><strong>Train:</strong> ${booking.train}</p>
                            <p><strong>Date:</strong> ${new Date(booking.date).toLocaleDateString()}</p>
                            <p><strong>Seats:</strong> ${booking.seats}</p>
                            <button class="download-btn" onclick="downloadTicket('${booking._id}')"> Download Ticket </button>
                        </div>`;
                    allBookingsDiv.insertAdjacentHTML('beforeend', ticketHTML);
                });
            } else {
                allBookingsDiv.innerHTML = '<p style="text-align: center;">No bookings available.</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching bookings:', error);
        });
});

function downloadTicket(bookingId) {
    // Here, you can create functionality to download ticket or open ticket details
    // Example: Fetch ticket details and then generate a download
    fetch(`http://localhost:7000/api/booking/${bookingId}`)
        .then(response => response.json())
        .then(ticket => {
            // You can now generate a downloadable file or display ticket details
            console.log(ticket);
        })
        .catch(error => {
            console.error('Error downloading ticket:', error);
        });
}
