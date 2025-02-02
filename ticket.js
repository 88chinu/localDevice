document.addEventListener("DOMContentLoaded", () => {
    const ticketInfoDiv = document.getElementById("ticketInfo");
    const downloadBtn = document.getElementById("downloadPdf");
    const cancelBtn = document.getElementById("cancelTicket");
    const notificationDiv = document.getElementById("notification");

    const ticketDetails = JSON.parse(localStorage.getItem("ticketDetails"));

    if (ticketDetails) {
        ticketInfoDiv.innerHTML = `
            <table class="ticket-table">
                <tr><th>Booking ID</th><td>${ticketDetails.bookingId}</td></tr>
                <tr><th>Name</th><td>${ticketDetails.name}</td></tr>
                <tr><th>Age</th><td>${ticketDetails.age}</td></tr>
                <tr><th>Gender</th><td>${ticketDetails.gender}</td></tr>
                <tr><th>Email</th><td>${ticketDetails.email}</td></tr>
                <tr><th>From</th><td>${ticketDetails.from}</td></tr>
                <tr><th>To</th><td>${ticketDetails.to}</td></tr>
                <tr><th>Train</th><td>${ticketDetails.train}</td></tr>
                <tr><th>Date</th><td>${ticketDetails.date}</td></tr>
                <tr><th>Seats</th><td>${ticketDetails.seats}</td></tr>
            </table>
        `;
    } else {
        ticketInfoDiv.innerHTML = "<p>No ticket details found.</p>";
    }

    downloadBtn.addEventListener("click", () => {
        if (ticketDetails) {
            const trainType = ticketDetails.train.replace(/\s+/g, "_"); // Replace spaces with underscores
            const ticketText = `
    =============================
            TRAIN TICKET
    =============================
    Booking ID : ${ticketDetails.bookingId}
    Name       : ${ticketDetails.name}
    Age        : ${ticketDetails.age}
    Gender     : ${ticketDetails.gender}
    Email      : ${ticketDetails.email}
    From       : ${ticketDetails.from}
    To         : ${ticketDetails.to}
    Train      : ${ticketDetails.train}
    Date       : ${ticketDetails.date}
    Seats      : ${ticketDetails.seats}
    =============================
    Thank you for booking with us! Safe travels!
            `;
    
            const blob = new Blob([ticketText], { type: "text/plain" });
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = `${trainType}_${ticketDetails.bookingId}.txt`;
            document.body.appendChild(link);  // Ensure it's part of the DOM
            link.click();
            document.body.removeChild(link);  // Remove it after clicking
    
            showNotification(`Ticket for ${ticketDetails.train} downloaded successfully!`, "success");
        }
    });
    

    // Cancel Ticket
    cancelBtn.addEventListener("click", () => {
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        const updatedBookings = bookings.filter(b => b.bookingId !== ticketDetails.bookingId);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
        localStorage.removeItem("ticketDetails");

        ticketInfoDiv.innerHTML = "<p>Your ticket has been canceled.</p>";
        showNotification("Ticket canceled successfully!", "error");
    });

    function showNotification(message, type) {
        notificationDiv.textContent = message;
        notificationDiv.className = `notification ${type}`;
        setTimeout(() => {
            notificationDiv.textContent = "";
            notificationDiv.className = "notification";
        }, 3000);
    }
});
