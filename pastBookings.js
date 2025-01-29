//pastbookings.js
window.onload = function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const pastBookingsDiv = document.getElementById('pastBookings');

    if (bookings.length > 0) {
        bookings.forEach((booking, index) => {
            pastBookingsDiv.innerHTML += `
                <div>
                    <p>Name: ${booking.name}, Train: ${booking.train}, Date: ${booking.date}, Seats: ${booking.seats}</p>
                    <button onclick="viewTicketDetails(${index})">View Details</button>
                    <button onclick="cancelBooking(${index})">Cancel Booking</button>
                </div>
            `;
        });
    } else {
        pastBookingsDiv.innerHTML = '<p>No past bookings found.</p>';
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
    window.location.reload();
    alert("Booking cancelled successfully.");
}
