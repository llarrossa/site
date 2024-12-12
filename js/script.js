// Example of an OOP Class in JavaScript
class ContactForm {
    constructor(formSelector) {
      this.form = document.querySelector(formSelector);
      this.addSubmitListener();
    }
  
    addSubmitListener() {
      this.form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Form submitted!');
        // Add AJAX or additional logic here
      });
    }
  }
  
  $(document).ready(function () {
    // Instantiate the ContactForm class
    new ContactForm('form');
  });
  