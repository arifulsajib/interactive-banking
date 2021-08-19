const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
    const userMail = document.getElementById("userMail").value;
    const userPassword = document.getElementById("userPassword").value;

    if (userMail == "sajib@gmail.com" && userPassword == "12345") {
        window.location.href = "banking.html";
    } else {
        alert("Enter Correct email and password!! ----Email: sajib@gmail.com --- pass: 12345");
    }
})