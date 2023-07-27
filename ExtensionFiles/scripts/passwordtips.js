// passwordtips.js

function getPasswordTips(password) {
  const tips = [];

  if (password.length < 8) {
    tips.push("Your password should be at least 8 characters long.");
  }

  if (!/[A-Z]/.test(password)) {
    tips.push("Include at least one uppercase letter in your password.");
  }

  if (!/[a-z]/.test(password)) {
    tips.push("Include at least one lowercase letter in your password.");
  }

  if (!/\d/.test(password)) {
    tips.push("Add at least one number to your password.");
  }

  if (!/[!@#$%^&*]/.test(password)) {
    tips.push("Include at least one special character (!@#$%^&*) in your password.");
  }

  const lowercasePassword = password.toLowerCase();
  if (
    lowercasePassword.includes("password") ||
    lowercasePassword.includes("qwerty") ||
    lowercasePassword.includes("123456")
  ) {
    tips.push("Avoid using easily guessable words like 'password', 'qwerty', or '123456'.");
  }

  return tips;
}

function displayPasswordTips() {
  const passwordInput = document.getElementById("passInput"); // Updated the id to match the HTML input field
  const passwordTipsOutput = document.getElementById("generatedTips");

  const password = passwordInput.value;
  const tips = getPasswordTips(password);

  if (tips.length === 0) {
    passwordTipsOutput.value = "Great job! Your password looks strong.";
  } else {
    passwordTipsOutput.value = tips.join("\n"); // Join tips with a newline to display each tip on a new line
  }
}

// Use the "input" event to trigger the tips display when the user types or modifies the password
document.getElementById("passBtn").addEventListener("click", displayPasswordTips);
