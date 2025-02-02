window.onload = function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const pastBookingsDiv = document.getElementById('pastBookings');

    pastBookingsDiv.innerHTML = '';

    if (bookings.length > 0) {
        const recentBookings = bookings.slice(-3);

        recentBookings.forEach((booking) => {
            pastBookingsDiv.innerHTML += `
                <div class="past-booking-box">
                    <h3>Recent Booking</h3>
                    <p><strong>Booking ID:</strong> ${booking.bookingId}</p>
                    <p><strong>Name:</strong> ${booking.name}</p>
                    <p><strong>Train:</strong> ${booking.train}</p>
                    <p><strong>Date:</strong> ${booking.date}</p>
                    <p><strong>Seats:</strong> ${booking.seats}</p>
                    <button class="view-btn" onclick="viewTicketDetails('${booking.bookingId}')">View Details</button>
                    <button class="cancel-btn" onclick="cancelBooking('${booking.bookingId}')">Cancel</button>
                </div>
            `;
        });
    } else {
        pastBookingsDiv.innerHTML = '<p style="text-align: center;">No past bookings found.</p>';
    }
};

function viewTicketDetails(bookingId) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings.find(b => b.bookingId === bookingId);
    localStorage.setItem('ticketDetails', JSON.stringify(booking));
    window.location.href = 'ticket.html';
}

function cancelBooking(bookingId) {
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings = bookings.filter(b => b.bookingId !== bookingId);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    alert("Booking canceled successfully.");
    window.location.reload();
}
