document.getElementById("myForm").addEventListener("submit", function (event) {
  try {
    // Get form inputs that the user types 
    let fullName = document.getElementById("myForm")["text"].value;
    let email = document.getElementById("myForm")["email"].value;
    let message = document.getElementById("myForm")["message"].value;

    // Check if inputs are empty, if empty a alert pops up sayin fill in all fields
    if (!fullName || !email || !message) {
      throw new Error("All fields must be filled out");
    }

    // If all validations pass, the form will submit
  } catch (error) {
    // Display error message
    alert(error.message);
    // Prevent form submission
    event.preventDefault();
  }
});
