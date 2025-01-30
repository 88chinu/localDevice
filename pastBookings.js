window.onload = function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const pastBookingsDiv = document.getElementById('pastBookings');

    // Clear previous content
    pastBookingsDiv.innerHTML = '';

    if (bookings.length > 0) {
        // Get the last 3 bookings
        const recentBookings = bookings.slice(-3);

        recentBookings.forEach((booking, index) => {
            pastBookingsDiv.innerHTML += `
                <div class="past-booking-box">
                    <h3>🎟 Recent Booking</h3>
                    <p><strong>Name:</strong> ${booking.name}</p>
                    <p><strong>Train:</strong> ${booking.train}</p>
                    <p><strong>Date:</strong> ${booking.date}</p>
                    <p><strong>Seats:</strong> ${booking.seats}</p>
                    <div class="button-group">
                        <button class="view-btn" onclick="viewTicketDetails(${index})">👁 View Details</button>
                        <button class="cancel-btn" onclick="cancelBooking(${index})">❌ Cancel Booking</button>
                    </div>
                </div>
            `;
        });
    } else {
        pastBookingsDiv.innerHTML = '<p style="text-align: center;">No past bookings found.</p>';
    }
};

function viewTicketDetails(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings[index];
    localStorage.setItem('currentTicket', JSON.stringify(booking));
    window.location.href = 'ticket.html';
}

function cancelBooking(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.splice(index, 1);
    localStorage.setItem('bookings', JSON.stringify(bookings));
    alert("Booking cancelled successfully.");
    window.location.reload();
}
