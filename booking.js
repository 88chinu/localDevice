document.getElementById("bookingForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const from = document.getElementById("from").value.trim();
    const to = document.getElementById("to").value.trim();
    const train = document.getElementById("train").value;
    const date = document.getElementById("date").value;
    const seats = document.getElementById("seats").value;

    // Create the ticket details object
    const ticketDetails = { name, email, from, to, train, date, seats };

    // Get existing bookings from localStorage or create a new empty array if not available
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    // Add the new booking to the bookings array
    bookings.push(ticketDetails);

    // Save both the latest ticket and the updated bookings list
    localStorage.setItem("ticketDetails", JSON.stringify(ticketDetails));
    localStorage.setItem("bookings", JSON.stringify(bookings));

    // Redirect to ticket page
    window.location.href = "ticket.html";
});
