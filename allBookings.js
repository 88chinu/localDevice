window.onload = function () {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const allBookingsDiv = document.getElementById('allBookings');

    if (bookings.length > 0) {
        bookings.forEach((booking, index) => {
            allBookingsDiv.innerHTML += `
                <div>
                    <p>
                        <strong>Name:</strong> ${booking.name} |
                        <strong>Train:</strong> ${booking.train} |
                        <strong>Date:</strong> ${booking.date} |
                        <strong>Seats:</strong> ${booking.seats}
                    </p>
                    <button onclick="downloadTicket(${index})">Download Ticket</button>
                </div>
            `;
        });
    } else {
        allBookingsDiv.innerHTML = '<p>No bookings available.</p>';
    }
};

function downloadTicket(index) {
    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    const booking = bookings[index];
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
    link.click();
}
