function submitDonation(event) {
    event.preventDefault();
    
    const amount = document.getElementById("amount").value;
    const confirmationMessage = document.getElementById("confirmationMessage");
    
    // Simulating donation submission (replace with actual donation submission logic)
    confirmationMessage.textContent = `Thank you for your donation of $${amount}!`;
}