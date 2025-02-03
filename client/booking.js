document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();
    const gender = document.getElementById("gender").value;
    const email = document.getElementById("email").value.trim();
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const train = document.getElementById("train").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // Generate a unique Booking ID
    const bookingId = "TICKET-" + Math.floor(Math.random() * 1000000);

    // Create the ticket details object
    const ticketDetails = { bookingId, name, age, gender, email, from, to, train, date, seats };

    // Send the booking details to the backend
    fetch('http://localhost:7000/api/bookings', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(ticketDetails),
    })
    .then(response => response.json())
    .then(data => {
        // Redirect to the ticket page with booking ID
        window.location.href = `ticket.html?bookingId=${data.bookingId}`;
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error booking the ticket. Please try again.');
    });
});

// Clear Form Button Functionality
document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("bookingForm").reset();
});
