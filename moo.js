document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let confirmationMessage = document.getElementById("confirmationMessage");

    if (name === "" || email === "" || message === "") {
        confirmationMessage.style.color = "red";
        confirmationMessage.textContent = "يرجى ملء جميع الحقول!";
    } else {
        confirmationMessage.style.color = "green";
        confirmationMessage.textContent = `شكرًا لك، ${name}! تم إرسال رسالتك بنجاح.`;
        document.getElementById("contactForm").reset();
    }
});
