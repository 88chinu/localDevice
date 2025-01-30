document.addEventListener("DOMContentLoaded", () => {
    const ticketInfoDiv = document.getElementById("ticketInfo");
    const downloadBtn = document.getElementById("downloadPdf"); // Updated to match ID in HTML
    const cancelBtn = document.getElementById("cancelTicket");
    const notificationDiv = document.getElementById("notification");

    // Debugging: Check if the elements are correctly found
    console.log("ticketInfoDiv:", ticketInfoDiv);
    console.log("downloadBtn:", downloadBtn);
    console.log("cancelBtn:", cancelBtn);
    console.log("notificationDiv:", notificationDiv);

    if (ticketInfoDiv && downloadBtn && cancelBtn && notificationDiv) {
        const ticketDetails = JSON.parse(localStorage.getItem("ticketDetails"));

        if (ticketDetails) {
            ticketInfoDiv.innerHTML = `
                <p><strong>Name:</strong> ${ticketDetails.name}</p>
                <p><strong>Age:</strong> ${ticketDetails.age}</p>
                <p><strong>Gender:</strong> ${ticketDetails.gender}</p>
                <p><strong>Email:</strong> ${ticketDetails.email}</p>
                <p><strong>From:</strong> ${ticketDetails.from}</p>
                <p><strong>To:</strong> ${ticketDetails.to}</p>
                <p><strong>Train:</strong> ${ticketDetails.train}</p>
                <p><strong>Date:</strong> ${ticketDetails.date}</p>
                <p><strong>Seats:</strong> ${ticketDetails.seats}</p>
            `;
        } else {
            ticketInfoDiv.innerHTML = "<p>No ticket details found.</p>";
        }

        // Show notification
        const showNotification = (message, type) => {
            notificationDiv.textContent = message;
            notificationDiv.className = `notification ${type}`;
            setTimeout(() => {
                notificationDiv.textContent = "";
                notificationDiv.className = "notification";
            }, 3000); // Auto-hide after 3 seconds
        };

        // Download ticket as a text file
        downloadBtn.addEventListener("click", () => {
            console.log('Download button clicked'); // Debugging line
            if (ticketDetails) {
                const ticketText = `
                    Train Ticket

                    Name: ${ticketDetails.name}
                    Age: ${ticketDetails.age}
                    Gender: ${ticket.gender}
                    Email: ${ticketDetails.email}
                    From: ${ticketDetails.from}
                    To: ${ticketDetails.to}
                    Train: ${ticketDetails.train}
                    Date: ${ticketDetails.date}
                    Seats: ${ticketDetails.seats}
                `;

                // Create a Blob and initiate the download
                const blob = new Blob([ticketText], { type: 'text/plain' });
                const link = document.createElement("a");
                link.href = URL.createObjectURL(blob);
                link.download = `Ticket_${ticketDetails.name}.txt`;
                link.click();

                showNotification("Ticket downloaded as text file!", "success");
            } else {
                console.log('No ticket details to download'); // Debugging line
            }
        });

        // Cancel ticket
        cancelBtn.addEventListener("click", () => {
            console.log('Cancel button clicked'); // Debugging line
            localStorage.removeItem("ticketDetails"); // Clear ticket details
            ticketInfoDiv.innerHTML = "<p>Your ticket has been canceled.</p>";
            showNotification("Ticket canceled successfully!", "error");
        });

    } else {
        console.log('One or more elements are missing'); // Debugging line
    }
});
