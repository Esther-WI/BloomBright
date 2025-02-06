document.addEventListener("DOMContentLoaded", function () {
  // Select the form
  const contactForm = document.getElementById("contactForm");

  // Listen for form submission
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page reload

    // Get input values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Log data to the console
    console.log("Form Submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Message:", message);

    // Optionally, clear the form after submission
    contactForm.reset();
  });
});
