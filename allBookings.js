document.addEventListener("DOMContentLoaded", function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const allBookingsDiv = document.getElementById('allBookings');

    allBookingsDiv.innerHTML = '';

    if (bookings.length > 0) {
        bookings.forEach((booking) => {
            const ticketHTML = `
                <div class="booking-box">
                    <h3>Train Ticket</h3>
                    <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
                    <p><strong>Name:</strong> ${booking.name}</p>
                    <p><strong>Train:</strong> ${booking.train}</p>
                    <p><strong>Date:</strong> ${booking.date}</p>
                    <p><strong>Seats:</strong> ${booking.seats}</p>
                    <button class="download-btn" onclick="downloadTicket('${booking.bookingId}')"> Download Ticket </button>
                </div> `;
            allBookingsDiv.insertAdjacentHTML('beforeend', ticketHTML);
        });
    } else {
        allBookingsDiv.innerHTML = '<p style="text-align: center;">No bookings available.</p>';
    }
});

function downloadTicket(bookingId) { /* Use ticket.js download function */ }
function cancelBooking(bookingId) { /* Use pastbooking.js cancel function */ }
