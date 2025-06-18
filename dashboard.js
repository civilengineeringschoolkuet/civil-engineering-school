// Load user data from localStorage
window.onload = function () {
    document.getElementById("user-name").textContent = localStorage.getItem("userName") || "Guest";
    document.getElementById("user-name-display").textContent = localStorage.getItem("userName") || "Guest";
    document.getElementById("user-contact").textContent = localStorage.getItem("userContact") || "Not Set";
    document.getElementById("user-email").textContent = localStorage.getItem("userEmail") || "Not Set";
    document.getElementById("user-institute").textContent = localStorage.getItem("userInstitute") || "Not Set";
};

// Edit Profile Function
function editProfile() {
    document.getElementById("edit-profile-form").style.display = "block";
}

// Save Profile Updates
function saveProfile() {
    localStorage.setItem("userName", document.getElementById("edit-name").value);
    localStorage.setItem("userContact", document.getElementById("edit-contact").value);
    localStorage.setItem("userEmail", document.getElementById("edit-email").value);
    localStorage.setItem("userInstitute", document.getElementById("edit-institute").value);
    alert("Profile updated successfully!");
    location.reload();
}

// Profile Picture Update
function previewImage(event) {
  const reader = new FileReader();
  reader.onload = function () {
    const preview = document.getElementById("preview");
    preview.src = reader.result;
    localStorage.setItem("userPhoto", reader.result); // Save to localStorage
  };
  reader.readAsDataURL(event.target.files[0]);
}

window.onload = function () {
  const photo = localStorage.getItem("userPhoto");
  if (photo) document.getElementById("preview").src = photo;
};



// Load Payment History
const payments = JSON.parse(localStorage.getItem("payments")) || [];
const paymentList = document.getElementById("payments-list");

payments.forEach(payment => {
    const li = document.createElement("li");
    li.innerHTML = `${payment.noteName} - <a href="${payment.downloadLink}" download>Download</a>`;
    paymentList.appendChild(li);
});

// Logout Function
function logout() {
    localStorage.clear();
    alert("Logged out successfully!");
    window.location.href = "index.html";
}