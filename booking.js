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

    // Get existing bookings from localStorage or create a new empty array if not available
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add the new booking to the bookings array
    bookings.push(ticketDetails);

    // Save the ticket with Booking ID
    localStorage.setItem("ticketDetails", JSON.stringify(ticketDetails));
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to ticket page
    window.location.href = "ticket.html";
});

// Clear Form Button Functionality
document.getElementById("clearButton").addEventListener("click", function () {
    document.getElementById("bookingForm").reset();
});
