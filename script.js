// Predefined username and password
const validUsername = "teamSheldon";
const validPassword = "ftc2024";

function validateLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        window.location.href = "dashboard.html"; // Redirect to the dashboard or another page
    } else {
        document.getElementById("errorMessage").textContent = "Invalid username or password.";
    }

    // Prevent form submission
    return false;
}
