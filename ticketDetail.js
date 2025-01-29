window.onload = function () {
    const ticket = JSON.parse(localStorage.getItem('currentTicket'));
    const ticketDetailsDiv = document.getElementById('ticketDetails');
    const downloadBtn = document.getElementById('downloadBtn');

    if (ticket) {
        ticketDetailsDiv.innerHTML = `
            <p><strong>Name:</strong> ${ticket.name}</p>
            <p><strong>Email:</strong> ${ticket.email}</p>
            <p><strong>Train:</strong> ${ticket.train}</p>
            <p><strong>Date:</strong> ${ticket.date}</p>
            <p><strong>Seats:</strong> ${ticket.seats}</p>
        `;

        downloadBtn.onclick = function () {
            const ticketDetails = `
                Booking Confirmation
                Name: ${ticket.name}
                Email: ${ticket.email}
                Train: ${ticket.train}
                Date: ${ticket.date}
                Seats: ${ticket.seats}
            `;
            const blob = new Blob([ticketDetails], { type: 'text/plain' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'ticket_details.txt';
            link.click();
        };
    } else {
        ticketDetailsDiv.innerHTML = '<p>No ticket details found.</p>';
    }
};
