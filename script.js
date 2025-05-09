// Store user preferences in localStorage
function storePreferences(username, email) {
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
  }
  
  // Retrieve user preferences from localStorage
  function retrievePreferences() {
    const username = localStorage.getItem("username");
    const email = localStorage.getItem("email");
    if (username && email) {
      document.getElementById('feedback').textContent = `Welcome back, ${username}! Your email: ${email}`;
    }
  }
  
  // Trigger animation on form submit
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission
  
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
  
    if (username && email) {
      storePreferences(username, email);
  
      // Trigger a success animation (feedback message with animation)
      document.getElementById('feedback').textContent = `Signup successful! Welcome, ${username}!`;
      document.getElementById('feedback').style.animation = "fadeIn 1s ease-in-out";
    }
  });
  
  // Check if user preferences are already stored and display them
  retrievePreferences();
  