document.getElementById('bookingForm').addEventListener('submit', handleBookingFormSubmission);

function handleBookingFormSubmission(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const train = document.getElementById('train').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;

    if (!name || !email || !train || !date || !seats) {
        alert("Please fill in all fields.");
        return;
    }

    const ticketDetails = `
        Booking Confirmation
        Name: ${name}
        Email: ${email}
        Train: ${train}
        Date: ${date}
        Seats: ${seats}
    `;

    document.getElementById('response').innerHTML = ticketDetails;

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push({ name, email, train, date, seats });
    localStorage.setItem('bookings', JSON.stringify(bookings));

    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'block';
    downloadBtn.onclick = function () {
        const blob = new Blob([ticketDetails], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'ticket_details.txt';
        link.click();
    };

    document.getElementById('bookingForm').reset();
}
