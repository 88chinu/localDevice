document.addEventListener("DOMContentLoaded", function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const allBookingsDiv = document.getElementById('allBookings');

    // Clear any hardcoded ticket placeholders
    allBookingsDiv.innerHTML = '';

    if (bookings.length > 0) {
        bookings.forEach((booking, index) => {
            const ticketHTML = `
                <div class="booking-box">
                    <h3>Train Ticket</h3>
                    <p><strong>Name:</strong> ${booking.name}</p>
                    <p><strong>Gender:</strong>${booking.gender}</p>
                    <p><strong>Train:</strong> ${booking.train}</p>
                    <p><strong>Date:</strong> ${booking.date}</p>
                    <p><strong>Seats:</strong> ${booking.seats}</p>
                    <button class="download-btn" onclick="downloadTicket(${index})"> Download Ticket </button>
                </div> `;
            allBookingsDiv.insertAdjacentHTML('beforeend', ticketHTML);
        });
    } else {
        allBookingsDiv.innerHTML = '<p style="text-align: center;">No bookings available.</p>';
    }
});

function downloadTicket(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings[index];

    if (!booking.email) {
        booking.email = "Not provided"; // Fallback if email is missing
    }

    const ticketDetails = `
        Booking Confirmation
        Name: ${booking.name}
        Email: ${booking.email}
        Train: ${booking.train}
        Date: ${booking.date}
        Seats: ${booking.seats}
    `;

    const blob = new Blob([ticketDetails], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `ticket_${index + 1}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
