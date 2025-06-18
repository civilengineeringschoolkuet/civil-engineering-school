// Function to register user
function registerUser(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    alert("Registration successful! You can now log in.");
    window.location.href = "login.html";
}

// Function to log in user
function loginUser(event) {
    event.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let storedEmail = localStorage.getItem("userEmail");
    let storedPassword = localStorage.getItem("userPassword");

    if (email === storedEmail && password === storedPassword) {
        alert("Login successful! Welcome to Civil Engineering School.");
        window.location.href = "index.html"; // Redirect to homepage
    } else {
        alert("Invalid email or password. Try again!");
    }
}
