"use strict";
// JavaScript code for form validation
	// Prevent form from submitting
  myForm.addEventListener("invalid", function(evt) {
    evt.preventDefault();


      // Retrieve the input field value
      let FormInput = document.getElementById("inputField");


      // Regular expression pattern for alphanumeric input
      let isValid = /^[a-zA-Z0-9]+$/.test(FormInput.value);
       

      

      // Check if the input value matches the pattern
      if (isValid) {

        // Valid input: display confirmation and submit the form
        document.write("The form input is valid")
        return true;

        // Invalid input: display error message
      } else {
        document.write("The form input was invalid")
        return false
      }
    })